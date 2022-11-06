// destructure undefined in JavaScript

function pointValues(object) {
  const { name: n, age: a } = { ...object };
  console.log(n);
  console.log(a);
}

pointValues({ name: "jerry", age: 2 });
pointValues(undefined);
