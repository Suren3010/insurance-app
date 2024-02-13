const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: 'premiummfe',
  exposes: {
    './premiummfeModule': './projects/premium-mfe/src/app/pay-premium/pay-premium.module.ts'
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  }
})