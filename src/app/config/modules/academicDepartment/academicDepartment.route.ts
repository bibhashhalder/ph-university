import { Router } from 'express';
import { AcademicDeparmentConroller } from './academicDepartment.controller';
import validateRequest from '../../../middleWare/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = Router();
router.post(
  '/create-academic-department',
  // validateRequest(
  //   AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDeparmentConroller.createAcademicDepartment,
);
router.get('/', AcademicDeparmentConroller.getAllAcademicDepartment);
router.get(
  '/:departmentId',
  AcademicDeparmentConroller.getSingleAcademicDepartment,
);
router.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDeparmentConroller.updateAcademicDepartment,
);

export const AcademicDeparmentRoute = router;
