require("babel-core/register");
require("babel-core").transform("code", {
    plugins: ["transform-runtime"]
});
require("./server.js");