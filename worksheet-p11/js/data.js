// ============================================================
// data.js — [Lembar B.1] data mentah dan fungsi murni.
// Tidak menyentuh DOM dan tidak mengubah state.
// ============================================================

export const profil = {
  nama: "Rizky Fabian s",
  nim: "25523208",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript", "Git & GitHub", "Desain Responsif"],
};

export const tahun = 2026;

export const daftarPemain = [
  { nama: "Lionel Messi", foto: "MessiFoto.jpg", posisi: "Penyerang", klub: "Inter Miami", aktif: true, sorotan: true,
    deskripsi: "Penyerang bintang Inter Miami asal Argentina." },
  { nama: "Kevin De Bruyne", foto: "kdbfoto.jpg", posisi: "Gelandang", klub: "Manchester City", aktif: true,
    deskripsi: "Gelandang maestro Manchester City." },
  { nama: "Virgil van Dijk", foto: "vvdfoto.jpg", posisi: "Bek", klub: "Liverpool", aktif: true,
    deskripsi: "Bek tangguh dan kapten Liverpool FC." },
];

export const daftarSlider = [
  { src: "Alll.jpg", alt: "Lionel Messi" },
  { src: "all2.jpg", alt: "Kevin De Bruyne" },
  { src: "all3.jpg", alt: "Neymar" },
];

// ---------- Fungsi murni: hanya memakai argumennya ----------
export function buatPerkenalan({ nama, nim }) {
  return `Halaman ini dikembangkan oleh ${nama} (NIM: ${nim}).`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export const hitungPersenAktif = (daftar) =>
  Math.round((daftar.filter((p) => p.aktif).length / daftar.length) * 100);

export const hitungKlub = (daftar) => new Set(daftar.map((p) => p.klub)).size;

export const namaValid = (teks) => teks.trim() !== "";
