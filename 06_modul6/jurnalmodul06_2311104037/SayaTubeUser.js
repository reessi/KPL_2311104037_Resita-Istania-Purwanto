const SayaTubeVideo = require("./SayaTubeVideo");

class SayaTubeUser {
    constructor(username) {
        if (typeof username !== 'string' || username.length > 100 || username.trim() === '') {
            throw new Error("Username tidak boleh kosong dan maksimal 100 karakter");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Video harus berupa instance dari SayaTubeVideo");
        }
        if (video.playCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count video melebihi batas maksimum integer");
        }
        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((sum, video) => sum + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        for (let i = 0; i < Math.min(this.uploadedVideos.length, 8); i++) {
            console.log(`Video ${i + 1}: ${this.uploadedVideos[i].title}`);
        }
    }
}

module.exports = SayaTubeUser;

