// 1. Daftar keahlian (halaman beranda)



// bab 3 

const skills = [
    {nama: "HTML", level: "Menengah"},
    {nama: "CSS", level: "Menengah"},
    {nama: "Git dan GitHub", level: "Dasar"},
    {nama: "Desain poster dengan Canva", level: "Mahir"}
];
skills.push({ nama: "JavaScript", level: "Dasar"});

console.table(skills);

const sedangDipelajari = skills.filter(skill => skill.level === "Dasar");
console.log(sedangDipelajari.map((skill) => skill.nama));

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

skills.forEach((skill) => {
const item = document.createElement("li");
item.textContent = `${skill.nama} (${skill.level})`;
daftarSkill.appendChild(item);
});
jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang
saya kembangkan.`;