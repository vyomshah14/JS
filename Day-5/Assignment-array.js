// Create an empty array named 'numb' //1
let numb = [];
// array with 5 no. of element //2
let numbers = ["vyom", "ayush", "fd", "fff","fd"];
// length of the array //3
console.log(numbers.length);
// get the first element & middle element & last element //4
console.log(numbers[0]);
// middle // console.log(numbers[numbers.length/2]);
let size = numbers.length-1
console.log(numbers[ size / 2]); // numbers[4]/2
// last
console.log(numbers[numbers.length-1]);
// diff element array //5
let mixed = [1, "two", 3, "four", 5, 6.7];
console.log(mixed.length);
// companies array //6
let companies = ["Google", "Microsoft", "Apple", "Amazon", "Facebook", "IBM","Oracle"];
// print companies //7
console.log(companies);
// number of compaies //8
console.log(companies.length);
// print the first middle and last //9
console.log(companies[0]);
let comp = companies.length-1;
console.log(companies[comp/2])
console.log(companies[companies.length-1]);
// print out each company //10
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}  
// change each company name to uppercase //11
for (let i = 0; i < companies.length; i++) {
  companies[i] = companies[i].toUpperCase();
  console.log(companies[i]);
}
// print array like a sentence //12
console.log(companies.join(", ") + " are big IT companies.");
//check companies //13
console.log(companies.includes("IBM"));
// more than one o 
console.log(companies.filter( companies.includes('oo'))); 