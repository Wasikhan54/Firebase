import {  auth, createUserWithEmailAndPassword,onAuthStateChanged } from "../utils/firebase.js";
document.querySelector('#submitBtn').addEventListener('click', (e) => {
    // reload nh hoga
    e.preventDefault();
    console.log('chl rha hu')
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const userName = document.querySelector('#userName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const {uid} = userCredential.user;
            console.log(uid);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
        });
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });

})