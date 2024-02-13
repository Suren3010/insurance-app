const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    insurancemfe: 'http://localhost:5001/insurance/remoteEntry.js',
    premiummfe: 'http://localhost:5001/premium/remoteEntry.js'
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  }
})