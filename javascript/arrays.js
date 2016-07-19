// Create an array `people` and fill it with objects (at least three) containing these properties:
// * Name (of type String)
// * Age (of type Number)
// * Contact (an object containing 'phone' and 'email')
// 2. Log the element at index 1 (is this the first element?).
// 3. Because arrays are ordered, they keep a record of how many elements are inside them. L the length property of your array.
// 4. Use a method to get the last element of the array
// 5. Set the result of the pop() function to a var called lastPerson
// ** Methods are properties of objects that contain functions. If you're running a function from an object (e.g. myArray.pop()), it is also called a method.
// 6. Log `lastPerson`'s name & phone number
// 7. Use a method to put `lastPerson` to the front of the array.
// 8. Log the entire array

var people=[{
  name: "Laura",
  age: 27,
  contact:{
    phone:4329801,
    email:"laurayanguas01"
  }
},
  { name: "Lucia",
  age: 27,
  contact:{
    phone:9999991,
    email:"lucia@gmail.com"
  }
  },
  { name: "Valentina",
  age: 26,
  contact:{
    phone:122391,
    email:"valezuchiatti@gmail.com"
  }
  },
];
// console.log(people[1]);
var lastPerson = people.pop(3);
console.log(lastPerson);
// console.log(lastPerson.name);

console.log(people);
