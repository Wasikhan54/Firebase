
import { auth, signInWithEmailAndPassword,onAuthStateChanged } from "../utils/firebase.js";
document.querySelector("#loginBtn").addEventListener('click', (e)=>{
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
console.log(email)
console.log(password)
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user, '===> user');
      
    } else {
      // User is signed out
      console.log('user dosee noy=t exist')
    }
  });
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})