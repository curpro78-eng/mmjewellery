/**
 * ============================================================
 * MM JEWELLERY — FIREBASE INTEGRATION & SERVICE LAYER
 * ============================================================
 * Instructions for User:
 * Replace the placeholder credentials below with your real Firebase Project
 * config values from Firebase Console -> Project Settings -> General -> Web App.
 */

window.firebaseConfig = {
  apiKey: "AIzaSyBlonWPtIlp7Y6X5-g6VwsOFs77ZzFkFzY",
  authDomain: "mmjewellery.firebaseapp.com",
  projectId: "mmjewellery",
  storageBucket: "mmjewellery.firebasestorage.app",
  messagingSenderId: "925109084294",
  appId: "1:925109084294:web:3f0d4d584121d88ed0f107"
};

var firebaseConfig = window.firebaseConfig;
var db = window.db || null;
var isFirebaseInitialized = false;

function initFirebase() {
  try {
    if (typeof firebase !== 'undefined' && firebase.initializeApp) {
      // Initialize Firebase App
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      db = firebase.firestore();
      isFirebaseInitialized = true;
      console.log("🔥 Firebase initialized successfully! (Connected to Firestore)");
    } else {
      console.warn("⚠️ Firebase SDK not loaded.");
    }
  } catch (err) {
    console.warn("⚠️ Firebase initialization notice:", err.message);
  }
}

/* ============================================================
   FIREBASE API SERVICES (Connected to Firestore)
   ============================================================ */

/**
 * 1. Fetch Products Catalogue from Firestore Collection ('products')
 */
async function fetchProductsFromFirebase() {
  if (!isFirebaseInitialized || !db) {
    console.warn("⚠️ Firebase not initialized.");
    return [];
  }
  try {
    const snapshot = await db.collection('products').get();
    const list = [];
    snapshot.forEach(doc => {
      list.push({ id: doc.id, ...doc.data() });
    });
    console.log(`🔥 [Firebase API] Fetched ${list.length} products from Firestore.`);
    return list;
  } catch (err) {
    console.error("🔥 [Firebase API Error] fetchProducts:", err);
    return [];
  }
}

/**
 * 2. Save New Order / WhatsApp Enquiry to Firestore Collection ('orders')
 */
async function saveOrderToFirebase(orderData) {
  const payload = {
    ...orderData,
    createdAt: new Date().toISOString(),
    status: 'Pending'
  };

  if (!isFirebaseInitialized || !db) {
    return { success: false, error: "Firebase not initialized" };
  }

  try {
    const docRef = await db.collection('orders').add(payload);
    console.log("🔥 [Firebase API] Order saved to Firestore with ID:", docRef.id);
    return { success: true, orderId: docRef.id };
  } catch (err) {
    console.error("🔥 [Firebase API Error] saveOrder:", err);
    return { success: false, error: err.message };
  }
}

/**
 * 3. Submit Customer Review / Testimonial to Firestore Collection ('reviews')
 */
async function submitReviewToFirebase(reviewData) {
  const payload = {
    name: reviewData.name || "Valued Customer",
    loc: reviewData.loc || "Salem",
    stars: reviewData.stars || 5,
    msg: reviewData.msg || "",
    verified: true,
    createdAt: new Date().toISOString()
  };

  if (!isFirebaseInitialized || !db) {
    return { success: false, error: "Firebase not initialized" };
  }

  try {
    await db.collection('reviews').add(payload);
    console.log("🔥 [Firebase API] Review submitted to Firestore successfully.");
    return { success: true };
  } catch (err) {
    console.error("🔥 [Firebase API Error] submitReview:", err);
    return { success: false, error: err.message };
  }
}

/**
 * 4. Submit Old Gold Exchange / Valuation Request to Firestore Collection ('valuations')
 */
async function submitGoldValuationRequest(valuationData) {
  const payload = {
    customerName: valuationData.name || "",
    phone: valuationData.phone || "",
    estimatedGram: valuationData.gram || "0g",
    purity: valuationData.purity || "916 Hallmark",
    status: "Requested",
    createdAt: new Date().toISOString()
  };

  if (!isFirebaseInitialized || !db) {
    return { success: false, error: "Firebase not initialized" };
  }

  try {
    const docRef = await db.collection('valuations').add(payload);
    console.log("🔥 [Firebase API] Valuation request created in Firestore:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (err) {
    console.error("🔥 [Firebase API Error] submitGoldValuationRequest:", err);
    return { success: false, error: err.message };
  }
}

// Auto-run initialization when loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFirebase);
} else {
  initFirebase();
}
