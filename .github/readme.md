<img src="./asset/illustration/wave_header.svg" width="100%" align="center"/>

<h1 id="stylelint-config-elegant-coding">
  <img src="./asset/icon/gear.svg" width="32px" align="center" />
  Stylelint elegant coder configuration
</h1>

---

<pre align="center">
  <a href="#instalation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#features">️️️🛰️ FEATURES</a>
</pre>

---

<img src="./asset/illustration/cover.svg" alt="cover" width="100%" align="center" />

<br />

<div align="center">
  <img src="./asset/badget/stylelint_badget.svg" height="36px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/badget/bun_badget.svg" height="36px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/badget/github_badget.svg" height="36px" />
</div>

---

<h2 id="about">
  <img src="./asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border>
<tr>
<td>

Take your CSS to the next level with this powerful Stylelint configuration. Say goodbye to frustrating bugs and inconsistencies!  This configuration proactively identifies potential errors in your CSS code before they can cause problems in your projects. By leveraging this tool, you can catch issues early on in the development cycle, streamlining your workflow and ensuring a smoother development experience.

Furthermore, Stylelint helps you cultivate good coding habits by enforcing consistent style conventions across your codebase. This not only improves readability and maintainability for yourself, but also fosters better collaboration within your development team.

The configuration itself is built to be adaptable, allowing you to customize it to your specific project needs and coding preferences.  Embrace cleaner, more maintainable CSS code and elevate your overall development experience.

<p align="right">
  ( <a href="#stylelint-config-elegant-coding">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>
</td>
</tr>
</table>

---

<h2>
  <img src="./asset/icon/book.svg" width="24px" align="center"/>
  Table of content
</h2>

- [<img src="./asset/icon/information.svg" width="20px" align="center" /> About](#about)
- [<img src="./asset/icon/satellite.svg" width="20px" align="center" /> Features](#features)
- [<img src="./asset/icon/thunder.svg" width="20px" align="center" /> Requirements](#requirements)
- [<img src="./asset/icon/package.svg" width="20px" align="center" /> Installation](#installation)
- [<img src="./asset/icon/rocket.svg" width="20px" align="center" /> Usage](#usage)
- [<img src="./asset/icon/gear.svg" width="20px" align="center" /> Configuration](#configuration)

<p align="right">
  ( <a href="#stylelint-config-elegant-coding">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="features">
  <img src="./asset/icon/satellite.svg" width="24px" align="center" />
  Features
</h2>

- <img src="./asset/icon/stylelint.svg" width="24px" align="center" /> `Stylelint` - Stylelint rules to prevent errors and enforce best practices in your CSS.
- <img src="./asset/icon/sass.svg" width="24px" align="center" /> `Sass` - Rules specifically designed for Sass syntax.
- <img src="./asset/icon/stylelint_stylistic.svg" width="24px" align="center" /> `Stylistic` - Keep your CSS clean and readable.
- <img src="./asset/icon/order.svg" width="24px" align="center" /> `Order` - Organize your CSS for easy maintenance.

<p align="right">
  ( <a href="#stylelint-config-elegant-coding">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="requirements">
  <img src="./asset/icon/thunder.svg" width="24px" align="center" />
  Requirements
</h2>

- <img src="./asset/icon/node.svg" width="20px" align="center" /> node >= **18.16.0**
- <img src="./asset/icon/stylelint.svg" width="20px"  align="center" /> stylelint >= **15.5.0**

<p align="right">
  ( <a href="#stylelint-config-elegant-coding">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="installation">
  <img src="./asset/icon/package.svg" width="24px" align="center" />
  Installation
</h2>

Run this command to install eslint and the plugin.

<h3><img src="./asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i -D stylelint stylelint-config-elegant-coding
```

<h3><img src="./asset/icon/pnpm.svg" width="24px" align="center" /> Pnpm</h3>

```bash
pnpm i -D stylelint stylelint-config-elegant-coding
```

<h3><img src="./asset/icon/yarn.svg" width="24px" align="center" /> Yarn</h3>

```bash
yarn i -D stylelint stylelint-config-elegant-coding
```

<h3><img src="./asset/icon/npm.svg" width="24px" align="center" /> Npm</h3>

```bash
npm i -D stylelint stylelint-config-elegant-coding
```

<p align="right">
  ( <a href="#stylelint-config-elegant-coding">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="usage">
  <img src="./asset/icon/rocket.svg" width="24px" align="center" />
  Usage
</h2>

To use this plugin put in your repositorie you need to create an `.stylelintrc` file and add this lines of code.

```json
{
  "extends": "stylelint-config-coder-dev"
}
```

<p align="right">
  ( <a href="#stylelint-config-elegant-coding">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>

---

<h2 id="configuration">
  <img src="./asset/icon/gear.svg" width="24px" align="center" />
  Configuration
</h2>


Extra settings that can be added in the same file.

```json
{
  "extends":
  [
    // This specifies that the configuration extends the "stylelint-config-elegant-coding" rules.
    "stylelint-config-elegant-coding",

    // This specifies that the configuration also extends the sass rules
    "stylelint-config-elegant-coding/sass"
  ],
  // Extra configuration can be done by stylelint see more in https://stylelint.io/user-guide/configure
}
```

<p align="right">
  ( <a href="#stylelint-config-elegant-coding">
    <img src="./asset/icon/arrow_up.svg" width="20px" align="center" />
    Back to top
  </a> )
</p>


---

<pre align="center">
  Copyright © All rights reserved,
  developed by ElegantCoder and
</pre>
<div align="center">
  <img src="./asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./asset/illustration/wave_footer.svg" width="100%" align="center" />