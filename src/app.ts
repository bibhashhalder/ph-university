import exress, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = exress();

app.use(cors());

app.use(exress.json());

app.get('/', (req: Request, res: Response) => {
 
  res.send('hello backend developer!!!!!!!');
});

export default app;
