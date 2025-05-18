import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");

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

  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          alert("Đăng ký thành công!");
          window.location.href = "taikhoan.html";
        })
        .catch(error => {
          alert("Đăng ký thất bại: " + error.message);
        });
    });
  }
});
