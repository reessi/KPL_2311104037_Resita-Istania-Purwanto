class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 100 karakter");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(jumlah) {
        if (jumlah > 10000000) {
            throw new Error("Penambahan play count maksimal 10.000.000");
        }
        try {
            let newCount = this.playCount + jumlah;
            if (!Number.isSafeInteger(newCount)) {
                throw new Error("Overflow terjadi pada play count!");
            }
            this.playCount = newCount;
        } catch (error) {
            console.error(error.message);
        }
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// MAIN PROGRAM
const video = new SayaTubeVideo("Tutorial Design By Contract – Resita");

video.increasePlayCount(5000000); // ✅ Normal
video.increasePlayCount(20000000); // ❌ Error: Penambahan play count maksimal 10.000.000
video.increasePlayCount(Number.MAX_SAFE_INTEGER); // ❌ Error: Overflow terjadi

video.printVideoDetails();
