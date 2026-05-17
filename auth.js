import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCq5EXgOeStcMDEEJWDrkF9DAC00kw7T-U",
  authDomain: "portal-bom-jesus.firebaseapp.com",
  projectId: "portal-bom-jesus",
  storageBucket: "portal-bom-jesus.firebasestorage.app",
  messagingSenderId: "78133191362",
  appId: "1:78133191362:web:5182da6d53233ec102d15b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.cadastrar = async function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    alert("Conta criada com sucesso!");
    window.location.href = "index.html";
  } catch (erro) {
    alert(erro.message);
  }
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    window.location.href = "index.html";
  } catch (erro) {
    alert("Email ou senha incorretos.");
  }
};

window.logout = async function () {
  await signOut(auth);
  window.location.href = "login.html";
};

window.protegerPagina = function () {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
};