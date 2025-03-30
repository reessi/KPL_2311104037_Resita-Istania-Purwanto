const SayaTubeVideo = require("./SayaTubeVideo");
const SayaTubeUser = require("./SayaTubeUser");

const user = new SayaTubeUser("Resita");
const video1 = new SayaTubeVideo("Review Film Interstellar oleh Resita");
const video2 = new SayaTubeVideo("Review Film Inception oleh Resita");

video1.increasePlayCount(5000000);
video2.increasePlayCount(1000000);

user.addVideo(video1);
user.addVideo(video2);

user.printAllVideoPlaycount();
console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);
