import { Router } from 'express';
import { studentRoutes } from '../config/modules/students/student.routes';
import { userRoutes } from '../config/modules/users/user.route';
import { AcademicSemisterRoute } from '../config/modules/academicSemister/academicSemister.route';
import { AcademicFacultyRoute } from '../config/modules/academicFaculty/academicFaculty.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/semister',
    route: AcademicSemisterRoute,
  },
  {
    path: '/faculty',
    route: AcademicFacultyRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
