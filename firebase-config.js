// firebase-config.js  -- COMPAT (v8) style
// Paste this file in your project root (same folder as your pages),
// and make sure the HTML pages load it AFTER the firebase v8 SDK <script> tags.

(function(){
  // firebase client config (from your project)
  var firebaseConfig = {
    apiKey: "AIzaSyD1dfkopi9k_y6s44rsCQKRfXCK6UsCY5s",
    authDomain: "pehchaan-setu.firebaseapp.com",
    projectId: "pehchaan-setu",
    storageBucket: "pehchaan-setu.appspot.com",
    messagingSenderId: "868115882621",
    appId: "1:868115882621:web:4617ee0266fb1d22818714",
    measurementId: "G-SC0GNZHMY5"
  };

  // initialize app (v8 compat)
  if (!window.firebase || !window.firebase.initializeApp) {
    console.error('Firebase v8 SDK not loaded. Make sure firebase-app.js (v8) script tag is present.');
    return;
  }

  // Avoid double-init in dev hot reloads
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      if (firebase.analytics) {
        try { firebase.analytics(); } catch(e) {}
      }
    } else {
      firebase.app(); // already initialized
    }
  } catch (e) {
    console.error('Firebase init error', e);
  }

  // export commonly used handles to a single container for your pages
  window.__firebase = {
    app: firebase.app(),
    auth: firebase.auth(),
    db: firebase.firestore(),
    storage: firebase.storage()
  };

  console.log('Firebase initialized OK');
})();
