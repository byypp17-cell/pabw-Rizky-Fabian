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