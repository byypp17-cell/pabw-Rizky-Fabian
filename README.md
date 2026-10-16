# PABW — Rizky Fabian — 25523208 
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.
 
## Pertemuan 3 — Halaman profil saya
 
Topik halaman saya: daftar pemain bola favorit.
 
- Judul halaman: List Pemain Bola
- Deskripsi: Daftar pemain bola favorit beserta klub dan statusnya
- Tautan navigasi: Daftar Pemain, Tambah Pemain, Tentang Saya
- Dua bagian utama: Daftar Pemain, Tambah Pemain
- Kolom tabel: nama pemain, posisi, klub, status
- Kolom form: nama pemain, posisi, status
- Gambar: pemain-1.webp
 
## Catatan penggunaan AI
 
AI membantu dalam menyusun ide tema pemain bola serta menyesuaikan struktur teks pada README.md.

## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1e3a8a (biru gelap), dipilih karena memberikan kontras yang sangat baik (rasio > 12:1) serta tampilan yang profesional dan nyaman dibaca.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#1e3a8a` | tombol, tautan, penanda |
| `--color-fg` | `#1e293b` | warna teks utama |
| `--color-bg` | `#f8fafc` | latar halaman |
| `--color-surface` | `#ffffff` | latar kartu dan panel |
| `--color-border` | `#d1d5db` | garis pemisah dan tepi kotak |
| `--color-danger` | `#b00020` | peringatan dan isian yang tidak sah |
| `--color-focus` | `#2563eb` | garis fokus papan ketik |
| `--radius-md` | `0.5rem` | sudut tombol dan kartu |
| `--space-4` | `1rem` | jarak standar antar elemen |

Kriteria selesai saya: mengubah `--color-primary` di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Catatan penggunaan AI
Dalam penyelesaian tugas Pertemuan 4 ini, saya menggunakan bantuan alat AI (Generative AI) sebagai rekan diskusi dan alat bantu pengerjaan dengan rincian sebagai berikut:


Eksplorasi & Validasi Warna: Menggunakan AI untuk membantu menganalisis rasio kontras warna (contrast ratio) berdasarkan standar aksesibilitas WCAG, 

serta memilih kombinasi warna (#1e3a8a, #1e293b, dll.) yang profesional dan aman dibaca.  

 Penyusunan Structure & Syntax CSS: Meminta masukan dari AI dalam menyusun design tokens (variabel CSS), optimasi pemisahan berkas CSS (tokens.css, base.css, layout.css, dll.), serta cara implementasi penggantian tema tanpa menggunakan !important

 # Pertemuan 5: Layouting Web Modern (CSS Grid & Flexbox)

Selamat datang di repositori Pertemuan 5! Repositori ini berisi latihan dan tugas pembuatan tata letak (*layout*) web modern yang responsif menggunakan kombinasi **CSS Grid**, **Flexbox**, serta fitur **Pengalih Tema (Dark Mode)**[cite: 12, 13].

---

## 📌 Topik Pembahasan & Worksheet

Pada pertemuan ini, kita mempelajari beberapa konsep utama:

1. **Flexbox (Tata Letak 1D):**
   - Mengatur navigasi (*navbar*) dan komponen internal kartu (*card body* & *footer*).
   - Penggunaan properti `gap`, `justify-content`, dan `align-items` tanpa menggunakan `float`.

2. **CSS Grid (Tata Letak 2D):**
   - **Galeri Adaptif:** Menggunakan `repeat(auto-fit, minmax(...))` untuk tata letak galeri kartu pemain yang responsif otomatis.
   - **Grid Span:** Menggunakan `grid-column: span` untuk membuat kartu sorotan/unggulan (*featured card*).
   - **Grid Areas:** Menata kerangka utama halaman (`sisi`, `utama`, `bawah`) menggunakan `grid-template-areas`[cite: 13].

3. **Media & Image Optimization:**
   - Menangani kasus gambar meluber (*overflow*) dengan `object-fit: cover` dan pembatasan `height` agar rasio gambar seragam.

## Penggunaan AI

Dalam perancangan dan pembangunan tugasan Pertemuan 5 ini, kecerdasan buatan (AI) digunakan sebagai rakan perbincangan (*thought partner*) dan pembantu penyelesaian masalah (*troubleshooting*):
**Penyelesaian Isu Tata Letak & Gambar:**
   - AI membantu mengenal pasti punca gambar meluber (*overflow*) dan tidak seimbang pada galeri kad[cite: 9, 11].
   - Cadangan teknik `object-fit: cover`, penyesuaian `height`, dan `object-position: top center` digunakan untuk memastikan foto pemain kelihatan seragam[cite: 11].

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

# worksheet-p10 — List Pemain Bola (data dari jaringan)

Pengembangan Aplikasi Berbasis Web (SIF302) · Pertemuan 10 · JavaScript Asinkron: fetch, Promise, dan JSON
Rizky Fabian · 25523208

Halaman hasil Pertemuan 9 sekarang punya bagian **Notisia Pemain** yang datanya diambil lewat `fetch`
dan ditampilkan dengan empat keadaan: memuat, berhasil, gagal, dan kosong.

## Isi folder
- `profil.html` — ditambah satu bagian `#notisia` (wadah `#daftar-notisia`) dan satu tautan menu
- `*.css` — dari Pertemuan 9; aturan kartu dan pesan notisia ditambahkan di akhir `komponen.css`
- `js/api.js` — **lapisan data**: alamat di satu tempat, `fetch`, pemeriksaan `respons.ok`, `json()`; mengekspor `ambilNotisia`, `muat`, `keTeks`
- `js/dom.js` — lapisan tampilan: menggambar kartu, empat keadaan, `try/catch` kedua
- `js/app.js` — tidak diubah (data pemain dari P8)
- `notisia.json` — data lokal yang diambil `fetch`
- `screenshots/` — bukti keadaan berhasil, gagal (404 dan jaringan), kosong, memuat, dan badan bukan JSON

## Pilihan alamat data
API publik tidak terjangkau dari kelas, jadi dipakai berkas lokal `notisia.json`
(`const ALAMAT = './notisia.json'` di `js/api.js`). Untuk mengganti ke API publik cukup menyunting baris itu.

## Cara menjalankan
Buka lewat server lokal, **bukan** klik dua kali (`file://` memblokir `fetch` dan modul):

    python3 -m http.server 8000
    # lalu buka http://localhost:8000/profil.html

## Deklarasi AI
- Dibantu AI (Claude): draf `js/api.js`, penambahan bagian notisia di `js/dom.js`, `notisia.json`, pengujian keadaan di peramban headless, dan draf isian worksheet.
- **Saya kerjakan sendiri:** halaman dan CSS dari Pertemuan 4–9, menjalankan halaman lewat server lokal, membaca Console dan panel Network, serta memahami setiap baris kode sebelum dikumpulkan.

> Sesuaikan bagian "saya kerjakan sendiri" dengan kenyataan pengerjaan Anda.


# Worksheet P11 — List Pemain Bola (Modul, State, dan Penyimpanan Klien)

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

