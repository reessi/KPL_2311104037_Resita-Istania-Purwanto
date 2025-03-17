class PosisiKarakterGame {
    constructor(nim) {
      this.nimMod = nim % 3;
      this.state = "Berdiri";
      if (this.nimMod === 1) {
        console.log("posisi standby");
      } else {
        console.log("State awal: " + this.state);
      }
    }
    changeState(newState) {
      const oldState = this.state;
      this.state = newState;
      if (this.nimMod === 1) {
        if (newState === "Berdiri") {
          console.log("posisi standby");
        } else if (newState === "Tengkurap") {
          console.log("posisi istirahat");
        } else {
          console.log("State changed from " + oldState + " to " + newState);
        }
      } else if (this.nimMod === 2) {
        if (oldState === "Terbang" && newState === "Jongkok") {
          console.log("posisi landing");
        } else if (oldState === "Berdiri" && newState === "Terbang") {
          console.log("posisi take off");
        } else {
          console.log("State changed from " + oldState + " to " + newState);
        }
      } else {
        console.log("State changed from " + oldState + " to " + newState);
      }
    }
    tombolS() {
      if (this.nimMod === 0) {
        console.log("tombol arah bawah ditekan");
      }
    }
    tombolW() {
      if (this.nimMod === 0) {
        console.log("tombol arah atas ditekan");
      }
    }
  }
  
  function main() {
    const nim = 2311104037;
    const game = new PosisiKarakterGame(nim);
    game.changeState("Tengkurap");
    game.changeState("Berdiri");
    game.changeState("Terbang");
  }
  
  main();
  