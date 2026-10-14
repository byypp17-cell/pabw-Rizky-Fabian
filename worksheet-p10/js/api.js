// js/api.js — lapisan data (Pertemuan 10)
// Tugas berkas ini: mengambil, memeriksa, dan mengurai data. Tidak menyentuh DOM.

// Alamat ditulis satu kali di sini. API publik tidak terjangkau dari kelas,
// maka dipakai berkas lokal notisia.json (lihat README).
const ALAMAT = './notisia.json';

// Mengambil daftar notisia. Mengembalikan larik butir, atau melempar galat.
export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);
    console.log('status', respons.status, 'ok', respons.ok);
    // fetch tidak menolak status 404/500, jadi diperiksa sebelum json()
    if (!respons.ok) throw new Error('status ' + respons.status);
    const data = await respons.json();
    if (!Array.isArray(data.butir)) throw new Error('bentuk data tidak dikenali: kunci "butir" bukan larik');
    return data.butir;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat; // diteruskan ke pemanggil agar pesannya tampil di halaman
  }
}
