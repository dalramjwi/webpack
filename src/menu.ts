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
  name: {
    name: "aa";
    backgroundColor: "red";
    color: "white";
  };
  address: {
    name: "John Doe";
    backgroundColor: "black";
    color: "white";
  };
  phone: {
    name: "555-555-5555";
    backgroundColor: "white";
    color: "black";
  };
  asd: {
    name: "asd";
    backgroundColor: "red";
    color: "white";
  };
}
const basicData: BasicData = {
  name: {
    name: "aa",
    backgroundColor: "red",
    color: "white",
  },
  address: {
    name: "John Doe",
    backgroundColor: "black",
    color: "white",
  },
  phone: {
    name: "555-555-5555",
    backgroundColor: "white",
    color: "black",
  },
  asd: {
    name: "asd",
    backgroundColor: "red",
    color: "white",
  },
};
const totalElement = (object: BasicData): string => {
  let result = "";
  for (let key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    const value = object[key as keyof BasicData];
    result += liTags(aTags(key, value.name));
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
  const hash = window.location.hash;
  console.log(hash.slice(1));
  let test = basicData[hash.slice(1) as keyof BasicData];
  let div = document.createElement("div");
  div.style.backgroundColor = test.backgroundColor;
  div.textContent = test.name;
  div.style.color = test.color;
  if (mainTarget.hasChildNodes()) {
    mainTarget.removeChild(mainTarget.childNodes[0]);
  }
  mainTarget.appendChild(div);
});
