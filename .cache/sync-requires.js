const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/ctsol-dev/Documents/fantom/fantom-finance/fantom-finance/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ctsol-dev/Documents/fantom/fantom-finance/fantom-finance/src/pages/index.js")))
}

