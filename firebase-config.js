// firebase-config.js
// MUST be loaded after the compat SDK scripts in the page (firebase-app-compat.js etc)

(function () {
  // <-- replace the values below with the object from Firebase Console (Project settings → SDK snippet → Config)
  var firebaseConfig = {
    apiKey: "PUT_YOUR_REAL_API_KEY_HERE",
    authDomain: "PUT_YOUR_REAL_AUTH_DOMAIN_HERE",
    projectId: "PUT_YOUR_REAL_PROJECT_ID_HERE",
    storageBucket: "PUT_YOUR_REAL_STORAGE_BUCKET_HERE",
    messagingSenderId: "PUT_YOUR_REAL_MESSAGING_SENDER_ID_HERE",
    appId: "PUT_YOUR_REAL_APP_ID_HERE",
    measurementId: "PUT_YOUR_REAL_MEASUREMENT_ID_IF_ANY"
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
