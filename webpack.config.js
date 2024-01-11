var path = require("path")

module.exports = {
    entry: "./service-worker.js",
    output: {
        filename: "sw.js",
        path: path.resolve(__dirname, "./assets/built")
    }
}