import express from 'express';
import cors from 'cors';
import expressMongoSanitize from 'express-mongo-sanitize';
import bodyParser from 'body-parser';
import { authRoutes } from './routes/api/authRoutes';

const app = express();
app.use(cors({ origin: true }));
app.use(expressMongoSanitize);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', authRoutes);

export default app;
