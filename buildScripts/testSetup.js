// This isn't transpiled, so must use CommonJS or ES5

// Require babel to transpile before our test run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
