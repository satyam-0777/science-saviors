
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, username + "@champlearn.com", password)
    .then(user => {
      alert("Signup successful!");
      document.getElementById("quiz-section").style.display = "block";
      document.getElementById("auth-section").style.display = "none";
      document.getElementById("user-name").innerText = username;
    })
    .catch(error => alert(error.message));
}

window.login = function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, username + "@champlearn.com", password)
    .then(user => {
      alert("Login successful!");
      document.getElementById("quiz-section").style.display = "block";
      document.getElementById("auth-section").style.display = "none";
      document.getElementById("user-name").innerText = username;
    })
    .catch(error => alert(error.message));
}

window.selectSubject = function(subject) {
  alert("You selected: " + subject + ". Quizzes coming soon!");
}
