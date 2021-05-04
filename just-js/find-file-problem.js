// using Promise.all, async and await

const fs = require("fs");

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) return resolve([fileName, 0]);
      return resolve([fileName, 1]);
    });
  });
};

const finder = async function (files) {
  let promiseList = [];
  files.forEach((file) => {
    promiseList.push(readFile(file));
  });
  return await Promise.all(promiseList);
};

const result = finder(["index.html", "content.txt", "funny.txt"]);
result.then((data) => console.log(data)).catch((err) => console.log(err));
