// ============================================================
// Worksheet P8 — JavaScript modern: isi halaman jadi data
// Halaman: List Pemain Bola (hasil Pertemuan 6)
// ============================================================

// ---------- Lembar B: data sebagai variabel ----------
const profil = {
  nama: "Rizky Fabian",
  nim: "25523208",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript", "Git & GitHub", "Desain Responsif"],
  // "kontak" sengaja belum diisi — dipakai untuk mendemokan ?. dan ??
};

const tahun = 2026;            // angka, bukan "2026"
let pilihanAktif = "semua";    // let: penanda saringan yang nanti berubah

const email = profil.kontak?.email ?? "belum diisi";      // aman walau kontak belum ada
const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

// ---------- Lembar D: array of object ----------
const daftarPemain = [
  { nama: "Lionel Messi",    foto: "MessiFoto.jpg", posisi: "Penyerang", klub: "Inter Miami",     aktif: true, sorotan: true,
    deskripsi: "Penyerang bintang Inter Miami asal Argentina." },
  { nama: "Kevin De Bruyne", foto: "kdbfoto.jpg",   posisi: "Gelandang", klub: "Manchester City", aktif: true,
    deskripsi: "Gelandang maestro Manchester City." },
  { nama: "Virgil van Dijk", foto: "vvdfoto.jpg",   posisi: "Bek",       klub: "Liverpool",       aktif: true,
    deskripsi: "Bek tangguh dan kapten Liverpool FC." },
];

const daftarSlider = [
  { src: "Alll.jpg", alt: "Lionel Messi" },
  { src: "all2.jpg", alt: "Kevin De Bruyne" },
  { src: "all3.jpg", alt: "Neymar" },
];

const jumlahPemain = daftarPemain.length;

// ---------- Lembar C: fungsi murni ----------
// 1. Menyusun kalimat perkenalan dari satu objek
function buatPerkenalan({ nama, nim }) {
  return `Halaman ini dikembangkan oleh ${nama} (NIM: ${nim}).`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

// Fungsi murni pendukung: tiap fungsi satu pekerjaan, hanya memakai argumen
const hitungPersenAktif = (daftar) =>
  Math.round((daftar.filter((p) => p.aktif).length / daftar.length) * 100);

const hitungKlub = (daftar) => new Set(daftar.map((p) => p.klub)).size;

const buatBarisTabel = (p) => `
  <tr>
    <td><img src="${p.foto}" alt="${p.nama}"></td>
    <td>${p.nama}</td><td>${p.posisi}</td><td>${p.klub}</td>
    <td><span class="lencana">${p.aktif ? "Aktif" : "Tidak aktif"}</span></td>
  </tr>`;

const buatKartu = (p) => `
  <div class="kartu${p.sorotan ? " sorotan" : ""}">
    <img src="${p.foto}" alt="${p.nama}">
    <div class="kartu__isi">
      <h3 class="kartu__judul">${p.nama}</h3>
      <p>${p.deskripsi ?? "Belum ada deskripsi."}</p>
    </div>
    <div class="kartu__kaki"><span>Status: ${p.aktif ? "Aktif" : "Tidak aktif"}</span><button type="button">Detail</button></div>
  </div>`;

const buatStat = (angka, label) => `<div><strong>${angka}</strong><span>${label}</span></div>`;

// ---------- Uji di Console ----------
console.log(kalimat);
console.log(buatPerkenalan(profil));
console.log(buatPerkenalan({ nama: "Ayu", nim: "123" }));
console.log(buatPerkenalan({ nama: "Budi", nim: "456" }));
console.log(formatKeahlian(profil.keahlian));
console.log(formatKeahlian(["A", "B"]));
console.log(typeof profil.nama, typeof jumlahPemain, typeof belumDibuat);
console.log(`Email: ${email}`);

console.table(profil.keahlian);
console.table(daftarPemain);

const penyerang = daftarPemain.filter((pemain) => pemain.posisi === "Penyerang");
console.table(penyerang);

const kdb = daftarPemain.find((pemain) => pemain.nama === "Kevin De Bruyne");
console.log(kdb);
console.log(daftarPemain.find((pemain) => pemain.nama === "Tidak Ada")); // undefined

const namaSaja = daftarPemain.map((pemain) => pemain.nama);
console.log(namaSaja.length === daftarPemain.length, namaSaja);

// salinan dulu baru diurutkan — data asli tidak berubah
const urut = [...daftarPemain].sort((a, b) => a.nama.localeCompare(b.nama));
console.log("urut :", urut.map((p) => p.nama));
console.log("asli :", daftarPemain.map((p) => p.nama));

const salinanProfil = { ...profil, nama: "Salinan" };
console.log(profil.nama, "|", salinanProfil.nama);

// ---------- Menampilkan data ke halaman ----------
// Membaca DOM baru dibahas penuh di Pertemuan 9; di sini cukup mengisi isi elemen.
function isiHtml(selector, html) {
  const elemen = document.querySelector(selector);
  if (elemen === null) {
    console.error(`Elemen ${selector} tidak ditemukan`);
    return;
  }
  elemen.innerHTML = html;
}

document.title = `List Pemain Bola - ${profil.nama}`;
isiHtml("#hero-teks", `${jumlahPemain} pemain pilihan dengan posisi, klub, dan statusnya, disusun rapi dalam satu halaman.`);
isiHtml("#hero-stat",
  buatStat(jumlahPemain, "Pemain") + buatStat(hitungKlub(daftarPemain), "Klub") + buatStat(`${hitungPersenAktif(daftarPemain)}%`, "Aktif"));
isiHtml("#isi-slider", daftarSlider.map(
  (g, i) => `<img src="${g.src}" alt="${g.alt}"${i > 0 ? ' loading="lazy"' : ""}>`).join(""));
isiHtml("#isi-tabel", daftarPemain.map(buatBarisTabel).join(""));
isiHtml("#isi-galeri",
  daftarPemain.map(buatKartu).join("") +
  `<a class="kartu kartu--tambah" href="#tambah-pemain"><strong>+ Tambah pemain</strong><span>Masukkan pemain favorit lainnya</span></a>`);
isiHtml("#tentang-teks", buatPerkenalan(profil));
isiHtml("#daftar-keahlian", profil.keahlian.map((k) => `<li>${k}</li>`).join(""));
isiHtml("#kaki", `&copy; ${tahun} ${profil.nama} - ${profil.nim}`);
