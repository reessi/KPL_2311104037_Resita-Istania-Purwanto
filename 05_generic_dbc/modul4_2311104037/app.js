class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        let total = a + b + c;
        return total;
    }
}

class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toISOString());
        console.log("Data berhasil disimpan");
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}

let db = new SimpleDataBase();

let angka1 = 23;
let angka2 = 11;
let angka3 = 10;

let hasilPenjumlahan = Penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);

db.AddNewData(hasilPenjumlahan);

db.PrintAllData();
