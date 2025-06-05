const readline = require("readline");

// Membuat antarmuka untuk input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan satu huruf (A-Z): ", function (inputChar) {
  // Validasi: input harus 1 huruf kapital
  if (inputChar.length === 1 && /^[A-Z]$/.test(inputChar)) {
    const vowels = ["A", "I", "U", "E", "O"];

    // Cek apakah huruf termasuk vokal
    if (vowels.includes(inputChar)) {
      console.log(`Huruf ${inputChar} merupakan huruf vokal`);
    } else {
      console.log(`Huruf ${inputChar} merupakan huruf konsonan`);
    }
  } else {
    console.log("Masukkan hanya satu huruf kapital (A-Z)!");
  }

  // Menampilkan array bilangan genap
  const evenNumbers = [2, 4, 6, 8, 10];
  for (let i = 0; i < evenNumbers.length; i++) {
    console.log(`Angka genap ${i + 1} : ${evenNumbers[i]}`);
  }

  rl.close();
});
