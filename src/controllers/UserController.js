const connection = require('../database/connection');
const encrypt = require('../utils/Encrypt');

module.exports = {

    async index(req, res) {
        const reqData = req.body;

        try {
            const data = await connection.
                raw(`SELECT * FROM usuarios WHERE Email="${reqData.Email}" || login="${reqData.Login}" LIMIT 1`);

            if (data[0] == "") {
                console.log("Não conseguiu selecionar pelo email ou login");
                return res.status(401).json({ error: "Not Authorized!" });
            }

            // Object.keys(reqData).forEach(function (key) {
            //     console.log(key, reqData[key]);
            // })

            return res.json(data[0][0]);

        } catch (error) {
            console.log(error);
            return res.status(401).json({ error: "Not Authorized!" });
        }
    },

    async create(req, res) {
        const { Email, Login, password, NomeCompleto, Tipo, Curso, Telefone = "" } = req.body;

        try {
            const senha = await encrypt(password);

            if (senha) {
                let now = new Date;
                const response = await connection('usuarios').insert({
                    Email,
                    Login,
                    senha,
                    NomeCompleto,
                    Tipo,
                    Curso,
                    Telefone,
                    Data: now,
                })

                if (!response) {
                    console.log("Erro ao inserir no banco!");
                    console.log(response);
                    return res.status(401).json({ error: "Not Authorized!" });
                }

                console.log("Inseriu no banco!");
                return res.status(200).json(response);
            }

        } catch (error) {
            return res.status(401).json({ error: "Not Authorized!" });
        }

    },

    async update(req, res) {
        const { id, NomeCompleto, Curso, Login, Email, Telefone = "" } = req.body;

        try {
            const data = await connection("usuarios")
                .where("usuarios.id", id)
                .update({
                    NomeCompleto,
                    Curso,
                    Login,
                    Email,
                    Telefone
                });

            if (!data) {
                console.log("Não conseguiu selecionar pelo email ou login");
                return res.status(401).json({ error: "Not Authorized!" });
            }

            console.log('Funcionou as alterações');
            return res.json({ Status: 'Alterações Salvas' });

        } catch (error) {
            console.log(error);
            return res.status(401).json({ error: "Not Authorized!" });
        }
    },

    async delete(req, res) {
        return null;
    },
};