// firebase-config.js
// MUST be loaded after the compat SDK scripts in the page (firebase-app-compat.js etc)

(function () {
  // <-- replace the values below with the object from Firebase Console (Project settings → SDK snippet → Config)
  var firebaseConfig = {
    apiKey: "AIzaSyD1dfkopi9k_y6s44rsCQKRfXCX6UsCY5s",
  authDomain: "pehchaan-setu.firebaseapp.com",
  projectId: "pehchaan-setu",
  storageBucket: "pehchaan-setu.firebasestorage.app",
  messagingSenderId: "868115882621",
  appId: "1:868115882621:web:4617ee0266fb1d22818714",
  measurementId: "G-53QDYFKN7R"
  };

  if (!window.firebase) {
    console.error('Firebase global not found. Make sure firebase-app-compat.js is loaded.');
    return;
  }

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    var auth = firebase.auth();
    var db = firebase.firestore();
    var storage = firebase.storage();

    window.__firebase = { app: firebase.app(), auth: auth, db: db, storage: storage };
    console.log('Firebase initialized OK for project:', firebaseConfig.projectId);
  } catch (e) {
    console.error('Firebase init error', e);
  }
})();
