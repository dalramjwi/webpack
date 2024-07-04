const root = document.getElementById("root")!;
console.log(root);
const aTags = () => {
  let result = `<a href = "#">메뉴</a>`;
  return result;
};
const liTags = (children: string) => {
  let result = `<li>${children}</li>`;
  return result;
};
root.innerHTML = `
<ul>
<li>
${liTags(aTags())}</li>
</li>
</ul>`;
