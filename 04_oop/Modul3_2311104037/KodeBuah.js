class KodeBuah {
    constructor() {
      this.tabel = {
        "Apel": "A00",
        "Aprikot": "B00",
        "Alpukat": "C00",
        "Pisang": "D00",
        "Paprika": "E00",
        "Kurma": "K00",
        "Durian": "L00",
        "Anggur": "M00",
        "Melon": "N00",
        "Semangka": "O00"
      };
    }
    getKodeBuah(buah) {
      return this.tabel.hasOwnProperty(buah) ? this.tabel[buah] : "Kode buah tidak ditemukan";
    }
  }
  
  function main() {
    const kodeBuahObj = new KodeBuah();
    console.log("Kode Buah Apel:", kodeBuahObj.getKodeBuah("Apel"));
    console.log("Kode Buah Aprikot:", kodeBuahObj.getKodeBuah("Aprikot"));
    console.log("Kode Buah Alpukat:", kodeBuahObj.getKodeBuah("Alpukat"));
    console.log("Kode Buah Pisang:", kodeBuahObj.getKodeBuah("Pisang"));
    console.log("Kode Buah Paprika:", kodeBuahObj.getKodeBuah("Paprika"));
    console.log("Kode Buah Kurma:", kodeBuahObj.getKodeBuah("Kurma"));
    console.log("Kode Buah Durian:", kodeBuahObj.getKodeBuah("Durian"));
    console.log("Kode Buah Anggur:", kodeBuahObj.getKodeBuah("Anggur"));
    console.log("Kode Buah Melon:", kodeBuahObj.getKodeBuah("Melon"));
    console.log("Kode Buah Semangka:", kodeBuahObj.getKodeBuah("Semangka"));
  }
  
  main();
  