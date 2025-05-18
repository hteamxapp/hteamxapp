import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          window.location.href = "taikhoan.html";
        })
        .catch(error => {
          alert("Sai tài khoản hoặc mật khẩu");
        });
    });
  }
});