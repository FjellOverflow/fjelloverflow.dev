---
author: FjellOverflow
pubDatetime: 2022-11-01T20:00:00.000Z
modDatetime: 2024-04-02T16:18:00.000Z
title: Deniable Encryption
ogImage: /src/assets/posts/deniable-encryption.jpg
tags:
  - privacy
  - encryption
description: A critical look at encryption under the threat of key disclosure law
---

Encryption is both useful and vital in the digital age; however, it also presents challenges and can give rise to problematic dilemmas. Here, I want to take a deeper look at the concept of so-called _Deniable Encryption_.

## Table of contents

## Encryption

[Encryption](https://en.wikipedia.org/wiki/Encryption) is the process of concealing a message or data by transforming it into an unreadable collection of characters, decipherable only with the proper key. Today, this is being done very efficiently by computers, and ([while quantum computing is not mature](https://en.wikipedia.org/wiki/Post-quantum_cryptography)) considered mathematically unbreakable. Encryption plays the crucial role in [powering the internet](https://en.wikipedia.org/wiki/Transport_Layer_Security) and is indispensable for modern computing and our everyday use of technology, even if we might not notice.

In a more practical context, this post will center on file or disk encryption, the digital encryption of data stored on a computer. Popular software providing encryption includes [LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup), [Bitlocker](https://en.wikipedia.org/wiki/BitLocker), [FileVault](https://en.wikipedia.org/wiki/FileVault), [VeraCrypt](https://en.wikipedia.org/wiki/VeraCrypt), among others.

## Plausible deniability

The term [plausible deniability](https://en.wikipedia.org/wiki/Plausible_deniability), originating from politics or intelligence agencies, refers to the capacity to deny knowledge of something and still appear credible. For instance, a boss might verbally encourage an employee to illegally download software for them. If the employee is caught and prosecuted for piracy, the boss could deny any involvement and assert that the employee acted independently. In the absence of evidence proving the boss's complicity, he maintains _plausible deniability_.

In the realm of encryption, this concept involves encrypting data while convincingly denying its existence.

## Deniable encryption

The challenge that [deniable encryption](https://en.wikipedia.org/wiki/Deniable_encryption) addresses is that while encryption may effectively protect sensitive data, relying on a key known only to the human keyholder, this individual represents a vulnerable point that can be compromised. Simply put, an attacker that cannot break the encryption [may instead target the keyholder](https://xkcd.com/538/). However, with deniable encryption, where the keyholder can plausibly deny the existence of certain encrypted data or provide a decoy key of no value, the security chain is reinforced.

To illustrate, consider a fictional, yet still imaginable, scenario involving a journalist criticizing an autocratic regime. In an effort to protect a whistleblower, the journalist encrypts a USB stick containing identifying information. If the regime discovers and confiscates the USB drive, they may suspect sensitive data and resort to threats of sanctions, imprisonment, or even torture to coerce the journalist into revealing the encryption key. This is where deniable encryption could prove invaluable.

## Example: Nesting encrypted containers inside each other

One practical method of achieving deniable encryption is by placing encrypted containers _within_ each other. Some software enables the creation of encrypted containers capable of containing any type of data. Within a container, it is possible to create another container and another, nesting them as deeply as wished, provided there is sufficient disk space. Since the software fills all empty space with random bits, inspecting the disk's raw data does not reveal how many encrypted containers are actually hidden inside.

In this scenario, encryption becomes deniable: when threatened, the keyholder can disclose the key to encrypted container _A_, while the disk also contains encrypted containers _B_ and _C_. Under repeated threats, the keyholder may even reveal containers _B_ and _C_, as the actual data resides in container _D_, concealed within container _C_. There is no way of determining how many other containers may be concealed among the random data on the disk.

## The problem with randomness

Technically, it is randomness, or rather [pseudorandomness](https://en.wikipedia.org/wiki/Cryptographically_secure_pseudorandom_number_generator), that enables deniable encryption. It allows for the generation of data that closely resembles encrypted data, making it possible for software to fill spaces with a combination of encrypted and random data. This conceals the true number of encrypted spaces.

A block of random data not only obscures the existence and quantity of encrypted containers within it but also implies the potential presence of encrypted containers, even if none exist, as the entire space is genuinely random data.

The significant advantage of randomness is also its weakness: in a hypothetical scenario, the keyholder may have already disclosed the key to the encrypted container on the disk. However, because much of the space is filled with random data, an attacker might incorrectly assume the existence of additional containers and pressure the keyholder to reveal more keys, even if none exist!

## Destroying encryption keys

An alternative method to secure encrypted data involves [destroying the encryption key](https://en.wikipedia.org/wiki/Crypto-shredding). This could entail maintaining a lengthy and impossible-to-remember key within a file or physically on a piece of paper. When threatened to disclose the key, the keyholder could openly or publicly shred this document, rendering the key forever inaccessible and the encryption impenetrable.

Compared to deniable encryption, this approach offers the advantage that the keyholder can provide proof of lacking access to the data. For an attacker, compelling the keyholder to reveal the key becomes futile since the key has been irreversibly destroyed, eliminating the risk of the attacker trying to reveal more and more encrypted containers without them even existing.

However, this strategy may still pose risks for the keyholder, primarily due to something called [tampering with evidence](https://en.wikipedia.org/wiki/Tampering_with_evidence). Destroying the encryption key while ensuring the safety of the encrypted data could potentially be viewed as a criminal offense, an act of destruction of evidence. While the severity of the consequences largely depends on the circumstances, it illustrates that publicly destroying the key may not always be a viable solution to the initial problem and could result in serious repercussions.

## The problematic _Key Disclosure Law_

In many countries, including most EU-states, suspects being criminally investigated by the police have the [right to remain silent](https://en.wikipedia.org/wiki/Right_to_silence#Worldwide), saving them from self-incrimination. Even if evidence indicates that a suspect possesses certain information, they cannot be directly penalized for refusing to disclose it.

However, an intriguing complication arises when the information in question is stored on an _encrypted_ device. Common sense suggests that a suspect should be permitted to withhold the encryption key, exercising their right to remain silent and avoid self-incrimination. While some countries uphold this principle, others, such as the UK, France, or Australia, have enacted some form of [Key Disclosure Law](https://en.wikipedia.org/wiki/Key_disclosure_law), compelling individuals to reveal passwords under [penalties up to imprisonment](https://www.vice.com/en/article/wnjgdq/how-refusing-to-hand-over-your-passwords-can-land-you-in-jail) for refusal. This law, contentious in itself, takes on an even more troubling dimension when considered alongside the concept of deniable encryption.

Let's revisit deniable encryption: Imagine a USB drive with two hidden encrypted containers, appearing externally as a mass of random data. Now, suppose law enforcement demands that a suspect reveal the encryption key. If the suspect resides in a jurisdiction with a Key Disclosure Law and wishes to avoid self-incrimination, they may disclose both encryption keys. However, given the presence of two encrypted containers on the disk, there could potentially be more concealed data among the random data. If law enforcement remains convinced of the existence of additional containers, they could technically charge the suspect for refusing to disclose a password, even though no further password exists.

Now, consider an even more absurd scenario: a hard drive completely filled with random data may resemble an encrypted hard drive. If such a disk is discovered by law enforcement under suspicion of containing encrypted data, a suspect could potentially _face imprisonment_ in the UK for failing to disclose a password that never actually existed, merely for possessing a hard drive that gives the appearance of being encrypted. While it remains uncertain if the law has been or would be enforced in this way, the legislation allows for the possibility.

## Concluding thoughts

Encryption stands as a crucial, potent, and indispensable tool in today's digital landscape. Its ability to be concealed and denied holds significance for many people. However, the intersection of encryption with laws in certain countries poses a range of problems and raises troubling questions.

The notion that the mere existence of encryption could be punishable is deeply concerning. Are individuals automatically under suspicion simply because encryption technology exists? This raises doubts about the understanding of modern technology and computer security among politicians and lawmakers. Alternatively, it suggests a more disturbing trend of invasive practices by certain agencies and authorities.

In my view, the right to refuse to disclose passwords should be protected in modern democracies. Countries like the UK and France appear to be traversing a dangerous path toward digital authoritarianism, where individual freedoms are increasingly compromised. It's essential that legislation keeps in touch with technological advancements and ensures that our fundamental rights and liberties remain protected in this digital age.

## List of linked references

- [Wikipedia: Encryption](https://en.wikipedia.org/wiki/Encryption)
- [Wikipedia: Post-quantum cryptography](https://en.wikipedia.org/wiki/Post-quantum_cryptography)
- [Wikipedia: TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [Wikipedia: LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup)
- [Wikipedia: BitLocker](https://en.wikipedia.org/wiki/BitLocker)
- [Wikipedia: FileVault](https://en.wikipedia.org/wiki/FileVault)
- [Wikipedia: VeraCrypt](https://en.wikipedia.org/wiki/VeraCrypt)
- [Wikipedia: Plausible deniability](https://en.wikipedia.org/wiki/Plausible_deniability)
- [Wikipedia: Deniable Encryption](https://en.wikipedia.org/wiki/Deniable_encryption)
- [XKCD on breaking encryption ](https://xkcd.com/538/)
- [Wikipedia: Pseudorandomness](https://en.wikipedia.org/wiki/Cryptographically_secure_pseudorandom_number_generator)
- [Wikipedia: Crypto shredding](https://en.wikipedia.org/wiki/Crypto-shredding)
- [Wikipedia: Tampering with evidence](https://en.wikipedia.org/wiki/Tampering_with_evidence)
- [Wikipedia: Right to silence](https://en.wikipedia.org/wiki/Right_to_silence#Worldwide)
- [Wikipedia: Key disclosure law](https://en.wikipedia.org/wiki/Key_disclosure_law)
- [Vice on "Jail time for refusing to hand over passwords"](https://www.vice.com/en/article/wnjgdq/how-refusing-to-hand-over-your-passwords-can-land-you-in-jail)
