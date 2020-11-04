const connection = require('../database/connection');
const encrypt = require('../utils/Encrypt');

module.exports = {

    async Login(req, res) {
        const { Email, Login, password } = req.body;

        try {
            const senha = await encrypt(password);

            const response = await connection
                .raw(`SELECT * FROM usuarios WHERE Email="${Email}" && senha="${senha}" || login="${Login}" && senha="${senha}" `);

            if (response[0] == "") {
                console.log("Erro ao buscar informação!");
                return res.status(401).json({ error: 'Not Authorized!' });
            }

            console.log(response[0][0]);
            return res.json(response[0][0].id);

        } catch (error) {
            console.log("Erro ao acessar o banco");
            return res.status(401).json({ error: 'Not Authorized!' });
        }

    }
}