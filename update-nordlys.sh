#!/bin/bash

set -e

UPSTREAM_REMOTE="upstream"
UPSTREAM_URL="https://github.com/FjellOverflow/nordlys.git"
UPSTREAM_BRANCH="main"

# keep local version
KEEP_OURS=(
    "README.md"
    "public"
    "src/assets/logo.svg"
    "src/pages/about.mdx"
    "src/pages/index.md"
    "src/theme.config.ts"
) 

# take upstream version
KEEP_THEIRS=(
    "package.json"
    "pnpm-lock.yaml"
    "CHANGELOG.md"
    "test"
)

# ignore when added from upstream
DELETE=(
    ".github/workflows/ci.yaml"
)

# add & fetch upstream
if ! git remote get-url "$UPSTREAM_REMOTE" &> /dev/null; then
    git remote add "$UPSTREAM_REMOTE" "$UPSTREAM_URL"
fi

git fetch "$UPSTREAM_REMOTE"

# preserve content submodule
CONTENT_COMMIT=$(git ls-tree HEAD content | awk '{print $3}')
CONTENT_BACKUP=$(mktemp -d)
if [ -d content ]; then
    mv content "$CONTENT_BACKUP/content"
fi

# actual merge
git merge --squash --allow-unrelated-histories "$UPSTREAM_REMOTE/$UPSTREAM_BRANCH" || true

# restore content
rm -rf content content~HEAD

if [ -d "$CONTENT_BACKUP/content" ]; then
    mv "$CONTENT_BACKUP/content" content
fi
rmdir "$CONTENT_BACKUP" 2>/dev/null || true

git rm -rf --cached content content~HEAD 2>/dev/null || true
if [ -n "$CONTENT_COMMIT" ]; then
    git update-index --add --cacheinfo 160000,"$CONTENT_COMMIT",content
fi

git checkout HEAD -- .gitmodules

# auto-resolve files defined above
for path in "${KEEP_OURS[@]}"; do
    git checkout --ours -- "$path" 2>/dev/null && git add -- "$path" 2>/dev/null || true
done

for path in "${KEEP_THEIRS[@]}"; do
    git checkout --theirs -- "$path" 2>/dev/null && git add -- "$path" 2>/dev/null || true
done

for path in "${DELETE[@]}"; do
    git rm -rf --cached -- "$path" 2>/dev/null || true
    rm -rf -- "$path"
done

# suggest commit message
UPSTREAM_TAG=$(git describe --tags --abbrev=0 "$UPSTREAM_REMOTE/$UPSTREAM_BRANCH" 2>/dev/null || echo "unknown")
echo "chore: update to nordlys@$UPSTREAM_TAG" > .git/SQUASH_MSG

UNMERGED=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
if [ -n "$UNMERGED" ]; then
    echo "Conflicts requiring manual resolution:"
    echo "$UNMERGED" | sed 's/^/  /'
fi