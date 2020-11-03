const connection = require('../database/connection');


module.exports = {

    async Test(req, res) {
        try {
            const response = await connection('usuarios').select('*');

            console.log('Connection has been established successfully.');

            return res.json(response);
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },

    async TestRaw(req, res) {
        try {
            const response = await connection
                .raw("SELECT * FROM usuarios");

            if (!response) {
                return res.status(401).json({ error: "Not Authorized!" })
            }

            console.log('Raw funcionando');

            return res.json(response[0]);
        } catch (error) {
            console.error('Raw deu erro: ', error);
        }
    }
}