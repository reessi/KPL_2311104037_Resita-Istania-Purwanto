document.getElementById("btnInput").addEventListener("click", function() {
    document.getElementById("outputText").innerText = "Tombol INPUT ditekan!";
});

document.getElementById("btnOutput").addEventListener("click", function() {
    document.getElementById("outputText").innerText = "Tombol OUTPUT ditekan!";
});

document.getElementById("btnButton").addEventListener("click", function() {
    document.getElementById("outputText").innerText = "Tombol BUTTON ditekan!";
});

// Fungsi untuk menangani tombol Submit
document.getElementById("submitButton").addEventListener("click", function() {
    let nama = document.getElementById("inputText").value;
    if (nama.trim() !== "") {
        document.getElementById("outputText").innerText = "Halo " + nama;
    } else {
        document.getElementById("outputText").innerText = "Nama tidak boleh kosong!";
    }
});
