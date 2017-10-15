const extname = require('path').extname

module.exports = function nuxtSassResourcesLoader (options, extensions) {
  if (typeof options === 'string') {
    options = {
      resources: [options]
    }
  }

  if (Array.isArray(options)) {
    options = {
      resources: options
    }
  }

  const sassResourcesLoader = {
    loader: 'sass-resources-loader',
    options: options
  }

  this.extendBuild((config, { isClient, isServer }) => {
    options.resources.forEach((resource) => {
      const ext = extensions || extname(resource)
      const styleLoaders = config.module.rules.filter(({test}) => {
        return test.exec(ext)
      })

      Object.keys(styleLoaders).forEach(loader => {
        styleLoaders[loader].use.push(sassResourcesLoader)
      })

      const vueConfig = config.module.rules.find(({test}) => {
        return test.toString() === '/\\.vue$/'
      })

      const vueLoaders = vueConfig.options.loaders

      Object.keys(vueLoaders).forEach(loader => {
        if (ext.indexOf(loader) !== -1) {
          vueLoaders[loader].push(sassResourcesLoader)
        }
      })
    })
  })
}
