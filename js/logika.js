// Soal 1: ganjil atau genap
function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}
console.log("soal 1: ganjil atau genap");
console.log('ganjilGenap(7) =', ganjilGenap(7)); // Ganjil
console.log('ganjilGenap(12) =', ganjilGenap(12)); // Genap
console.log('ganjilGenap(0) =', ganjilGenap(0)); // Genap

// Soal 2: Celsius ke Fahrenheit
function celsiusKeFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("soal 2: konversi suhu");
console.log('celsiusKeFahrenheit(0) =', celsiusKeFahrenheit(0)); // 32
console.log('celsiusKeFahrenheit(100) =', celsiusKeFahrenheit(100)); // 212
console.log('celsiusKeFahrenheit(-40) =', celsiusKeFahrenheit(-40)); // -40

// Soal 3: nilai Terbesar (a, b, c)
function nilaiTerbesar(a, b, c) {
    return Math.max(a, b, c);
}
console.log("soal 3: nilai Terbesar");
console.log('nilaiTerbesar(5, 9, 2) =', nilaiTerbesar(5, 9, 2)); // 9
console.log('nilaiTerbesar(80, 75, 80) =', nilaiTerbesar(80, 75, 80)); // 80
console.log('nilaiTerbesar(-3, -7, -1) =', nilaiTerbesar(-3, -7, -1)); // -1

// Soal 4: tahun kabisat
function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log("soal 4: tahun kabisat");
console.log('tahunKabisat(2024) =', tahunKabisat(2024)); // true
console.log('tahunKabisat(2026) =', tahunKabisat(2026)); // false
console.log('tahunKabisat(1900) =', tahunKabisat(1900)); // false
console.log('tahunKabisat(2000) =', tahunKabisat(2000)); // true

// Soal 5: diskon belanja
function hargaSetelahDiskon(totalBelanja) {
    let diskon = 0;
    if (totalBelanja >= 200000) {
        diskon = 0.2; // 20% diskon
    } else if (totalBelanja >= 100000) {
        diskon = 0.1; // 10% diskon
    } else {
        diskon = 0; // tidak ada diskon
    }
    return totalBelanja - (totalBelanja * diskon);
}  
console.log("soal 5: diskon belanja");
console.log('hargaSetelahDiskon(250000) =', hargaSetelahDiskon(250000)); // 200000
console.log('hargaSetelahDiskon(100000) =', hargaSetelahDiskon(100000)); // 90000
console.log('hargaSetelahDiskon(75000) =', hargaSetelahDiskon(75000)); // 75000