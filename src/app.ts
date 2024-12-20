import exress, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/config/modules/students/student.routes';

const app: Application = exress();

app.use(cors());

app.use(exress.json());

app.use('/api/v1/students', studentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send(' backend developer!!!!!!!');
};
app.get('/', getAController);

export default app;
