import { Router } from 'express';
import { userController } from './user.controller';

import { StudentValidations } from '../students/student.validation';
import validateRequest from '../../../middleWare/validateRequest';

const router = Router();

router.post(
  '/create-student',
  validateRequest(StudentValidations.StudentSchema),
  userController.createStudent,
);
export const userRoutes = router;
