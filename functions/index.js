const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
//const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
//const admin = require('firebase-admin');
//admin.initializeApp();
//

// npm-rest-client init
const Client = require("node-rest-client").Client;
const clientYT = new Client();

exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });

