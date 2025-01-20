import { Router } from 'express';
import { studentRoutes } from '../config/modules/students/student.routes';
import { userRoutes } from '../config/modules/users/user.route';

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
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
