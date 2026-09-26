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