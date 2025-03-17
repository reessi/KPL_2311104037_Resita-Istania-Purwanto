const { getKodePos } = require("./kodePos");
const DoorMachine = require("./doorMachine");

// Test Table-Driven (KodePos)
console.log("Kode Pos Batununggal:", getKodePos("Batununggal"));
console.log("Kode Pos Cijaura:", getKodePos("Cijaura"));
console.log("Kode Pos Wates:", getKodePos("Wates"));
console.log("Kode Pos Tidak Diketahui:", getKodePos("TidakAda"));

// Test State-Based Construction (DoorMachine)
const door = new DoorMachine();
door.unlock();
door.unlock();
door.lock();
door.lock();
