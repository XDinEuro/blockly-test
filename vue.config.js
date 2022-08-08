const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: config => {
    config.plugins.delete("prefetch")
    config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => {
            options.compilerOptions = {
                ...options.compilerOptions,
                isCustomElement: tag => ['field', 'block', 'category', 'xml', 'mutation', 'value', 'sep'].includes(tag)
            }
            return options
        })
},
transpileDependencies: true
})
