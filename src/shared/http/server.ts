import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express(); // instance of express

app.use(cors()); // no param in cors, so accepting all ports and requests
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('papa running'));
