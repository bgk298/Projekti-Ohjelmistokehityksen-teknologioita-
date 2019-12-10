// If uses the right module to connect to firebase
if (process.env.NODE_ENV === "tuotanto") {
  module.exports = require('./tuot.js');
} else {
  module.exports = require('./dev.js');
}