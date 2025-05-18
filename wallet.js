import { auth, db } from './firebase.js';
import {
  doc, getDoc, updateDoc
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const napBtn = document.getElementById("napBtn");
  if (napBtn) {
    napBtn.addEventListener("click", () => {
      const amount = Number(document.getElementById("soTienNap").value);
      napTien(amount);
    });
  }

  const rutBtn = document.getElementById("rutBtn");
  if (rutBtn) {
    rutBtn.addEventListener("click", () => {
      const amount = Number(document.getElementById("soTienRut").value);
      rutTien(amount);
    });
  }
});

async function napTien(amount) {
  const uid = auth.currentUser.uid;
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const current = snap.data().balance || 0;
    await updateDoc(ref, { balance: current + amount });
    alert("Nạp thành công");
  }
}

async function rutTien(amount) {
  const uid = auth.currentUser.uid;
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const current = snap.data().balance || 0;
    if (current >= amount) {
      await updateDoc(ref, { balance: current - amount });
      alert("Rút thành công");
    } else {
      alert("Không đủ số dư");
    }
  }
}