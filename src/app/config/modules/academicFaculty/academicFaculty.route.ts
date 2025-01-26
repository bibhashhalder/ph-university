import { Router } from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../../middleWare/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = Router();
router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.createAcademicFaculty,
);
router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);
router.patch(
  '/:facultyId',
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.updateAcademicFaculty,
);
export const AcademicFacultyRoute = router;
