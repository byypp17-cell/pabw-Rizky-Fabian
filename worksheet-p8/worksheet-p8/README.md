# worksheet-p8 — List Pemain Bola (data bergerak)

Pengembangan Aplikasi Berbasis Web (SIF302) · Pertemuan 8 · JavaScript Modern ES6+
Rizky Fabian · 25523208

Halaman hasil Pertemuan 6 (List Pemain Bola). Tampilan tidak berubah; isi halaman
(daftar pemain, tabel, kartu galeri, statistik, keahlian, footer) sekarang berasal dari data
di `js/app.js`, bukan lagi ditulis tangan di HTML.

## Isi folder
- `profil.html` — kerangka halaman; isi diisi oleh JavaScript
- `*.css` — berkas CSS dari Pertemuan 6 (satu aturan kecil ditambahkan di akhir `komponen.css` untuk daftar keahlian)
- `js/app.js` — data (const/let), fungsi murni, map/filter/find, uji Console
- `screenshots/` — keluaran Console (galat, perbaikan, console.table) dan tampilan halaman

## Cara menjalankan
Buka lewat server lokal, **bukan** klik dua kali (`file://` memblokir modul):

    python -m http.server 8000
    # lalu buka http://localhost:8000/profil.html

atau klik kanan `profil.html` → Open with Live Server (VS Code).

## Deklarasi AI
- Dibantu AI (Claude): memindahkan isi `profil.html` menjadi data di `js/app.js`, penulisan fungsi, dan draf isian worksheet.
- **Saya kerjakan sendiri:** halaman dan CSS dari Pertemuan 6, menjalankan halaman lewat server lokal, membaca Console, dan memahami setiap baris kode sebelum dikumpulkan.

> Sesuaikan bagian "saya kerjakan sendiri" dengan kenyataan pengerjaan Anda.
