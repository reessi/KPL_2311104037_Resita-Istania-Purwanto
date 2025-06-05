const fs = require('fs');
const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const filePath = 'users.json';

// Hash password dengan SHA256
function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// Baca user dari file JSON
function loadUsers() {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Simpan user ke file JSON
function saveUsers(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

// Validasi username: hanya huruf, panjang 5-15 karakter
function isValidUsername(username) {
    return /^[A-Za-z]{5,15}$/.test(username);
}

// Validasi password: panjang 8-20, ada angka, simbol, tidak mengandung username
function isValidPassword(password, username) {
    const hasSymbol = /[!@#$%^&*]/.test(password);
    const hasNumber = /\d/.test(password);
    const notContainUsername = !password.includes(username);
    return password.length >= 8 &&
           password.length <= 20 &&
           hasSymbol &&
           hasNumber &&
           notContainUsername;
}

// Fungsi registrasi user
function register() {
    rl.question("Masukkan username: ", (username) => {
        if (!isValidUsername(username)) {
            console.log("❌ Username harus 5-15 huruf alfabet ASCII.");
            return rl.close();
        }

        rl.question("Masukkan password: ", (password) => {
            if (!isValidPassword(password, username)) {
                console.log("❌ Password harus 8-20 karakter, mengandung angka dan simbol (!@#$%^&*), serta tidak mengandung username.");
                return rl.close();
            }

            const users = loadUsers();
            if (users.find(u => u.username === username)) {
                console.log("❌ Username sudah terdaftar.");
                return rl.close();
            }

            users.push({ username, passwordHash: hashPassword(password) });
            saveUsers(users);
            console.log("✅ Registrasi berhasil!");
            rl.close();
        });
    });
}

// Fungsi login user
function login() {
    rl.question("Masukkan username: ", (username) => {
        rl.question("Masukkan password: ", (password) => {
            const users = loadUsers();
            const user = users.find(u => u.username === username && u.passwordHash === hashPassword(password));
            if (user) {
                console.log("✅ Login berhasil!");
            } else {
                console.log("❌ Username atau password salah.");
            }
            rl.close();
        });
    });
}

// Menu utama
console.log("=== Aplikasi Modul 15 ===");
console.log("1. Registrasi");
console.log("2. Login");
rl.question("Pilih menu (1/2): ", (menu) => {
    if (menu === '1') {
        register();
    } else if (menu === '2') {
        login();
    } else {
        console.log("❌ Menu tidak tersedia.");
        rl.close();
    }
});
