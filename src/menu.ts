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

interface BasicData {
  name: "John Doe";
  address: "123 Main St";
  phone: "555-555-5555";
}
const basicData: BasicData = {
  name: "John Doe",
  address: "123 Main St",
  phone: "555-555-5555",
};
const totalElement = (object: BasicData): string => {
  let result = liTags(aTags(`${object.name}`, object.name));
  return result;
};
root.innerHTML = `
<ul>
<li>
${totalElement(basicData)}</li>
</li>
</ul>`;
