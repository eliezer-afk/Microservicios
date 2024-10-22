import { Sequelize } from 'sequelize';

const db = new Sequelize(process.env.DB_CONNECTION_STRING!, {
    dialect: 'mysql', // O el motor de base de datos que uses
    logging: false,
});

export default db;