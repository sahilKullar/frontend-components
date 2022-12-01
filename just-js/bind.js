Function.prototype.bind = function (context) {
  const fn = this;
  return function () {
    fn.call(context);
  };
};

// function bind(fn, context) {
//   return function () {
//     fn.apply(context);
//   };
// }

const foo = function () {
  console.log(this.bar);
};

let baz = foo.bind({ bar: "hello!" });
baz();
