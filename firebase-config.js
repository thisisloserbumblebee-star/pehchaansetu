// firebase-config.js
// Must be loaded AFTER the compat SDK scripts above.

(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyD1dfkopi9k_y6s44rsCQKRfXCK6UsCY5s",
    authDomain: "pehchaan-setu.firebaseapp.com",
    projectId: "pehchaan-setu",
    storageBucket: "pehchaan-setu.appspot.com",
    messagingSenderId: "868115882621",
    appId: "1:868115882621:web:4617ee0266fb1d22818714",
    measurementId: "G-SC0GNZHMY5"
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
    console.log('Firebase initialized OK');
  } catch (e) {
    console.error('Firebase init error', e);
  }
})();
