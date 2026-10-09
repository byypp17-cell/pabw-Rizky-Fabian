import { daftarPemain } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(pemain) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = `${pemain.nama} - ${pemain.posisi} (${pemain.klub})`; // Teks aman, bukan innerHTML
  return li;
}

function render(daftar) {
  wadah.textContent = ""; // Kosongkan wadah lebih dulu agar tidak bertumpuk
  if (daftar.length === 0) {
    kosong.hidden = false; // Tampilkan pesan kosong jika tidak ada data
    return;
  }
  kosong.hidden = true;
  daftar.forEach((pemain) => wadah.append(buatKartu(pemain)));
}

// Render awal saat halaman pertama kali dibuka
render(daftarPemain);

// ---------- Lembar C: Event Delegation untuk Filter Kategori ----------
const barisFilter = document.querySelector("#filter");

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return; // Jika klik di luar tombol, abaikan

    const kategori = tombol.dataset.kategori;
    const terpilih = daftarPemain.filter(
      (pemain) => kategori === "semua" || pemain.posisi.toLowerCase() === kategori
    );

    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}