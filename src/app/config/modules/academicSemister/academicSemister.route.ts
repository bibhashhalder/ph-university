import { Router } from 'express';
import { AcademicSemisterController } from './academicSemister.controller';
import validateRequest from '../../../middleWare/validateRequest';
import { AcademicSemisterValidations } from './academicSemister.validation';

const router = Router();
router.post(
  '/create-academic-semister',
  validateRequest(
    AcademicSemisterValidations.AcademicSemisterValidaqtionSchema,
  ),
  AcademicSemisterController.createAcademicSemister,
);
export const AcademicSemisterRoute = router;
