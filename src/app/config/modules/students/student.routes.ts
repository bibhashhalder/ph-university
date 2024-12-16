import { Router } from 'express';
import { studentController } from './students.controller';

const router = Router();

router.post('/create-student', studentController.createStudent);
router.get('/', studentController.getAllStudent);
router.get('/:studentId', studentController.getSingleStudent);

export const studentRoutes = router;
