import { Router } from 'express';
import { FacultyController } from './faculty.controller';
import validateRequest from '../../../middleWare/validateRequest';
import { updateFacultyValidationSchema } from './faculty.validation';

const router = Router();
router.get('/:id', FacultyController.getSingleFaculty);
router.patch(
  '/:id',
  validateRequest(updateFacultyValidationSchema),
  FacultyController.updateFaculty,
);

router.delete('/:id', FacultyController.deleteFaculty);

router.get('/', FacultyController.getAllFaculty);
export const FacultyRoute = router;
