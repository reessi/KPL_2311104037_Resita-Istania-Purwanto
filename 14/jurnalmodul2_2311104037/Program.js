const readline = require('readline');

// Inisialisasi interface untuk input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk mengecek bilangan prima
function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Mulai interaksi dengan pengguna
rl.question("Masukkan nama Anda: ", (nama) => {
    console.log(`Selamat datang, ${nama}!\n`);

    // Array berisi angka dari 0 hingga 49
    const numbers = Array.from({ length: 50 }, (_, i) => i);

    // Menampilkan hasil pengecekan kelipatan
    numbers.forEach((i) => {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log(`${i} #$#$`);
        } else if (i % 2 === 0) {
            console.log(`${i} ##`);
        } else if (i % 3 === 0) {
            console.log(`${i} $$`);
        } else {
            console.log(i);
        }
    });

    // Input angka dan cek apakah prima
    rl.question("\nMasukkan angka (1-10000): ", (input) => {
        const inputNumber = parseInt(input);

        if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 10000) {
            console.log("Input tidak valid. Masukkan angka antara 1-10000.");
        } else {
            if (isPrime(inputNumber)) {
                console.log(`Angka ${inputNumber} merupakan bilangan prima.`);
            } else {
                console.log(`Angka ${inputNumber} bukan merupakan bilangan prima.`);
            }
        }

        rl.close();
    });
});
