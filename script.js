//✨ if,else,nested if
let nilaiUAS = 85;

if (nilaiUAS >= 90) {
  //if
  console.log("nilaiUAS Anda A");
} else if (nilaiUAS > 80) {
  //nested if
  console.log("nilaiUAS Anda B +");
} else if (nilaiUAS >= 80) {
  console.log("nilaiUAS Anda B");
} else if (nilaiUAS >= 75) {
  console.log("nilaiUAS Anda C +");
} else if (nilaiUAS >= 70) {
  console.log("nilaiUAS Anda C");
} else {
  //else
  console.log("nilaiUAS Anda D");
}

//✨ switch case
let hewan = "kucing";

switch (hewan) {
  case "kucing":
    console.log("Ini hewan kucing");
    break;
  case "ular":
    console.log("Ini hewan ular");
    break;
  case "harimau":
    console.log("Ini hewan harimau");
    break;
  default:
    console.log("Ini hewan yang tidak ada di list");
}

//✨ for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

//✨ while
let x = 1;
while (x <= 5) {
  console.log("Nilai x: " + x);
  x++;
}

//✨ do while
let y = 1;
do {
  console.log("Nilai y: " + y);
  y++;
} while (y <= 5);

//✨ function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 10);
console.log("Hasil penambahan: " + hasil);
