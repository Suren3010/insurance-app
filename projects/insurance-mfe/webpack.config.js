const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: 'insurancemfe',
  exposes: {
    './insuranceMFEModule': './projects/insurance-mfe/src/app/insurance-details/insurance-details.module.ts'
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  }
})