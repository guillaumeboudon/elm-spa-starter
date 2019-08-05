# elm-spa-starter

A Webpack based boilerplate to build a production ready Elm SPA.

## Features

:warning: Actually a roadmap:

- [x] Hot reloading
- [x] Sass support
- [x] CSS autoprefixing
- [ ] Local SSL
- [ ] ES6 support
- [ ] Typescript support
- [ ] ESLint
- [ ] Minifying/bundling for production
- [x] Basic starter elm app
- [ ] elm-test

## Structure

```
.
├── dist
│   └── ...
├── assets
│   ├── favicon.ico
│   ├── fonts
│   │   └── myfont.woff
│   └── img
│       └── mypicture.png
├── src
│   ├── elm
│   │   └── Main.elm
│   ├── css
│   │   └── styles.scss
│   ├── index.html
│   ├── main.js
│   └── main.scss
├── tests
│   └── Tests.elm
├── scripts
│   └── myscript
├── .gitignore
├── README.md
├── elm.json
├── package.json
└── webpack.config.js
```

## Install

Clone this repo into your project folder:

```
git clone git@github.com:guillaumeboudon/elm-spa-starter.git my-app
cd my-app
```

Build a new git repo:

```
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```
yarn install
```

## Usage

Start the application:

```
yarn start
```

Or build it for production:

```
yarn build
```
