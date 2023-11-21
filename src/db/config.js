import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'merd',
    'root',
    '',
    {
        host: "localhost",
        dialect: 'mysql'
    }
);

export default sequelize;