// Your task in this project is to use your JavaScript knowledge to help implement the simulation of the MapReduce framework.
// find the mutual friends

function setup(arr) {
  let friends = {};
  arr.forEach((x) => {
    let friend1 = x[0];
    let friend2 = x[1];

    if (friend1 in friends) friends[friend1].push(friend2);
    else friends[friend1] = [friend2];

    if (friend2 in friends) friends[friend2].push(friend1);
    else friends[friend2] = [friend1];
  });
  return friends;
}

function mapper(setup_arr) {
  let arr = [];
  for (let x in setup_arr) {
    setup_arr[x].forEach((i) => {
      const key = x > i ? i + x : x + i;
      const newObject = {};
      newObject[key] = [...setup_arr[x]]; // Array.from(setup_arr[x]);
      arr.push(newObject);
    });
  }
  return arr;
}

function group(mapped_arr) {
  let obj = {};
  mapped_arr.forEach((x) => {
    let key = Object.keys(x)[0]; // assign person
    if (key in obj) {
      // push all elements of x[key] into obj[key]
      obj[key].push(Array.from(x[key]));
    } else {
      // Assign copy of the array to the object with key
      obj[key] = [Array.from(x[key])];
    }
  });
  return obj;
  // return an object {(man,friend): [Friends]}
}

function reducer(grouped_obj) {
  for (let x in grouped_obj) {
    let arr1 = grouped_obj[x][0];
    let arr2 = grouped_obj[x][1];
    grouped_obj[x] = arr1.filter(
      (i) => arr2.indexOf(i) !== -1 && x.charAt(0) !== i && x.charAt(1) !== i
    );
    // take intersection of the two
  }
  return grouped_obj;
  // return an object {(man,friend): [Friends]}
}

function mapreduce(friends) {
  const initial = setup(friends);
  const mapped = mapper(initial);
  const grouped = group(mapped);
  return reducer(grouped);
}

// const friends = [
//   ["A", "B"],
//   ["A", "C"],
//   ["A", "D"],
//   ["B", "D"],
// ];

const friends = [
  ["A", "B"],
  ["A", "C"],
  ["A", "D"],
  ["B", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];
console.log(mapreduce(friends));
