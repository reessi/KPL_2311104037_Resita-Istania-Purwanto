class DoorMachine {
    constructor() {
        this.state = "TERKUNCI";
        console.log("Pintu terkunci");
    }

    unlock() {
        if (this.state === "TERKUNCI") {
            this.state = "TERBUKA";
            console.log("Pintu tidak terkunci");
        } else {
            console.log("Pintu sudah terbuka");
        }
    }

    lock() {
        if (this.state === "TERBUKA") {
            this.state = "TERKUNCI";
            console.log("Pintu terkunci");
        } else {
            console.log("Pintu sudah terkunci");
        }
    }
}

// Export class agar bisa dipakai di main.js
module.exports = DoorMachine;
