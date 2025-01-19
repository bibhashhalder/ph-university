/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import exress, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/config/modules/students/student.routes';
import { userRoutes } from './app/config/modules/users/user.route';
import { golobalError } from './app/middleWare/GolobalErrorHandeler';

const app: Application = exress();

app.use(cors());

app.use(exress.json());

app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', userRoutes);

const getAController = (req: Request, res: Response) => {
  res.send(' backend developer!!!!!!!');
};
app.get('/', getAController);
// golobal error handeller
app.use(golobalError);
export default app;
