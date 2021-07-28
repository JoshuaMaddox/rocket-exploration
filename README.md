# Rocket Exploration

### To get started:

In the root folder, run the following commands in succession:

```
yarn install
```

When installation has completed run:

```
yarn start
```

### Adding new sections:

Make a new folder in `/docs` and add an `index.md` file into it

```
mkdir ~/docs/new-folder-name

touch ~/folder-name/index.md
```

### Adding a category to a section:

Make a new folder in `/docs/section-name` and add an `index.md` file into it

```
mkdir ~/docs/section-name/new-category-name

touch ~/docs/section-name/category-name/index.md
```

### Editing Apperance

Edit site color variables in the following file:

```
~/docs/_assets/variables.css
~/docs/_assets/webmanifest.json
```

To edit syntax highlighting colors, search for `--markdown-syntax-function-color`

## Important Links

[Code Tabs On Github](https://github.com/bennypowers/rocket-presets/tree/main/presets/rocket-preset-code-tabs)
[Web Components Plugin on Github](https://github.com/bennypowers/rocket-presets/tree/main/presets/rocket-preset-webcomponents-dev)
