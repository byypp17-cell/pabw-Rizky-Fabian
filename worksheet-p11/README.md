# Worksheet P11 — List Pemain Bola (Modul, State, dan Penyimpanan Klien)

- **Nama:** Rizky Fabian S
- **NIM:** 25523208
- **Kelas:** B
- **Mata kuliah:** Pengembangan Aplikasi Berbasis Web · SIF302 · Semester Gasal 2026/2027

## Cara menjalankan

Modul ES (`type="module"`) tidak bisa dibuka lewat `file://`. Jalankan server lokal, lalu buka `profil.html`:

```
cd worksheet-p11
python3 -m http.server 8000
```

Buka `http://localhost:8000/profil.html`. Gunakan port yang sama setiap kali, karena simpanan `localStorage` terikat pada alamat termasuk nomor port.

## Susunan modul

| Berkas | Tanggung jawab | Mengimpor dari |
|---|---|---|
| `js/data.js` | Data mentah (profil, pemain, slider) dan fungsi murni | — |
| `js/state.js` | Objek `state` tunggal, pengubah (`pilihKategori`, `aturUlang`), penyimpanan (`simpan`, `muat`, `pulihkanKeadaan`), dan pengambilan notisia | `data.js`, `api.js`, `dom.js` |
| `js/dom.js` | Seluruh sentuhan ke halaman: pemilih, `render(state)`, `saring(state)`, kelas tombol, tampilan notisia | `data.js` |
| `js/events.js` | Pemasangan seluruh pendengar peristiwa | `state.js`, `dom.js`, `data.js` |
| `js/app.js` | Perakit: mengimpor dan menjalankan. Tidak ada logika. | `state.js`, `dom.js`, `events.js` |
| `js/api.js` | Lapisan data dari P10, diimpor apa adanya | — |

Aliran data hanya satu arah: peristiwa → pengubah di `state.js` → `render(state)` di `dom.js`. Halaman tidak pernah dibaca kembali untuk mengetahui keadaan.

## Riwayat commit per lembar

| Lembar | Commit | Pesan | Isi |
|---|---|---|---|
| A | `e3dd2ad` | P11 — periksa bahan, gambar rencana | Salin berkas P9 + `api.js` & `notisia.json` (P10). Perbaiki dua galat yang sudah ada |
| B | `48f1dc2` | P11 — lima modul berjalan | Pecah menjadi `data.js`, `state.js`, `events.js`, `dom.js`, `app.js`. Satu `<script>` di HTML |
| C | `ec4c2f0` | P11 — keadaan keluar dari halaman | Kategori aktif pindah ke `state`. `render(state)`, `saring(state)`, pengubah `pilihKategori` |
| D | `c483c12` | P11 — halaman mengingat | `localStorage` + JSON, nilai bawaan, tombol atur ulang |
| E | `8dfbe21` | P11 — jalan pulang tersedia | Simpanan rusak dibuang, nomor versi diperiksa, penyimpanan yang gagal tidak menghentikan halaman |
| F | (commit ini) | P11 — periksa, lalu simpan | README, deklarasi AI, dan pemeriksaan akhir |

Setiap berkas dan blok kode yang lahir di lembar tertentu diberi penanda `[Lembar X]` di komentarnya, jadi bisa dicari dengan `grep -rn "Lembar C" js/`.

Untuk melihat isi satu lembar: `git show <hash>`. Untuk melihat perubahan satu berkas per lembar: `git log -p -- js/state.js`.

## Simpanan klien (`localStorage`)

- **Kunci:** `pabw-p11`
- **Bentuk:** `{ "versi": 2, "kategoriAktif": "semua" | "penyerang" | "gelandang" }`
- **Disimpan:** kategori aktif (dan nomor versi).
- **Sengaja tidak disimpan:** token, kata sandi, dan data pribadi apa pun. Penyimpanan klien tidak terenkripsi dan bisa dibaca siapa pun yang memakai komputer ini. Kata kunci pencarian juga tidak disimpan karena halaman belum punya kolom pencarian.
- **Urutan tampilan:** tidak disimpan karena halaman belum punya pengurutan. Tidak ada fitur baru yang ditambahkan di P11.

Penanganan simpanan rusak:
- JSON tidak sah → dibuang, halaman memakai nilai bawaan.
- Versi tidak cocok (termasuk simpanan tanpa versi) → dibuang, halaman memakai nilai bawaan.
- Kategori yang tidak dikenal → nilai bawaan.
- `localStorage` penuh atau diblokir → peringatan di Console, halaman tetap berjalan.

## Perubahan di luar lembar (perbaikan galat yang sudah ada)

- `profil.html` punya karakter `X` nyasar setelah `</head>`. Dihapus (Lembar A).
- `dom.js` dari P10 memanggil `#daftar-notisia`, tetapi elemen itu tidak ada di HTML, sehingga halaman melempar `Cannot set properties of null`. Ditambahkan bagian "Notisia Pemain" sebagai kontainer. Ini satu-satunya perubahan tampilan di P11 (Lembar A).
- Dua baris `<script>` diganti satu (Lembar B).

## Yang dibuang dari P8/P10

- Blok uji Console P8 di `app.js` (`console.log` contoh) dan `window.profil`, `window.tahun`, `window.email`, `window.kalimat`. Tidak memengaruhi halaman.
- `window.gambar` dari P10. Pengujian notisia cukup lewat halaman.
- Fungsi `buatKartu` P8 diganti nama menjadi `buatKartuGaleri` karena bentrok dengan `buatKartu` P9 (keduanya sekarang di `dom.js`).
- `muat()` di `api.js` (P10) tidak diimpor. `muat()` untuk penyimpanan ada di `state.js`. Keduanya tidak bentrok karena `api.js` tidak diimpor dari berkas lain selain `state.js`, dan `state.js` hanya mengimpor `ambilNotisia`.

## Pengujian yang sudah dilakukan

Dijalankan di Chromium (Playwright) dengan server lokal:
- Halaman dimuat tanpa galat atau peringatan di Console.
- Filter kategori: jumlah kartu, kelas tombol aktif, dan `state.kategoriAktif`.
- Pilihan bertahan setelah muat ulang dan setelah tab ditutup lalu dibuka lagi.
- Simpanan rusak, versi tidak cocok, dan tombol atur ulang.
- Validasi form (tombol Simpan mati saat nama kosong atau hanya spasi).
- Perbandingan HTML bagian halaman dengan versi Lembar A: sama.

Pengujian tab ditutup dilakukan dengan menutup halaman dalam konteks peramban yang sama lalu membuka halaman baru, bukan dengan menutup jendela sungguhan.

## Hal yang belum dikerjakan

- Pemasangan Node.js LTS dan pencatatan `node -v` dan `npm -v` (lihat F.2 di worksheet). Node.js belum dipakai untuk proyek ini.
- Pengunggahan ke GitHub (`git push`) belum dilakukan dari sisi saya. Pastikan remote sudah diatur dan commit terdorong.

## Deklarasi penggunaan AI

Bagian pengerjaan yang dibantu AI (Claude, Anthropic):
- Penulisan kode awal untuk lima modul, termasuk pemindahan kode dari P8–P10 ke modul-modul tersebut.
- Penulisan komentar penanda `[Lembar X]`, README ini, dan pengujian otomatis di Chromium.

Bagian yang dikerjakan sendiri oleh mahasiswa:
- [isi sendiri: bagian yang Anda ubah, uji, atau pahami langsung di browser]

Mahasiswa perlu membaca dan memahami setiap berkas sebelum penyerahan, karena F.1 dan F.4 menilai pemahaman itu.
