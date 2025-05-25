
<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=400&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    width="20%"
    title="@typedly/settings - A collection of TypeScript packages for precise, type-safe development."
  />
</a>

## typedly/settings

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

**Version:** v1.0.0

A **TypeScript** type definitions package for settings.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - [Interface](#interface)
    - [`Length`](#length)
    - [`LengthOptions`](#lengthoptions)
    - [`LengthSettings`](#lengthsettings)
    - [`PatternOptions`](#patternoptions)
    - [`PatternSettings`](#patternsettings)
    - [`ValueSettings`](#valuesettings)
    - [`Settings`](#settings)
  - [Type](#type)
    - [`DisplaySelectedSettings`](#displayselectedsettings)
    - [`SelectableSettings`](#selectablesettings)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

```bash
npm install @typedly/settings --save-peer
```

## Api

```typescript
import {
  // Length.
  Length,
  LengthOptions,
  LengthSettings,
  // Pattern.
  PatternOptions,
  PatternSettings,
  // Value.
  ValueSettings,
  // Settings.
  Settings,
   // Type.
  DisplaySelectedSettings,
  SelectableSettings,
} from '@typedly/settings';
```

### Interface

#### `Length`

[`length-options.interface.ts`](https://github.com/typedly/settings/blob/main/src/interface/length.interface.ts)

```typescript
import { Length } from '@typedly/settings';

export const length: Length<0, 27, 47> = {
  'min': 27,
  'max': 47,
}
```

#### `LengthOptions`

[`length-options.interface.ts`](https://github.com/typedly/settings/blob/main/src/interface/length-options.interface.ts)

```typescript
import { LengthOptions } from '@typedly/settings';

export const length: LengthOptions<0, 27, 47> = {
  'min': 27,
  'max': 47,
}
```

#### `LengthSettings`

[`length-settings.interface.ts`](https://github.com/typedly/settings/blob/main/src/interface/length-settings.interface.ts)

```typescript
import { LengthSettings } from '@typedly/settings';

export const lengthSettings: LengthSettings<0, 27, 47> = {
  length: {
    value: 0,
    min: 27,
    max: 47,
  }
}

export const lengthExactSettings: LengthSettings<27> = {
  length: 27
}
```

#### `PatternOptions`

[`pattern-options.interface.ts`](https://github.com/typedly/settings/blob/main/src/interface/pattern-options.interface.ts)

```typescript
import { PatternOptions } from '@typedly/settings';

const patternOptions: PatternOptions = {
  lowercase: true,
  numeric: true,
  regexp: /^[a-zA-Z0-9_-]+$/,
  special: true,
  uppercase: true,
}
```

#### `PatternSettings`

[`pattern-settings.interface.ts`](https://github.com/typedly/settings/blob/main/src/interface/pattern-settings.interface.ts)

```typescript
import { PatternSettings } from '@typedly/settings';

export const patternSettings: PatternSettings<RegExp> = {
  pattern: {
    lowercase: true,
    numeric: true,
    regexp: /^[a-zA-Z0-9_-]+$/,
    special: true,
    uppercase: true,
  },
}

export const patternRegExpSettings: PatternSettings<RegExp> = {
  pattern: /^[a-zA-Z0-9_-]+$/
}
```

#### `ValueSettings`

[`value-settings.interface.ts`](https://github.com/typedly/settings/blob/main/src/interface/value-settings.interface.ts)

```typescript
import { ValueSettings } from '@typedly/settings';

export const valueSettings: ValueSettings<'the value'> = {
  value: 'the value'
}
```

#### `Settings`

[`settings.interface.ts`](https://github.com/typedly/settings/blob/main/src/interface/settings.interface.ts)

```typescript
import { Settings } from '@typedly/settings';

export const settings: Settings<
  'abcd1234',
  number,
  27,
  34,
  RegExp
> = {
  // LengthSettings
  length: { min: 27, max: 34 },
  // PatternSettings
  pattern: {
    lowercase: true,
    numeric: true,
    regexp: /[a]g/g,
    special: true,
    uppercase: true,
  },
  // ValueSettings
  value: 'abcd1234',
}
```

### Type

#### `DisplaySelectedSettings`

[`display-selected-settings.type.ts`](https://github.com/typedly/settings/blob/main/src/type/display-selected-settings.type.ts)

```typescript
import { DisplaySelectedSettings } from '@typedly/settings';
```

#### `SelectableSettings`

[`selectable-settings.type.ts`](https://github.com/typedly/settings/blob/main/src/type/selectable-settings.type.ts)

```typescript
import { SelectableSettings } from '@typedly/settings';

export const settings: SelectableSettings<
  ['length', 'value'],
  'abcd1234',
  number,
  27,
  34,
  RegExp
> = {
  // LengthSettings
  length: { min: 27, max: 34 },
  // PatternSettings - not allowed
  // pattern: {
  //   lowercase: true,
  //   numeric: true,
  //   regexp: /[a]g/g,
  //   special: true,
  //   uppercase: true,
  // },
  // ValueSettings
  value: 'abcd1234',
}
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)

or via Trust Wallet

- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/settings
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/settings
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/settings
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/settings
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/settings/issues
  [typedly-forks]: https://github.com/typedly/settings/network
  [typedly-license]: https://github.com/typedly/settings/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/settings/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fsettings.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fsettings

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
