// firebase-config.js — compat style (loaded after firebase-app & other compat SDKs)
(function () {
  // REPLACE these values with your Firebase project's actual config (from Firebase Console)
  var firebaseConfig = {
    apiKey: "AIzaSyD1dfkopi9k_y6s44rsCQKRfXCX6UsCY5s",
    authDomain: "pehchaan-setu.firebaseapp.com",
    projectId: "pehchaan-setu",
    storageBucket: "pehchaan-setu.appspot.com",
    messagingSenderId: "868115882621",
    appId: "1:868115882621:web:4617ee0266fb1d22818714",
    measurementId: "G-53QDYFKN7R"
  };

  if (!window.firebase || !firebase.initializeApp) {
    console.error('firebase compat not available');
    return;
  }

  try {
    if (!firebase.apps || firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
      console.log('Firebase initialized OK for project:', firebaseConfig.projectId);
    } else {
      console.log('Firebase already initialized');
    }
    // optional global reference used elsewhere
    window.__firebase = firebase;
  } catch (e) {
    console.error('Firebase init error', e);
  }
})();
