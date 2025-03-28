import { Router } from 'express';
import { studentController } from './students.controller';

const router = Router();

router.get('/', studentController.getAllStudent);
router.get('/:Id', studentController.getSingleStudent);
router.patch('/:Id', studentController.updateStudent);
router.delete('/:Id', studentController.deleteStudent);

export const studentRoutes = router;
