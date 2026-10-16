// ============================================================
// events.js — [Lembar B.3 langkah 3] seluruh pendengar peristiwa dipasang di sini.
// ============================================================
import { pilihKategori, aturUlang } from "./state.js";
import { elemen, tandaiInvalid, setTombolKirim } from "./dom.js";
import { namaValid } from "./data.js";

export function pasangPendengar() {
  // [Lembar C.3] filter hanya memanggil pengubah; tidak menyentuh state atau render
  if (elemen.barisFilter) {
    elemen.barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;
      pilihKategori(tombol.dataset.kategori);
    });
  }

  // [Lembar D.2] tombol atur ulang
  elemen.tombolAturUlang?.addEventListener("click", () => aturUlang());

  // Validasi form (logika P9)
  const { formTambah: form, inputNama } = elemen;
  if (!form) return;

  function periksaForm() {
    const valid = namaValid(inputNama.value);
    setTombolKirim(valid);
    return valid;
  }

  inputNama.addEventListener("input", () => {
    tandaiInvalid(inputNama, !namaValid(inputNama.value));
    periksaForm();
  });

  periksaForm();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!periksaForm()) {
      tandaiInvalid(inputNama, true);
      inputNama.focus();
      return;
    }
    tandaiInvalid(inputNama, false);
    console.log("Form berhasil divalidasi dan siap dikirim!");
  });
}
