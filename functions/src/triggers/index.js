exports.onUserCreate = functions.firestore.document('users/{userId}')
    .onCreate(async (snap, context) => {
        const values = snap.data();
        const name = values.name;
        const userCollection = db().collection("users_princial");
        const nextId = (await userCollection.get()).size + 1;
        const id = String(nextId);
        await db().collection('users_princial').add({ increment_id: id, name });
})