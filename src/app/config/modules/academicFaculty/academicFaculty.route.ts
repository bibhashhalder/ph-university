import { Router } from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = Router();
router.post(
  '/create-academic-faculty',
  AcademicFacultyController.createAcademicFaculty,
);
export const AcademicFacultyRoute = router;
