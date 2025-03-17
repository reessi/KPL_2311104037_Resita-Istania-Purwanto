class KodePos {
    constructor() {
      this.tabel = {
        "Batununggal": "40266",
        "A. Kujangsari": "40287",
        "Mengger": "40267",
        "Wates": "40256",
        "Cijaura": "40287",
        "Jatisari": "40286",
        "Margasari": "40286",
        "Sekejati": "40286",
        "Kebonwaru": "40272",
        "Maleer": "40274",
        "Samoja": "40273"
      };
    }
    getKodePos(kelurahan) {
      return this.tabel.hasOwnProperty(kelurahan) ? this.tabel[kelurahan] : "Kode pos tidak ditemukan";
    }
  }
  
  function main() {
    const kodePosObj = new KodePos();
    console.log("Kode Pos Batununggal:", kodePosObj.getKodePos("Batununggal"));
    console.log("Kode Pos A. Kujangsari:", kodePosObj.getKodePos("A. Kujangsari"));
    console.log("Kode Pos Mengger:", kodePosObj.getKodePos("Mengger"));
    console.log("Kode Pos Wates:", kodePosObj.getKodePos("Wates"));
    console.log("Kode Pos Cijaura:", kodePosObj.getKodePos("Cijaura"));
    console.log("Kode Pos Jatisari:", kodePosObj.getKodePos("Jatisari"));
    console.log("Kode Pos Margasari:", kodePosObj.getKodePos("Margasari"));
    console.log("Kode Pos Sekejati:", kodePosObj.getKodePos("Sekejati"));
    console.log("Kode Pos Kebonwaru:", kodePosObj.getKodePos("Kebonwaru"));
    console.log("Kode Pos Maleer:", kodePosObj.getKodePos("Maleer"));
    console.log("Kode Pos Samoja:", kodePosObj.getKodePos("Samoja"));
  }
  
  main();
  
  