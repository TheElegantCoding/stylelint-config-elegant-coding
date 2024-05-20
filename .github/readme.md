<img src="./asset/cover.svg" alt="cover" width="100%" align="center" />
<br />
<h1 id="stylelint-config-elegant-coding">⚙️ Stylint elegant coder configuration</h1>

---

<pre align="center">
  <a href="#instalation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#features">️️️🛰️ FEATURES</a>
</pre>

---

<h2 id="about">📝 About</h2>

<table border>
<tr>
<td>

Take your CSS to the next level with this powerful Stylelint configuration. Say goodbye to frustrating bugs and inconsistencies!  This configuration proactively identifies potential errors in your CSS code before they can cause problems in your projects. By leveraging this tool, you can catch issues early on in the development cycle, streamlining your workflow and ensuring a smoother development experience.

Furthermore, Stylelint helps you cultivate good coding habits by enforcing consistent style conventions across your codebase. This not only improves readability and maintainability for yourself, but also fosters better collaboration within your development team.

The configuration itself is built to be adaptable, allowing you to customize it to your specific project needs and coding preferences.  Embrace cleaner, more maintainable CSS code and elevate your overall development experience.

<p align="right">(<a href="#stylelint-config-elegant-coding">⬆️ back to top</a>)</p>
</td>
</tr>
</table>

---

## 📚 Table of content

- [📝 About](#about)
- [🛰️ Features](#features)
- [⚡️ Requirements](#requirements)
- [📦 Installation](#installation)
- [🚀 Usage](#usage)
- [⚙️ Configuration](#configuration)

<p align="right">(<a href="#stylelint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="features">🛰️ Features</h2>

- <img src="./asset/stylelint.svg" width="20px"/> `Stylelint` - Stylelint rules to prevent errors and enforce best practices in your CSS.
- <img src="./asset/sass.svg" width="20px"/> `Sass` - Rules specifically designed for Sass syntax.
- <img src="./asset/stylelint_stylistic.svg" width="20px"/> `Stylistic` - Keep your CSS clean and readable.
- <img src="./asset/order.svg" width="20px"/> `Order` - Organize your CSS for easy maintenance.

---

<h2 id="requirements">⚡️ Requirements</h2>

- node >= **18.16.0**
- stylelint >= **^15.5.0**

<p align="right">(<a href="#stylelint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="installation">📦 Installation</h2>

Run this command to install eslint and the plugin.

<h3><img src="./asset/bun.svg" width="20px"/> Bun</h3>

```bash
bun i -D stylelint stylelint-config-elegant-coding
```

<h3><img src="./asset/pnpm.svg" width="20px"/> Pnpm</h3>

```bash
pnpm i -D stylelint stylelint-config-elegant-coding
```

<h3><img src="./asset/yarn.svg" width="20px"/> Yarn</h3>

```bash
yarn i -D stylelint stylelint-config-elegant-coding
```

<h3><img src="./asset/npm.svg" width="20px"/> Npm</h3>

```bash
npm i -D stylelint stylelint-config-elegant-coding
```

<p align="right">(<a href="#stylelint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="usage">🚀 Usage</h2>

To use this plugin put in your repositorie you need to create an `.stylelintrc` file and add this lines of code.

```json
{
  "extends": "stylelint-config-coder-dev"
}
```

<p align="right">(<a href="#stylelint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="configuration">⚙️ Configuration</h2>

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

<p align="right">(<a href="#stylelint-config-elegant-coding">back to top</a>)</p>

