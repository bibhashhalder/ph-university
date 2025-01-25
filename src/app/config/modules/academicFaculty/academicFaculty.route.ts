import { Router } from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../../middleWare/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = Router();
router.post(
  '/create-academic-faculty',
  AcademicFacultyController.createAcademicFaculty,
);
router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);
router.patch(
  '/:facultyI',
  validateRequest(academicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.updateAcademicFaculty,
);
export const AcademicFacultyRoute = router;
