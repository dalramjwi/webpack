const root = document.getElementById("root")!;
console.log(root);

const aTags = (address: string, text: string) => {
  let result = `<a href = ${address}>${text}</a>`;
  return result;
};
const liTags = (children: string) => {
  let result = `<li>${children}</li>`;
  return result;
};
const totalElement = () => {
  let result = liTags(aTags("sdf", "SDf"));
  return result;
};
root.innerHTML = `
<ul>
<li>
${totalElement()}</li>
</li>
</ul>`;
