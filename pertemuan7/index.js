/*
    Conditional
*/


/*
    1.Menggunakan if, else if dan else
*/

let nilaiAndi = 95;

if (nilaiAndi > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("JANGAN MENYERAH, COBA LAGI!");
}

/*
    2.Menggunakan switch dan case
*/

let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "selasa":
    seragamSekolah = "kemeja hijau bawahan hitam";
    break;
  case "rabu":
    seragamSekolah = "kemeja putih bawahan putih";
    break;
  case "kamis":
    seragamSekolah = "kemeja batik merah bawahan hitam";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah);


/*
    Loop
*/


/*
    1. For Loop
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*
    2. For/In Loop
*/

const buku = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
 };
 for (x in buku) {
   console.log(x, ':', buku[x]);
 }

/*
    3. While Loop
*/

let z = 1;

while (z <= 10) {
  console.log(z);
  z++;
}

 /*
    4. Do While Loop
*/

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 10);
