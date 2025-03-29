const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan satu huruf: ", function(huruf) {
    if (huruf.length === 1 && /[A-Z]/.test(huruf)) { // Pastikan input satu huruf kapital
        let vokal = ["A", "I", "U", "E", "O"];
        if (vokal.includes(huruf)) {
            console.log(`Huruf ${huruf} merupakan huruf vokal`);
        } else {
            console.log(`Huruf ${huruf} merupakan huruf konsonan`);
        }
    } else {
        console.log("Masukkan hanya satu huruf kapital!");
    }
    
    // Membuat array bilangan genap
    let angkaGenap = [2, 4, 6, 8, 10];
    for (let i = 0; i < angkaGenap.length; i++) {
        console.log(`Angka genap ${i + 1} : ${angkaGenap[i]}`);
    }
    
    rl.close();
});
