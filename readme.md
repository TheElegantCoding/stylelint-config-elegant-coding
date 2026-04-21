<img src="./.github/asset/illustration/wave_header.svg" width="100%" />

<h1 id="stylelint-config-elegant-coding" align="center">
  <img src="./.github/asset/icon/stylelint.svg" width="28px" align="center" />
  Stylelint personal config
</h1>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<pre align="center">
  <a href="#instalation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#features">️️️🛰️ FEATURES</a>
</pre>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<img src="./.github/asset/illustration/stylelint_cover.svg" alt="cover" width="100%" />

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<div align="center">
  <img src="./.github/asset/illustration/stylelint_badge.svg" height="32px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/bun_badge.svg" height="32px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/github_badge.svg" height="32px" />
</div>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="about">
  <img src="./.github/asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border>
<tr>
<td>

A modular, production-ready Stylelint configuration designed for high-performance CSS and SASS workflows. It enforces strict property ordering and prevents common architectural errors in modern web applications.

</td>
</tr>
</table>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2>
  <img src="./.github/asset/icon/book.svg" width="24px" align="center"/>
  Table of content
</h2>

- [<img src="./.github/asset/icon/information.svg" width="20px" align="center" /> About](#about)
- [<img src="./.github/asset/icon/satellite.svg" width="20px" align="center" /> Features](#features)
- [<img src="./.github/asset/icon/thunder.svg" width="20px" align="center" /> Requirements](#requirements)
- [<img src="./.github/asset/icon/package.svg" width="20px" align="center" /> Installation](#installation)
- [<img src="./.github/asset/icon/rocket.svg" width="20px" align="center" /> Usage](#usage)
- [<img src="./.github/asset/icon/gear.svg" width="20px" align="center" /> Configuration](#configuration)

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="features">
  <img src="./.github/asset/icon/satellite.svg" width="24px" align="center" />
  Features
</h2>

- <img src="./.github/asset/icon/stylelint.svg" width="20px" align="center" /> `Stylelint` - Stylelint rules to prevent errors and enforce best practices in your CSS.
- <img src="./.github/asset/icon/sass.svg" width="20px" align="center" /> `Sass` - Rules specifically designed for Sass syntax.
- <img src="./.github/asset/icon/stylelint_stylistic.svg" width="20px" align="center" /> `Stylistic` - Keep your CSS clean and readable.
- <img src="./.github/asset/icon/order.svg" width="20px" align="center" /> `Order` - Organize your CSS for easy maintenance.

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="requirements">
  <img src="./.github/asset/icon/thunder.svg" width="24px" align="center" />
  Requirements
</h2>

- <img src="./.github/asset/icon/node.svg" width="20px" align="center" /> node >= **18.16.0**
- <img src="./.github/asset/icon/bun.svg" width="20px" align="center" /> bun >= **1.1.0**
- <img src="./.github/asset/icon/stylelint.svg" width="20px"  align="center" /> stylelint >= **15.5.0**

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="installation">
  <img src="./.github/asset/icon/package.svg" width="24px" align="center" />
  Installation
</h2>

Run this command to install eslint and the plugin.

<h3><img src="./.github/asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i -D stylelint stylelint-config-universal-code
```

<h3><img src="./.github/asset/icon/pnpm.svg" width="24px" align="center" /> Pnpm</h3>

```bash
pnpm i -D stylelint stylelint-config-universal-code
```

<h3><img src="./.github/asset/icon/yarn.svg" width="24px" align="center" /> Yarn</h3>

```bash
yarn i -D stylelint stylelint-config-universal-code
```

<h3><img src="./.github/asset/icon/npm.svg" width="24px" align="center" /> Npm</h3>

```bash
npm i -D stylelint stylelint-config-universal-code
```

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="usage">
  <img src="./.github/asset/icon/rocket.svg" width="24px" align="center" />
  Usage
</h2>

To use this plugin put in your repositorie you need to create an `.stylelintrc` file and add this lines of code.

```json
{
  "extends": "stylelint-config-universal-code"
}
```

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="configuration">
  <img src="./.github/asset/icon/gear.svg" width="24px" align="center" />
  Configuration
</h2>

Extra settings that can be added in the same file.

```js
{
  "extends":
  [
    // This specifies that the configuration extends the "stylelint-config-universal-code" rules.
    "stylelint-config-universal-code",

    // This specifies that the configuration also extends the sass rules
    "stylelint-config-universal-code/sass"
  ],
  // Extra configuration can be done by stylelint see more in https://stylelint.io/user-guide/configure
}
```

<br />

<img
  src="./.github/asset/illustration/divider.svg"
  alt="divider"
  width="100%"
/>

<pre align="center">
  <a href="#top">BACK TO TOP</a>
</pre>

<img
  src="./.github/asset/illustration/divider.svg"
  alt="divider"
  width="100%"
/>

<pre align="center">
  Copyright © All rights reserved
  developed by LuisdaByte and
</pre>
<div align="center">
  <img src="./.github/asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./.github/asset/illustration/wave_footer.svg" width="100%" align="center" />