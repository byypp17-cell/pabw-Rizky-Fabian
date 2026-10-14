import { daftarPemain } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(pemain) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = `${pemain.nama} - ${pemain.posisi} (${pemain.klub})`;
  return li;
}

function render(daftar) {
  wadah.textContent = ""; 
  if (daftar.length === 0) {
    kosong.hidden = false; 
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
    if (!tombol) return;

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

// ---------- Lembar D.2 & D.3: Validasi Form Interaktif ----------
const form = document.querySelector("#tambah-pemain form");

if (form) {
  const inputNama = form.querySelector("#nama");
  const tombolKirim = form.querySelector("button[type='submit']");

  // Fungsi untuk memeriksa kelayakan isi form secara real-time
  function periksaForm() {
    const nilaiNama = inputNama ? inputNama.value.trim() : "";
    const valid = nilaiNama !== "";

    if (tombolKirim) {
      tombolKirim.disabled = !valid; // Tombol mati jika kosong/spasi saja
    }

    return valid;
  }

  // Jalankan pemeriksaan saat pengguna mengetik
  if (inputNama) {
    inputNama.addEventListener("input", () => {
      const nilaiNama = inputNama.value.trim();
      if (nilaiNama !== "") {
        inputNama.removeAttribute("aria-invalid");
      } else {
        inputNama.setAttribute("aria-invalid", "true");
      }
      periksaForm();
    });
  }

  // Pemeriksaan awal saat halaman dimuat
  periksaForm();

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah halaman dimuat ulang

    if (!periksaForm()) {
      if (inputNama) {
        inputNama.setAttribute("aria-invalid", "true");
        inputNama.focus();
      }
      return;
    }

    // Jika lolos validasi
    if (inputNama) {
      inputNama.removeAttribute("aria-invalid");
    }
    
    console.log("Form berhasil divalidasi dan siap dikirim!");
  });
}