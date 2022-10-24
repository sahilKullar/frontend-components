function createDom(root) {
  const node = document.createElement(root.type);

  if (root.attributes != null) {
    for (const [attr, value] of Object.entries(root.attributes)) {
      node.setAttribute(attr, value);
    }
  }

  root.children?.forEach((child) =>
    node.append(typeof child === "string" ? child : createDom(child))
  );

  return node;
}

const node = createDom({
  type: "input",
  attributes: {
    class: "my-input",
    type: "password",
    placeholder: "type your password",
  },
});

const nodeTwo = createDom({
  type: "p",
  children: [
    "Hello",
    {
      class: "my-input",
      type: "password",
      placeholder: "type your password",
    },
  ],
});

console.log(node);
console.log(nodeTwo);
