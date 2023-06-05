# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.1.0-alpha.13](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.12...v0.1.0-alpha.13) (2023-06-05)

### Bug Fixes

- **lsd-react:** respect custom breakpoint typography settings in the createTheme function ([8f8a337](https://github.com/acid-info/logos-design-system/commit/8f8a3371513fcdfb570f8920a6fd792654af9483))

### BREAKING CHANGES

- **lsd-react:** createTheme now ignores base theme typography settings for larger breakpoints when
  custom typography settings are set for smaller breakpoints for a particular typography variant

# [0.1.0-alpha.12](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.11...v0.1.0-alpha.12) (2023-06-05)

### Bug Fixes

- **lsd-react:** use newline char to join global breakpoint var strings ([46d5248](https://github.com/acid-info/logos-design-system/commit/46d52486f6758f947290858cb85ea9631581eb35))

# [0.1.0-alpha.11](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.10...v0.1.0-alpha.11) (2023-06-01)

### Bug Fixes

- **lsd-react:** remove react and react-dom from dependencies ([d95f83d](https://github.com/acid-info/logos-design-system/commit/d95f83d623f71ac73108b34d25b7bf7717561330))

# [0.1.0-alpha.10](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.9...v0.1.0-alpha.10) (2023-06-01)

### Bug Fixes

- fix peer dependency versions ([cff8e48](https://github.com/acid-info/logos-design-system/commit/cff8e480cf4932ddf11bf3256e978ea159e480f3))

# [0.1.0-alpha.9](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.8...v0.1.0-alpha.9) (2023-06-01)

### Bug Fixes

- fix bug with PickIcon svg props ([73a2c60](https://github.com/acid-info/logos-design-system/commit/73a2c608db03f67784cc4b265db2c2816874491a))
- **lsd-react:** load global and baseline styles before user styles ([0fb3283](https://github.com/acid-info/logos-design-system/commit/0fb32830df5c42b8ceea997d852ed10d276a38b2))

# [0.1.0-alpha.8](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.7...v0.1.0-alpha.8) (2023-05-29)

### Bug Fixes

- adjust icon's position in the button component ([ec7cdf0](https://github.com/acid-info/logos-design-system/commit/ec7cdf0e82ab0bf9f28018399eaec193bd605b1d))

### Features

- add outlined and filled variant options to button component ([9d01136](https://github.com/acid-info/logos-design-system/commit/9d01136a1bd49f7fd9eb86699c684d359215bebf))

# [0.1.0-alpha.7](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.6...v0.1.0-alpha.7) (2023-05-25)

### Bug Fixes

- fix Collapse component's controlled state issue ([bf40a03](https://github.com/acid-info/logos-design-system/commit/bf40a03e4cf5c09bd4ac5f4642f0fac3599ed65c))

# [0.1.0-alpha.6](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.5...v0.1.0-alpha.6) (2023-05-24)

### Bug Fixes

- cjs build only ([37991fa](https://github.com/acid-info/logos-design-system/commit/37991faa3a0a71dd06a2e35a433daecf46870199))

# [0.1.0-alpha.5](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.4...v0.1.0-alpha.5) (2023-05-24)

### Bug Fixes

- downgrade React to v17.0.2 & fix entrypoint paths ([5c06d9b](https://github.com/acid-info/logos-design-system/commit/5c06d9bc25b564fba900e32d64c728feb95c77e6))

# [0.1.0-alpha.4](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.3...v0.1.0-alpha.4) (2023-05-24)

### Bug Fixes

- remove 'type': 'module' from package.json, and remove lsd-website app ([91bf9fc](https://github.com/acid-info/logos-design-system/commit/91bf9fceecc6673072ca49080bcb1d5bd2b6363d))

# [0.1.0-alpha.3](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.2...v0.1.0-alpha.3) (2023-04-18)

### Bug Fixes

- append className prop to default class names in Autocomplete component ([2464cff](https://github.com/acid-info/logos-design-system/commit/2464cffc4bf41a9262d997b4f5b7b88a9f50f1f1))

# [0.1.0-alpha.2](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.1...v0.1.0-alpha.2) (2023-04-13)

**Note:** Version bump only for package @acid-info/lsd-react

# [0.1.0-alpha.1](https://github.com/acid-info/logos-design-system/compare/v0.1.0-alpha.0...v0.1.0-alpha.1) (2023-04-13)

### Bug Fixes

- export all components ([87ea789](https://github.com/acid-info/logos-design-system/commit/87ea7891d0c7dd916d37acc308802ba8a05629db))
- fix Badge component rendering in disabled state by default ([2df8631](https://github.com/acid-info/logos-design-system/commit/2df8631ff3c93431c076aaa17adbc97478a5f270))

# 0.1.0-alpha.0 (2023-04-13)

### Bug Fixes

- fix bugs with dropdown item styles of dropdown and breadcrumb ([05dfde0](https://github.com/acid-info/logos-design-system/commit/05dfde00f89a8f2c625521611f0e8b82b6cac422))
- fix Card component styles ([a884a05](https://github.com/acid-info/logos-design-system/commit/a884a056ede49d8459685d2e173c38aba930d291))
- fix Checkbox input's disabled state ([907dc4b](https://github.com/acid-info/logos-design-system/commit/907dc4b5d0fb3d5db24a4bdfda5248666cacff2f))
- fix class names to follow the BEM naming convention ([eac11b1](https://github.com/acid-info/logos-design-system/commit/eac11b1dd0f5d3185c6011725f78097b9e4ff417))
- fix inverted icon colors ([fbf874f](https://github.com/acid-info/logos-design-system/commit/fbf874fd131a30fce95995aa7f2d8c3f5b8a0b91))
- fix styling of Tag ([246e34a](https://github.com/acid-info/logos-design-system/commit/246e34ad94a3a3aad0a942c4213bc2a09a86fe4b))
- **lsd-react:** prevent overriding of className in TextField component ([24b67d5](https://github.com/acid-info/logos-design-system/commit/24b67d5d98b3b9ae0082decb0162d2a44a4b20a3))
- make Button's icon prop type optional ([79773ee](https://github.com/acid-info/logos-design-system/commit/79773ee31dd4babcd3b66d9cbc90264ae8c2f594))
- remove IconTag component ([31e1e55](https://github.com/acid-info/logos-design-system/commit/31e1e551f2173a377e397cdeffa72b87ccd0f7c5))

### Features

- add label element to Autocomplete component and adjust styles ([e324131](https://github.com/acid-info/logos-design-system/commit/e324131ca0006d7dc5b216d67e4455b26e8eeaaa))
- add label element to Dropdown component and adjust styles ([0a98af2](https://github.com/acid-info/logos-design-system/commit/0a98af24417757e0a22c1ef141622352b86152f1))
- add name prop to Checkbox component ([0e512be](https://github.com/acid-info/logos-design-system/commit/0e512be10549e523eb5a6e1d6c4a7d64f55796d7))
- add placeholder prop to TextField component ([a1598df](https://github.com/acid-info/logos-design-system/commit/a1598dfd1af94d554902c9fae30c9a44dd890296))
- add support for font-family style ([e2a3311](https://github.com/acid-info/logos-design-system/commit/e2a331136071bc0125f56fb0502a4e1c0bfb67cc))
- add support for setting generic font family at both theme and component-level ([4507617](https://github.com/acid-info/logos-design-system/commit/45076179ce4f2adc0353725a901746bb09f1e126))
- enhance TextField functionality ([74a54a6](https://github.com/acid-info/logos-design-system/commit/74a54a65752cb52b12c154deb96ebaec1d91ec66))
- implement autocomplete component ([59fba23](https://github.com/acid-info/logos-design-system/commit/59fba23e9889bcf98deec1e1dc43f6571a2d4767))
- implement badge component ([c51ebb8](https://github.com/acid-info/logos-design-system/commit/c51ebb8482a382868f652af4b7b5a8853f904b68))
- implement bottom outline property ([74def31](https://github.com/acid-info/logos-design-system/commit/74def31046b1d7a063d4d5b90aedb330a7d3b153))
- implement breadcrumb component ([9c97071](https://github.com/acid-info/logos-design-system/commit/9c97071103cf3f9c5879e4ce4fd2371fbb95f398))
- implement buttonWithIcon component ([8d338fc](https://github.com/acid-info/logos-design-system/commit/8d338fc5773cbc830c9e2664c449d2bcd9563b85))
- implement card component ([a60ca2b](https://github.com/acid-info/logos-design-system/commit/a60ca2bd3419e4c80960a02b81d09d7fe70081ea))
- implement Checkbox component ([29a5f2b](https://github.com/acid-info/logos-design-system/commit/29a5f2b09c43e845ea40a390fed7aa91fae762ea))
- implement checkbox group component ([5063763](https://github.com/acid-info/logos-design-system/commit/5063763727696f8d80a5ed700f0cd97aeeb6ae1d))
- implement collapse component ([eab23c9](https://github.com/acid-info/logos-design-system/commit/eab23c94dfb0d4738ee9b7af3d893a9b6ee7458d))
- implement dropdown component ([06397a7](https://github.com/acid-info/logos-design-system/commit/06397a7951bac541b4bc790e2a6108cdec6264c4))
- implement icon components ([87956f7](https://github.com/acid-info/logos-design-system/commit/87956f78af0c57890ff09333b2a505c134beeb99))
- implement IconButton component ([7e59247](https://github.com/acid-info/logos-design-system/commit/7e59247c78a1bc77a2f2cf171040e248f19947d6))
- implement IconButtonGroup component ([3369e8a](https://github.com/acid-info/logos-design-system/commit/3369e8aaf2672d1686b7c42b98e8ad908eae410b))
- implement IconTag component ([3b2c792](https://github.com/acid-info/logos-design-system/commit/3b2c792c693caa622e0e0d74bcd3ebcfcfee4132))
- implement quote component ([c5510df](https://github.com/acid-info/logos-design-system/commit/c5510df14e49a667261fd9f6165dd625901dc375))
- implement radio button ([3dc8369](https://github.com/acid-info/logos-design-system/commit/3dc8369b65fb79e56bec8527d7d33fe21da3ed58))
- implement radio button group ([929dc71](https://github.com/acid-info/logos-design-system/commit/929dc713e5150fc2c5472651903750a8d7abaeed))
- implement root portal provider ([225a32f](https://github.com/acid-info/logos-design-system/commit/225a32f43f64ee1ee7c63d95614dc7446652feff))
- implement table component ([eb51b59](https://github.com/acid-info/logos-design-system/commit/eb51b593540db455d3adcbeb472f7640d017645a))
- implement Tabs component ([c55c38a](https://github.com/acid-info/logos-design-system/commit/c55c38a275c6b7a27544dae8bae82b360c326355))
- implement tag component ([4cf53a8](https://github.com/acid-info/logos-design-system/commit/4cf53a8cae71f02d830fb61968885fc9334b4f5a))
- implement textField component ([2b53c86](https://github.com/acid-info/logos-design-system/commit/2b53c8660816e34e34e619904e66ff96d12f9d2d))
- implement Typography component ([1603b4a](https://github.com/acid-info/logos-design-system/commit/1603b4ab8fcbd947f7f461803ae813fc0026279b))
- **lsd-react:** provide default light and dark themes ([1e57fcd](https://github.com/acid-info/logos-design-system/commit/1e57fcd37c7fef6b27434b22f195f15b469493cc))
- update design tokens ([a6b437f](https://github.com/acid-info/logos-design-system/commit/a6b437f26fa95e10ae150c9622010494bdec4e85))
