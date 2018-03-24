//// Initialize Firebase////
var config = {
  apiKey: "AIzaSyCQFGEpqL2dGZucXEm4cB18ZDw_BbFKQPY",
  authDomain: "beerhavior-750fe.firebaseapp.com",
  databaseURL: "https://beerhavior-750fe.firebaseio.com",
  projectId: "beerhavior-750fe",
  storageBucket: "beerhavior-750fe.appspot.com",
  messagingSenderId: "595187947318"
};
firebase.initializeApp(config);

  var uiConfig = {
    callbacks: {
      signInSuccess: function(currentUser, credential, redirectUrl){
        console.log('You have successfully logged in');
        return true;
      },
      uiShown: function() {
        document.getElementById('loader').style.display ='none';
      }
    },
    signInFlow: 'popup',
    // signInSuccessUrl: '',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

  ui.start('#firebaseui-auth-container', uiConfig);

(function() {
  var app = document.querySelector('#app');

  app.signIn = function(){
    var email = app.email;
    var password = app.password;

    if (!email || !password) {
      return console.log('email and password required');
    }
    ///sign in user///
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      //handle errors///
      var errorCode = error.code;
      var errormessage = error.message;
      console.log('signIn error', error);
    });
  };

  app.register = function(){
    var email =app.email;
    var password = app.password;

    if (!email || !password) {
      return console.log('email and password required');
  }
  ///register user///
  firebase.auth()createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    console.log('register error', error);
    if (error.code === 'auth/email-already-in-use') {
      var credential = firebase.auth.EmailAuthProvider.credential(email, password)

      app.signInWithGoogle()
        .then(function() {
          firebase.auth().currentUser.link(credential)
          .then(function(user) {
            console.log("Google account linked"), user);
          }, function(error) {
            console.log("Account linking error", error);
        });
      });
    }
  });
};

  app.signInWithGoogle = function() {
    ///sign In with Google///
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    return firebase.auth().signInWithPopup(provider)
    .catch(function(error) {
      console.log('Google sign in error', error);
    });
  };

  app.logOut = function() {
    ///log out///
    firebase.auth().logOut();
  };

  ///listen to auth state changes
  firebase.auth().onAuthStateChanged(function(user) {
    app.user = user;
    console.log('user', user);
  });

})();
//////////////////////////firebase client to server/////
////Storing data. get reference to database service////
var database = firebase.database();
///save user's profile in firebase///
///use them in Security and Firebase Rules and show profiles///
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture:imageUrl
    ///any other user data we want///
  });
}

////Retreiving data////
///get current userId///
var userId = firebase.auth().currentUser.uid;
///get User data///
return firebse.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//do something with user data located in snapshot//
//ie: var username = (snapshot.val() && snapshot.val().username) ||'';
});
