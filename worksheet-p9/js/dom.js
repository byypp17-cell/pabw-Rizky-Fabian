import { daftarPemain } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(pemain) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = pemain.nama;      // teks, bukan HTML
  return li;
}

daftarPemain.forEach((pemain) => wadah.append(buatKartu(pemain)));
const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // Klik di luar tombol, abaikan

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarPemain.filter(
    (pemain) => kategori === "semua" || pemain.posisi.toLowerCase() === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});