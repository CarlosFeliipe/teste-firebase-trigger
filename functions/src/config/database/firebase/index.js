const admin = require('firebase-admin');

admin.initializeApp();

function db() {
    return admin.firestore();
}

module.exports = db;