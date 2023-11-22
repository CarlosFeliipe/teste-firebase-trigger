const create = require("./create-user-service");

async function handler(request, response) {
    try {
        const { name } = request.body;
        const result = await create(name);
        response.status(200).json({ result })
    } catch (error) {
        response.status(502).send(error);
    }
}

module.exports = handler;