// ============================================================
// state.js — [Lembar B & C] satu-satunya objek keadaan dan fungsi pengubahnya.
// Setiap perubahan lewat fungsi bernama di sini, dan fungsi itu yang memanggil render.
// ============================================================
import { daftarPemain } from "./data.js";
import { ambilNotisia } from "./api.js";
import { render, tandaiFilter, tampilkanPesan, renderNotisia } from "./dom.js";

// [Lembar C.1] keadaan yang tadinya menempel di kelas tombol kini hidup di sini
export const state = {
  daftarPemain,
  kategoriAktif: "semua",
  notisia: [],
};

const KATEGORI_VALID = ["semua", "penyerang", "gelandang"];

// ---------- [Lembar D.1] penyimpanan di localStorage ----------
const KUNCI = "pabw-p11";
const VERSI = 2;

// [Lembar D.2] nilai bawaan dipakai bila simpanan belum ada (getItem mengembalikan null)
const NILAI_BAWAAN = { kategoriAktif: "semua" };

// [Lembar E.4] yang TIDAK disimpan: token, kata sandi, dan data pribadi (tidak terenkripsi di peramban).
// Hanya kategori aktif dan nomor versi yang ditulis.
export function simpan() {
  try {
    const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif };
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch (galat) {
    // [Lembar E] penyimpanan penuh atau diblokir: halaman tetap berjalan tanpa mengingat
    console.warn("Pilihan tidak bisa disimpan:", galat.message);
  }
}

// [Lembar E.1 & E.2] periksa saat memuat: JSON rusak dan versi lama dibuang, lalu dikembalikan null
export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {          // bentuk lama atau bukan simpanan kita: buang
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);      // isi rusak: buang
    return null;
  }
}

// [Lembar D.2 & E] dipanggil sekali saat halaman pertama dimuat
export function pulihkanKeadaan() {
  const isi = muat();
  const kategori = isi?.kategoriAktif;
  state.kategoriAktif = KATEGORI_VALID.includes(kategori) ? kategori : NILAI_BAWAAN.kategoriAktif;
}

// [Lembar D.2] tombol atur ulang: hapus simpanan, kembali ke nilai bawaan
export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = NILAI_BAWAAN.kategoriAktif;
  gambarUlang();
}

// [Lembar C.3] satu-satunya pemanggil render
export function gambarUlang() {
  tandaiFilter(state);
  render(state);
}

// [Lembar C.3] pengubah: satu pintu masuk untuk kategori
export function pilihKategori(nilai) {
  if (!KATEGORI_VALID.includes(nilai)) return; // nilai tak dikenal: abaikan
  state.kategoriAktif = nilai;
  simpan();          // [D.1] sesudah keadaan berubah, sebelum render
  gambarUlang();
}

// Notisia dari jaringan (P10). Penugasan ke state terjadi di sini, bukan di events.js.
export async function muatNotisia() {
  tampilkanPesan("Memuat...", "memuat");
  try {
    const daftar = await ambilNotisia();
    state.notisia = daftar;
    if (daftar.length === 0) {
      tampilkanPesan("Belum ada notisia", "kosong");
      return;
    }
    renderNotisia(daftar);
  } catch (galat) {
    tampilkanPesan("Gagal memuat data: " + galat.message, "gagal");
  }
}
