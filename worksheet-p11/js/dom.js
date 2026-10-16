// ============================================================
// dom.js — [Lembar B.3 langkah 4] satu-satunya berkas yang menyentuh halaman:
// pemilih, render, dan perubahan kelas. Tidak menyimpan keadaan.
// ============================================================
import { profil, daftarSlider, tahun, buatPerkenalan, hitungPersenAktif, hitungKlub } from "./data.js";

// ---------- Pemilih ----------
export const elemen = {
  wadahDaftar: document.querySelector("#daftar"),
  pesanKosong: document.querySelector("#pesan-kosong"),
  barisFilter: document.querySelector("#filter"),
  tombolAturUlang: document.querySelector("#tombol-atur-ulang"),
  formTambah: document.querySelector("#tambah-pemain form"),
  inputNama: document.querySelector("#nama"),
  tombolKirim: document.querySelector("#tambah-pemain button[type='submit']"),
  wadahNotisia: document.querySelector("#daftar-notisia"),
};

// ---------- Pembantu HTML (dari P8) ----------
function isiHtml(selector, html) {
  const el = document.querySelector(selector);
  if (el === null) {
    console.error(`Elemen ${selector} tidak ditemukan`);
    return;
  }
  el.innerHTML = html;
}

const buatStat = (angka, label) => `<div><strong>${angka}</strong><span>${label}</span></div>`;

const buatBarisTabel = (p) => `
  <tr>
    <td><img src="${p.foto}" alt="${p.nama}"></td>
    <td>${p.nama}</td><td>${p.posisi}</td><td>${p.klub}</td>
    <td><span class="lencana">${p.aktif ? "Aktif" : "Tidak aktif"}</span></td>
  </tr>`;

// Kartu galeri (P8). Diganti nama dari buatKartu agar tidak bentrok dengan kartu daftar (P9).
const buatKartuGaleri = (p) => `
  <div class="kartu${p.sorotan ? " sorotan" : ""}">
    <img src="${p.foto}" alt="${p.nama}">
    <div class="kartu__isi">
      <h3 class="kartu__judul">${p.nama}</h3>
      <p>${p.deskripsi ?? "Belum ada deskripsi."}</p>
    </div>
    <div class="kartu__kaki"><span>Status: ${p.aktif ? "Aktif" : "Tidak aktif"}</span><button type="button">Detail</button></div>
  </div>`;

// Kartu daftar (P9)
function buatKartu(pemain) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = `${pemain.nama} - ${pemain.posisi} (${pemain.klub})`;
  return li;
}

// ---------- [Lembar C.2] render(state): tiga pekerjaan, urutan tetap ----------
// Saring dari state.kategoriAktif, bukan dari dataset tombol yang diklik.
export function saring(state) {
  const kategori = state.kategoriAktif;
  return state.daftarPemain.filter(
    (pemain) => kategori === "semua" || pemain.posisi.toLowerCase() === kategori
  );
}

export function render(state) {
  elemen.wadahDaftar.textContent = "";             // 1. kosongkan
  const tampil = saring(state);                     // dari state, bukan argumen
  if (tampil.length === 0) {                        // 2. keadaan kosong
    elemen.pesanKosong.hidden = false;
    return;
  }
  elemen.pesanKosong.hidden = true;
  tampil.forEach((pemain) => elemen.wadahDaftar.append(buatKartu(pemain)));  // 3. isi ulang
}

// [Lembar C.1] kelas aktif tombol juga digambar dari state, tidak dibaca dari halaman
export function tandaiFilter(state) {
  elemen.barisFilter?.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === state.kategoriAktif);
  });
}

// ---------- Form: kelas dan atribut saja ----------
export function tandaiInvalid(input, invalid) {
  if (invalid) input.setAttribute("aria-invalid", "true");
  else input.removeAttribute("aria-invalid");
}

export function setTombolKirim(aktif) {
  if (elemen.tombolKirim) elemen.tombolKirim.disabled = !aktif;
}

// ---------- Bagian halaman yang isinya dari data (P8) ----------
export function renderStatis(state) {
  const daftar = state.daftarPemain;
  const jumlah = daftar.length;
  document.title = `List Pemain Bola - ${profil.nama}`;
  isiHtml("#hero-teks", `${jumlah} pemain pilihan dengan posisi, klub, dan statusnya, disusun rapi dalam satu halaman.`);
  isiHtml("#hero-stat",
    buatStat(jumlah, "Pemain") + buatStat(hitungKlub(daftar), "Klub") + buatStat(`${hitungPersenAktif(daftar)}%`, "Aktif"));
  isiHtml("#isi-slider", daftarSlider.map(
    (g, i) => `<img src="${g.src}" alt="${g.alt}"${i > 0 ? ' loading="lazy"' : ""}>`).join(""));
  isiHtml("#isi-tabel", daftar.map(buatBarisTabel).join(""));
  isiHtml("#isi-galeri",
    daftar.map(buatKartuGaleri).join("") +
    `<a class="kartu kartu--tambah" href="#tambah-pemain"><strong>+ Tambah pemain</strong><span>Masukkan pemain favorit lainnya</span></a>`);
  isiHtml("#tentang-teks", buatPerkenalan(profil));
  isiHtml("#daftar-keahlian", profil.keahlian.map((k) => `<li>${k}</li>`).join(""));
  isiHtml("#kaki", `&copy; ${tahun} ${profil.nama} - ${profil.nim}`);
}

// ---------- Notisia (P10) ----------
export function renderNotisia(daftar) {
  const wadah = elemen.wadahNotisia;
  wadah.textContent = "";
  daftar.forEach((n) => {
    const kartu = document.createElement("article");
    kartu.className = "notisia" + (n.penting ? " notisia--penting" : "");
    const judul = document.createElement("h3");
    judul.textContent = n.judul;
    const ringkas = document.createElement("p");
    ringkas.textContent = n.ringkasan;
    const meta = document.createElement("small");
    meta.textContent = `${n.pemain} · ${n.tanggal}`;
    kartu.append(judul, ringkas, meta);
    wadah.append(kartu);
  });
}

export function tampilkanPesan(teks, jenis) {
  const wadah = elemen.wadahNotisia;
  wadah.textContent = "";
  const p = document.createElement("p");
  p.className = "pesan-notisia pesan-notisia--" + jenis;
  p.setAttribute("role", jenis === "gagal" ? "alert" : "status");
  p.textContent = teks;
  wadah.append(p);
}
