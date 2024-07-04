const root = document.getElementById("root")!;
console.log(root);
const address = (address: string) => {
  return address;
};
const aTags = (address: string) => {
  let result = `<a href = ${address}>메뉴</a>`;
  return result;
};
const liTags = (children: string) => {
  let result = `<li>${children}</li>`;
  return result;
};
root.innerHTML = `
<ul>
<li>
${liTags(aTags(address("#")))}</li>
</li>
</ul>`;
