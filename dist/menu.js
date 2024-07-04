"use strict";

var root = document.getElementById("root");
console.log(root);
var aTags = function aTags(address, text) {
  var result = "<a href = ".concat(address, ">").concat(text, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
root.innerHTML = "\n<ul>\n<li>\n".concat(liTags(aTags("#", "안녕")), "</li>\n</li>\n</ul>");