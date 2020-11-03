// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql2',
        version: '5.7',
        connection: {
            host: 'lbsumare.mysql.uhserver.com',
            user: 'aluno2020',
            password: '@Aluno2020',
            database: 'lbsumare',
        },
        migrations: {
            directory: './src/database/migrations',
        },
        useNullAsDefault: true,
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
