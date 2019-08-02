# elm-spa-starter

A Webpack based boilerplate to build a production ready Elm SPA.

## Features

:warning: Actually a roadmap:

- [ ] Hot reloading
- [ ] Sass support
- [ ] CSS autoprefixing
- [ ] Local SSL
- [ ] ES6 support
- [ ] Typescript support
- [ ] ESLint
- [ ] Minifying/bundling for development
- [ ] Basic starter elm app
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
│   │   └── main.scss
│   ├── html
│   │   └── main.html
│   ├── js
│   │   └── main.scss
│   └── index.js
├── tests
│   └── Tests.elm
├── config
│   └── webpack.config.js
├── scripts
│   └── myscript
├── .gitignore
├── README.md
├── elm.json
└── package.json
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
