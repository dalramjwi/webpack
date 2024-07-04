"use strict";

var root = document.getElementById("root");
console.log(root);
var liTags = function liTags() {
  var result = "<li>\uBAA9\uB85D</li>";
  return result;
};
root.innerHTML = "\n<ul>\n<li>\n".concat(liTags(), "\n</li>\n</ul>");