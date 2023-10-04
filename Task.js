function longestsnetence(str) {
  str = str.match(/[a-zA-Z0-9]+/gi); // regex is used for spliting string
  let largestword = ""; //to store an empty string
  for (let i = 0; i < str.length; i++) {
    //to check if i is greater than largestword
    if (str[i].length > largestword.length) {
      largestword = str[i];
    }
  }
  return largestword;
}

let Test1 = longestsnetence("Test 1 : " + "Hello this is a string");
let Test2 = longestsnetence(
  "Test 2 : " + "The new string replace old string for getting new value"
);
let Test3 = longestsnetence(
  "Test 3 : " +
    "Hi i'm Sahil katri and i'm a web developer and i have an experience in MERN stack developement as well as in PHP developement"
);
let Test4 = longestsnetence(
  "Test 3 : " +
    "Smart people learn from everyone, average people form there experience, stupid people already, have all the answers"
);
let Test5 = longestsnetence(
  "Test 3 : " + "I have completed this task in given time duration"
);

console.log("Test 1 : " + Test1);
console.log("Test 2 : " + Test2);
console.log("Test 3 : " + Test3);
console.log("Test 4 : " + Test4);
console.log("Test 5 : " + Test5);
