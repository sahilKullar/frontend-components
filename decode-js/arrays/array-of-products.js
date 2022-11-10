// function arrayOfProducts(array) {
//   const products = [];
//   for (let i = 0; i < array.length; i++) {
//     let runningProduct = 1;
//     for (let j = 0; j < array.length; j++) {
//       if (j !== i) runningProduct *= array[j];
//     }
//     products[i] = runningProduct;
//   }
//   return products;
// }

function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }
  return products;
}

console.log(arrayOfProducts([5, 1, 4, 2]));
