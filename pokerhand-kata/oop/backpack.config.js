// backpack.config.js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config
    ;(config.context = __dirname), // to automatically find tsconfig.json
      (config.entry.main = ['./src/index.ts'])
    config.resolve = {
      extensions: ['.ts', '.js', '.json'],
    }

    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        // disable type checker - we will use it in fork plugin
        transpileOnly: true,
      },
    })

    config.plugins = [new ForkTsCheckerWebpackPlugin()]

    return config
  },
}
