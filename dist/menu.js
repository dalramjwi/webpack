"use strict";

var root = document.getElementById("root");
console.log(root);
var aTags = function aTags(address, text) {
  var result = "<a href = #".concat(address, ">").concat(text, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
var basicData = {
  name: {
    name: "aa",
    backgroundColor: "red",
    color: "white"
  },
  address: {
    name: "John Doe",
    backgroundColor: "black",
    color: "white"
  },
  phone: {
    name: "555-555-5555",
    backgroundColor: "white",
    color: "black"
  },
  asd: {
    name: "asd",
    backgroundColor: "red",
    color: "white"
  }
};
var totalElement = function totalElement(object) {
  var result = "";
  for (var key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    var value = object[key];
    result += liTags(aTags(key, value.name));
  }
  return result;
};
root.innerHTML = "\n<ul>\n".concat(totalElement(basicData), "</li>\n<main id=\"main-target\"></main>\n</ul>");
var mainTarget = document.getElementById("main-target");
console.log(window.location.hash);
window.addEventListener("hashchange", function () {
  var hash = window.location.hash;
  console.log(hash.slice(1));
  var test = basicData[hash.slice(1)];
  var div = document.createElement("div");
  div.style.backgroundColor = test.backgroundColor;
  div.textContent = test.name;
  div.style.color = test.color;
  if (mainTarget.hasChildNodes()) {
    mainTarget.removeChild(mainTarget.childNodes[0]);
  }
  mainTarget.appendChild(div);
});