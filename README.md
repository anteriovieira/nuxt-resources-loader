# nuxt-resources-loader

[![npm](https://img.shields.io/npm/v/nuxt-resources-loader.svg)](https://www.npmjs.com/package/nuxt-resources-loader)

## Install

```sh
npm i nuxt-resources-loader
# or 
yarn add nuxt-resources-loader
```

## Usage

```js
// nuxt.config.js
import {resolve} from 'path'

module.exports = {
  modules: [
    // Provide path to the file with resources
    ['nuxt-resources-loader', resolve(__.dirname, 'path/to/resources.scss')],

    // or array of paths
    ['nuxt-resources-loader', [
        resolve(__.dirname, 'path/to/first-resources.sass'),
        resolve(__.dirname, 'path/to/second-resources.styl', ['stylus', 'styl']),
    ]],

    // or the native options
    ['nuxt-resources-loader', {
        resources: resolve(__.dirname, 'path/to/resources.stylus')
    }],
  ]
}
```

### Glob pattern matching

You can specify glob patterns to match your all of your files in the same directory.

```js
// Specify a single path
resources: './path/to/resources/**/*.scss', // will match all files in folder and subdirectories
// or an array of paths
resources: [ './path/to/resources/**/*.scss', './path/to/another/**/*.scss' ]
```

> Note that sass-resources-loader will resolve your files in order. If you want your variables to be accessed across all of your mixins you should specify them in first place.

```js
resources: [ './path/to/variables/vars.scss', './path/to/mixins/**/*.scss' ]
```

[For more details see the official documentation](https://github.com/shakacode/sass-resources-loader#usage)

## License

[MIT](http://opensource.org/licenses/MIT)
