let fname = "vyom";
let result = " ";
for (i = 0; i < fname.length; i++) {
    // console.log(fname[i]);
    // result = result + fname[i];
    // index i 
    // result = result + i + " ";
    // console.log(i + " " );
    result = result + " " + i;
}

console.log(result);

// while loop
let j = 1;
while (j < 6) {
    console.log(j);
    j++;
}
do {
    console.log(j);
    j++;
} while (j < 6);

// date function
const now = new Date();
console.log(now.getFullYear());
console.log(now.getDay());
console.log(now.getDate());
