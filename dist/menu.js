"use strict";

var root = document.getElementById("root");
console.log(root);
var address = function address(_address) {
  return _address;
};
var aTags = function aTags(address) {
  var result = "<a href = ".concat(address, ">\uBA54\uB274</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
root.innerHTML = "\n<ul>\n<li>\n".concat(liTags(aTags(address("#"))), "</li>\n</li>\n</ul>");