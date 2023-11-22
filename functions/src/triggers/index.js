const functions = require('firebase-functions');
const db = require('../config/database/firebase');

exports.onUserCreate = functions.firestore.document('users/{id}')
    .onCreate(async (snap, context) => {
        const currentId = context.params.id;
        const userCollection = db().collection("users");
        const nextId = (await userCollection.get()).size;
        const id = String(nextId);
        await db().collection('users').doc(currentId).update({ increment_id: id });
})