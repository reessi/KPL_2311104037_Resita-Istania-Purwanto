class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 100 karakter");
        }
        this.id = Math.floor(Math.random() * 90000) + 10000;
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
                throw new Error("Play count melebihi batas maksimum integer");
            }
            this.playCount = newCount;
        } catch (error) {
            console.error("Terjadi kesalahan:", error.message);
        }
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

const video = new SayaTubeVideo("Tutorial Design By Contract – Resita Istania Purwanto");
video.printVideoDetails();
video.increasePlayCount(5000);
video.printVideoDetails();