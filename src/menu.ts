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
root.innerHTML = `
<ul>
<li>
${liTags(aTags("#", "안녕"))}</li>
</li>
</ul>`;
