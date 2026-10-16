// ============================================================
// app.js — [Lembar B.3 langkah 5] perakit. Hanya impor dan pemanggilan.
// [Lembar C.4] state diekspos ke Console untuk pemeriksaan: console.log(state)
// ============================================================
import { state, gambarUlang, muatNotisia, pulihkanKeadaan, muat } from "./state.js";
import { renderStatis } from "./dom.js";
import { pasangPendengar } from "./events.js";

window.state = state;
window.muat = muat;   // [Lembar D] untuk diuji dari Console (E.3)

pulihkanKeadaan();   // [Lembar D.2] baca simpanan, atau nilai bawaan

renderStatis(state);
gambarUlang();
pasangPendengar();
muatNotisia();
