const socialIcons = {
  Github: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
    ></path>
  </svg>`,
  Facebook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
    ></path>
  </svg>`,
  Instagram: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
  </svg>`,
  LinkedIn: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <line x1="8" y1="11" x2="8" y2="16"></line>
    <line x1="8" y1="8" x2="8" y2="8.01"></line>
    <line x1="12" y1="16" x2="12" y2="11"></line>
    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
  </svg>`,
  Mail: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>`,
  Twitter: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </svg>`,
  Twitch: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>`,
  YouTube: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>`,
  WhatsApp: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
    </svg>`,
  Snapchat: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118zm-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118"></path>
    </svg>`,
  Pinterest: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="8" y1="20" x2="12" y2="11"></line>
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </svg>`,
  TikTok: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>`,
  CodePen: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <line x1="3" y1="9" x2="3" y2="15"></line>
      <line x1="21" y1="9" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="9"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
    </svg>`,
  Discord: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
      <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
      <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
    </svg>`,
  GitLab: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path>
    </svg>`,
  Reddit: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"></path>
      <path d="M12 8l1 -5l6 1"></path>
      <circle cx="19" cy="4" r="1"></circle>
      <circle cx="9" cy="13" r=".5" fill="currentColor"></circle>
      <circle cx="15" cy="13" r=".5" fill="currentColor"></circle>
      <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"></path>
    </svg>`,
  Skype: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1 -5.953 5.953a9 9 0 0 1 -11.253 -11.253a4.5 4.5 0 0 1 5.953 -5.954a8.987 8.987 0 0 1 2.65 -.396z"></path>
      <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4 -1.187 4 -2.5c0 -1.503 -1.927 -2.5 -4 -2.5s-4 -.997 -4 -2.5c0 -1.313 1.095 -2.5 4 -2.5c1.642 0 3.5 .5 4 2.5"></path>
    </svg>`,
  Steam: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z"></path>
      <circle fill="currentColor" cx="16.5" cy="9.5" r="1"></circle>
    </svg>`,
  Telegram: `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-tabler"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
      </svg>`,
  Mastodon: `<svg class="icon-tabler" viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <path fill="currentColor"
  d="M499 112q-93 1 -166 11q-81 11 -128 33l-14 8q-16 10 -32 25q-22 21 -38 47q-21 33 -32 73q-14 47 -14 103v37q0 77 1 119q3 113 18 188q19 95 62 154q50 67 134 89q109 29 210 24q46 -3 88 -12q30 -7 55 -17l19 -8l-4 -75l-22 6q-28 6 -57 10q-41 6 -78 4q-53 -1 -80 -7
  q-43 -8 -67 -30q-29 -25 -35 -72q-2 -14 -2 -29l25 6q31 6 65 10q48 7 93 9q42 2 92 -2q32 -2 88 -9t107 -30q49 -23 81.5 -54.5t38.5 -63.5q9 -45 13 -109q4 -46 5 -97v-41q0 -56 -14 -103q-11 -40 -32 -73q-16 -26 -38 -47q-15 -15 -32 -25q-12 -8 -14 -8
  q-46 -22 -127 -33q-74 -10 -166 -11h-3zM367 267q73 0 109 56l24 39l24 -39q36 -56 109 -56q63 0 101 43t38 117v239h-95v-232q0 -74 -61 -74q-69 0 -69 88v127h-94v-127q0 -88 -69 -88q-61 0 -61 74v232h-95v-239q0 -74 38 -117t101 -43z" />
  </svg>`,
  Exercism: `<svg xmlns="http://www.w3.org/2000/svg">
    <path d="M4.35 1.66c-.959 0-1.686.298-2.181.893c-.496.595-.744 1.464-.744 2.605v3.474c0 .805-.086 1.424-.259 1.858c-.173.434-.493.84-.96 1.218c-.138.113-.206.206-.206.278c0 .072.068.165.205.277c.476.386.798.794.967 1.225c.17.43.253 1.047.253 1.851v3.462c0 1.15.25 2.023.75 2.618c.5.595 1.224.892 2.174.892h.882c.379 0 .618-.018.72-.054c.1-.036.15-.127.15-.271c0-.201-.133-.334-.399-.398l-.483-.109c-1.063-.241-1.595-1.29-1.595-3.148v-3.293c0-1.247-.302-2.127-.906-2.642l-.23-.193c-.112-.096-.168-.169-.168-.217c0-.056.056-.129.169-.217l.23-.193c.603-.515.905-1.395.905-2.642V5.641c0-1.11.135-1.88.405-2.31c.27-.43.832-.762 1.685-.995c.258-.073.387-.19.387-.35c0-.217-.29-.326-.87-.326zm14.419.029c-.58 0-.87.108-.87.325c0 .161.128.278.386.35c.854.233 1.416.565 1.686.995c.27.43.405 1.2.405 2.31v3.294c0 1.246.302 2.126.906 2.641l.229.193c.113.089.17.161.17.217c0 .049-.057.121-.17.217l-.23.193c-.603.515-.905 1.396-.905 2.642v3.293c0 1.858-.532 2.907-1.595 3.149l-.484.108c-.266.064-.398.197-.398.398c0 .145.05.235.15.272c.102.036.341.054.72.054h.882c.95 0 1.675-.298 2.174-.893c.5-.595.75-1.467.75-2.617v-3.462c0-.805.084-1.422.253-1.852c.17-.43.491-.838.967-1.224c.137-.113.205-.205.205-.278c0-.072-.068-.165-.205-.277c-.468-.378-.788-.784-.961-1.218c-.173-.435-.26-1.054-.26-1.858V5.187c0-1.142-.247-2.01-.743-2.606c-.495-.595-1.222-.892-2.18-.892zM7.683 9.735c-1.456 0-2.64 1.111-2.64 2.478h1.02c0-.838.727-1.52 1.62-1.52c.892 0 1.619.682 1.619 1.52h1.02c0-1.367-1.183-2.478-2.64-2.478zm8.406 0c-1.456 0-2.639 1.111-2.639 2.478h1.02c0-.838.727-1.52 1.62-1.52c.892 0 1.62.682 1.62 1.52h1.02c0-1.367-1.185-2.478-2.64-2.478zM9.71 14.36v.561c0 1.277 1.062 2.316 2.366 2.316c1.305 0 2.367-1.039 2.367-2.316v-.56h-.934v.56c0 .877-.76 1.426-1.433 1.426s-1.48-.273-1.48-1.426v-.56z"/>
    </svg>`,
    Bookwyrm: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.074 10.459c-4.79-2.117-3.72-3.134-10.746-5.48S5.184 11.195 8.2 19.175a10.5 10.5 0 0 0 7.276 6.924m16.96 2.374c2.069 2.909 1.726 6.986-2.677 8.295m-12.84 1.259c3.241 1.965 8.035 4.553 9.951 4.81c3.707.495 10.11-1.846 11.621-8.12a11.7 11.7 0 0 0-.4-6.914m-.858-1.809a9.2 9.2 0 0 0-3.342-3.497m-18.81 9.183a9.1 9.1 0 0 0-4.078-1.374c-5.133-.09-8.094 5.092-5.61 9.981s9.75 4.003 11.527-2.26s6.36-7.293 6.36-7.293s-5.215-1.367-8.084 3.314c0 0-2.895 6.878-5.412 4.741c-2.745-2.332.502-7.039 4.25-3.22"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.058 16.755s-.982-5.58 3.554-6.507a8.76 8.76 0 0 1 7.165 1.282s-.373 1.712-1.82 1.875a2.65 2.65 0 0 0 3.024-.384a2.46 2.46 0 0 1-.564 2.25s1.777-.007 2.371-.642m-.175-.992s2.025 4.184 4.948 4.093s8.282-3.17 7.934 1.204l1.187-1.417l.692 1.676l.201-2.327l.975.16l-.027-1.341a10.05 10.05 0 0 1-5.067-.293s1.263-1.9 4.976-.973c0 0 1.657-.28.842-1.634s-1.571.659-1.571.659a18 18 0 0 1-2-1.464a6.8 6.8 0 0 1-2.724-3.475l-.78 1.582a1.54 1.54 0 0 0-2.21 1.216s-2.658-.66-2.756-2.052a5.5 5.5 0 0 0-.018 2.551s-2.097.013-2.502-.886c0 0 .037 3.754.916 4.111a3.67 3.67 0 0 1-3.016-1.39m4.716 20.853l2.775-16.556M20.292 32.523l11.037 1.967M20.102 15.439l9.391 1.673m2.937.523l1.674.298m-4.89 21.047l.784-4.674M17.404 37l11.81 1.98m4.066-14.544s1.804 2.24 3.121 1.955s5.72-2.914 6.02 2.048"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.854 26.676s1.798 2.237 3.558 1.744s3.438-2.318 3.872.655M12.24 16.724s2.944 2.035 5.108 1.469s6.619-2.712 8.648 2.17"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.814 20.436a4.24 4.24 0 0 0 3.971.85c2.911-.757 6.346-3.624 7.664.263M24 19.698a3.4 3.4 0 0 1 .839 1.522m13.998-8.227a.84.84 0 0 1-1-.551a2.27 2.27 0 0 0-2.172-1.45"/><circle cx="36.072" cy="12.92" r=".75" fill="currentColor"/><path fill="none" stroke="currentColor" d="M20.102 15.439c-.875-.023-2.367.188-2.787 2.524m-.503 2.997c-.761 4.701-1.889 12.08-1.889 12.08a2.23 2.23 0 0 0 .202 1.374"/><path fill="none" stroke="currentColor" stroke-linecap="round" d="M41.414 28.874a4 4 0 0 0-.202-.97"/></svg>',
    Pixelfed: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m1.031 4.099c1.713 0 3.101 1.345 3.101 3.005s-1.388 3.005-3.1 3.005h-1.819L8.62 16.58V9.832c0-.957.801-1.733 1.79-1.733z"/></svg>'
};

export default socialIcons;
