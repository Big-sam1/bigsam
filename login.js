// Import Firebase modules (v12 modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFWfg9uKK9NvozNqMNAzCbYR7AAMb-s64",
  authDomain: "forms-account.firebaseapp.com",
  projectId: "forms-account",
  storageBucket: "forms-account.appspot.com",
  messagingSenderId: "157988386870",
  appId: "1:157988386870:web:a128115c259ff4d5b04097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submit
document.getElementById("LoginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("✅ Welcome Again! " + email);
      window.location.href ="loading.html";
    })
    .catch((error) => {
      alert("❌ Error: " + error.message);
    });
});

// Add password visibility toggle functionality
const passwordInput = document.getElementById('password');
const passwordToggle = document.getElementById('passwordToggle');

passwordToggle.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  // Toggle the eye icon
  const icon = this.querySelector('i');
  if (type === 'text') {
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  } else {
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  }
});