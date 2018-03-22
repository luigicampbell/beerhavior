$(document).ready(function() {

  //// Initialize Firebase////
  var config = {
    apiKey: "AIzaSyCQFGEpqL2dGZucXEm4cB18ZDw_BbFKQPY",
    authDomain: "beerhavior-750fe.firebaseapp.com",
    databaseURL: "https://beerhavior-750fe.firebaseio.com",
    projectId: "beerhavior-750fe",
    storageBucket: "",
    messagingSenderId: "595187947318"
  };
  firebase.initializeApp(config);

//  var database = firebase.database(); // create reference to firebase

// };

////get Elements////
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnLogin');
var btnSignUp = document.getElementById('btnSignUp');
var btnLogout = document.getElementById('btnLogout');


////Add login event////
btnLogin.addEventListener('click', e=> {

  ///get email and password///
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();

  ///sign in///
  var promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch =>
  console.log(e.message)};

////Add signup event////
btnSignUp.addEventListener('click', e => {

  ///get email and password///
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();

  ///sign in///
  var promise = auth.createUserWithEmailAndPassword(email,pass);
  promise.then (user =>
  console.log(user)};

});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});

////Add a realtimie listener////
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  }
  else {
    console.log('not logged in');
  }
})
