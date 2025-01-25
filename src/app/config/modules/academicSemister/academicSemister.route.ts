import { Router } from 'express';
import { AcademicSemisterController } from './academicSemister.controller';
import validateRequest from '../../../middleWare/validateRequest';
import { AcademicSemisterValidations } from './academicSemister.validation';

const router = Router();
router.post(
  '/create-academic-semister',
  validateRequest(
    AcademicSemisterValidations.createAcademicSemisterValidaqtionSchema,
  ),
  AcademicSemisterController.createAcademicSemister,
);
router.get('/', AcademicSemisterController.getAllAcademicSemister);
router.get(
  '/:semisterId',
  AcademicSemisterController.getSingleAcademicSemister,
);
router.patch(
  '/:semisterId',
  validateRequest(
    AcademicSemisterValidations.updateAcademicSemisterValidaqtionSchema,
  ),
  AcademicSemisterController.updateAcademicSemister,
);
export const AcademicSemisterRoute = router;
