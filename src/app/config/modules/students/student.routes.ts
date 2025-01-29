import { Router } from 'express';
import { studentController } from './students.controller';

const router = Router();

router.get('/', studentController.getAllStudent);
router.get('/:studentId', studentController.getSingleStudent);
router.patch('/:studentId', studentController.updateStudent);
router.delete('/:studentId', studentController.deleteStudent);

export const studentRoutes = router;
