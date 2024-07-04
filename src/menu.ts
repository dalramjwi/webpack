const root = document.getElementById("root")!;
console.log(root);

const aTags = (address: string, text: string) => {
  let result = `<a href = #${address}>${text}</a>`;
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
  let result = "";
  for (let key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    const value = object[key as keyof BasicData];
    result += liTags(aTags(key, value));
  }
  return result;
};
root.innerHTML = `
<ul>
${totalElement(basicData)}</li>
<main id="main-target"></main>
</ul>`;
const mainTarget = document.getElementById("main-target")!;
console.log(window.location.hash);
window.addEventListener("hashchange", () => {
  mainTarget.innerHTML = basicData.name;
});
