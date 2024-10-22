import express from 'express';
import dotenv from 'dotenv';
import router from './routers/router';
import sequelize from './config/db';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/catalog', router);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Catalog microservice running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});