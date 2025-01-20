/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import exress, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import { golobalError } from './app/middleWare/GolobalErrorHandeler';
import notFound from './app/middleWare/notFound';
import router from './app/routes';

const app: Application = exress();

app.use(cors());

app.use(exress.json());

app.use('/api/v1', router);

const getAController = (req: Request, res: Response) => {
  res.send(' backend developer!!!!!!!');
};
app.get('/', getAController);
// golobal error handeller
app.use(golobalError);
app.use(notFound);
export default app;
