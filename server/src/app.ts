import express from 'express';
import config from 'config';
import logger from './utils/logger';
import connect from './utils/connect';
import routes from './routes';
import cors from 'cors';

// const cors = require('cors');


const port = config.get<number>('port');

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
  
//     next();
// });
  

app.use(cors());

app.listen(port,async () => {
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app);
})