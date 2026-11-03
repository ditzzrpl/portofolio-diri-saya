document.getElementById("tugas");
document.getElementById("uts");
document.getElementById("uas");

const tombol = document.querySelector("#hitung");
const hasil = document.querySelector("#hasil");

function hitungRata(tugas, uts, uas) {
    return (tugas + uts + uas) / 3;
}

function predikat(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}
tombol.addEventListener("click", () => {
    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    const rata = hitungRata(tugas, uts, uas);
    const predikatNilai = predikat(rata);

    hasil.textContent = `Rata-rata: ${rata.toFixed(2)}, Predikat: ${predikatNilai}`;
});