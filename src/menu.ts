const root = document.getElementById("root")!;
console.log(root);
const liTags = () => {
  let result = `<li>목록</li>`;
  return result;
};
root.innerHTML = `
<ul>
<li>
  <a href="#">Home</a>
</li>
</ul>`;
