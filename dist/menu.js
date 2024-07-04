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
var basicData = {
  name: "John Doe",
  address: "123 Main St",
  phone: "555-555-5555"
};
var totalElement = function totalElement(object) {
  var result = "";
  for (var key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    var value = object[key];
    result += liTags(aTags(key, value));
  }
  return result;
};
root.innerHTML = "\n<ul>\n<li>\n".concat(totalElement(basicData), "</li>\n</li>\n</ul>");