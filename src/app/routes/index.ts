import { Router } from 'express';
import { studentRoutes } from '../config/modules/students/student.routes';
import { userRoutes } from '../config/modules/users/user.route';
import { AcademicSemisterRoute } from '../config/modules/academicSemister/academicSemister.route';

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
    path: '/create-academic-semister',
    route: AcademicSemisterRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
