const kodePos = {
    "Batununggal": "40266",
    "Kujangsari": "40287",
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

function getKodePos(kelurahan) {
    return kodePos[kelurahan] || "Kode pos tidak ditemukan";
}

// Export fungsi agar bisa dipakai di main.js
module.exports = { getKodePos };
