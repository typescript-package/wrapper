
<a href="https://www.typescriptlang.org/">
  <img
    src="https://raw.githubusercontent.com/typescript-package/core/refs/heads/main/ts-package-barcode-logo-512.png"
    width="20%"
    title="@typescript-package/wrapper"
  />
</a>

## typescript-package/wrapper

A lightweight TypeScript library to wrap the text with the opening and closing chars.

<!-- npm badge -->
[![npm version][typescript-package-npm-badge-svg]][typescript-package-npm-badge]
[![GitHub issues][typescript-package-badge-issues]][typescript-package-issues]
[![GitHub license][typescript-package-badge-license]][typescript-package-license]

<br>

## Table of contents

* [Installation](#installation)
* [Api](#api)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

## Installation

```bash
npm install @typescript-package/wrapper
```

## Api

```typescript
import {
   // Object.
   Wrap,
   Wrapper,
   // Type
   Wrapped
} from '@typescript-package/wrapper';
```

### `Wrap`

```typescript
import { Wrap } from "@typescript-package/wrapper";

// Initialize.
const htmlTag = new Wrap('<', '>', 'div');

// The `Wrap` object.
console.log(htmlTag); // Output: Wrap {'<div>', #closing: '>', #opening: '<', #text: 'div'}

console.log(htmlTag.valueOf()); // Output: <div>

// Initialize.
const bbCode = new Wrap('[', ']', 'quote');

console.log(bbCode); // Output: Wrap {'[quote]', #closing: ']', #opening: '[', #text: 'quote'}

console.log(bbCode.valueOf()); // Output: [quote]
```

### `Wrapper`

```typescript
import { Wrapper } from "@typescript-package/wrapper";

// Initialize.
const htmlTag = new Wrapper(
  '<',
  '>',
  'div'
);

// The `Wrap` object.
console.log(htmlTag); // Output: Wrapper {'<div>', #closing: '>', #opening: '<', #text: 'div'}

console.log(htmlTag.valueOf()); // Output: <div>

// Initialize.
const bbCode = new Wrapper('[', ']', 'quote');

console.log(bbCode); // Output: Wrapper {'[quote]', #closing: ']', #opening: '[', #text: 'quote'}

// Wrap the valueOf [quote]
console.log(bbCode.wrap()); // Output: [[quote]]

// Wrap the valueOf [quote] with the specified `opening` and `closing` chars.
console.log(bbCode.wrap(`(`, `)`)); // Output: ([quote])

// Wrap the specified text with the `opening` and `closing` chars.
console.log(bbCode.wrapOn(`/italic`)); // Output: [/italic]

// Replace the `opening` and `closing` chars.
console.log(bbCode.rewrap(`(`, `)`)); // Output: (quote)

// Wraps the `text` inside.
console.log(bbCode.wrapText(`(`, `)`)); // Output: [(quote)]

// Returns the primitive value.
console.log(bbCode.valueOf()); // Output: [quote]
```

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typescript-package ([license][typescript-package-license])

<!-- This package: typescript-package  -->
  <!-- GitHub: badges -->
  [typescript-package-badge-issues]: https://img.shields.io/github/issues/typescript-package/wrapper
  [isscript-package-badge-forks]: https://img.shields.io/github/forks/typescript-package/wrapper
  [typescript-package-badge-stars]: https://img.shields.io/github/stars/typescript-package/wrapper
  [typescript-package-badge-license]: https://img.shields.io/github/license/typescript-package/wrapper
  <!-- GitHub: badges links -->
  [typescript-package-issues]: https://github.com/typescript-package/wrapper/issues
  [typescript-package-forks]: https://github.com/typescript-package/wrapper/network
  [typescript-package-license]: https://github.com/typescript-package/wrapper/blob/master/LICENSE
  [typescript-package-stars]: https://github.com/typescript-package/wrapper/stargazers
<!-- This package -->

<!-- Package: typescript-package -->
  <!-- npm -->
  [typescript-package-npm-badge-svg]: https://badge.fury.io/js/@typescript-package%2Fwrapper.svg
  [typescript-package-npm-badge]: https://badge.fury.io/js/@typescript-package%2Fwrapper

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
