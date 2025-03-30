class SayaTubeVideo {
    constructor(title) {
        if (typeof title !== 'string' || title.length > 200 || title.trim() === '') {
            throw new Error("Judul video tidak boleh kosong dan maksimal 200 karakter");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (typeof count !== 'number' || count < 0 || count > 25000000) {
            throw new Error("Penambahan play count maksimal 25.000.000 dan tidak boleh negatif");
        }
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Overflow terjadi pada play count");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

module.exports = SayaTubeVideo;
