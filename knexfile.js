const dotenv = require('dotenv');
dotenv.config({ silent: true });

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PW,
            database: process.env.DB_DB,
        },
        migrations: {
            directory: './migrations',
        },
        seeds: { directory: './seeds' },
    },
    staging: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PW,
            database: process.env.DB_DB,
        },
    },
    production: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PW,
            database: process.env.DB_DB,
        },
    },
};
