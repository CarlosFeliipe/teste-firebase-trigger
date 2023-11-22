const db = require('../../config/database/firebase');

async function create(name) {
    await db().collection('users').add({ name });
    return name;
}

module.exports = create;