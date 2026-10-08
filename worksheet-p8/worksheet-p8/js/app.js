// ============================================================
// Worksheet P8 — JavaScript modern: isi halaman jadi data
// Halaman: List Pemain Bola (hasil Pertemuan 6)
// ============================================================

// ---------- Lembar B: data sebagai variabel ----------
const profil = {
  nama: "Rizky Fabian s",
  nim: "25523208",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript", "Git & GitHub", "Desain Responsif"],
  // "kontak" sengaja belum diisi — dipakai untuk mendemokan ?. dan ??
};

const tahun = 2026;            
let pilihanAktif = "semua";    

const email = profil.kontak?.email ?? "belum diisi";      // aman walau kontak belum ada
const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

window.profil = profil;  // agar bisa diakses di console
window.tahun = tahun;  // agar bisa diakses di console
window.email = email;  // agar bisa diakses di console
window.kalimat = kalimat;  // agar bisa diakses di console
