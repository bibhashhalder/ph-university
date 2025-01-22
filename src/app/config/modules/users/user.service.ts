import config from '../..';
// import { IAcademicSemister } from '../academicSemister/academicSemister.interface';
import { IStudent } from '../students/student.interface';
import { studentModel } from '../students/student.model';
import { IUser } from './user.interface';

import { userModel } from './user.model';

const createStudentFromDB = async (password: string, studentData: IStudent) => {
  const userData: Partial<IUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  // const generateStudentId =(payload:IAcademicSemister)=>{

  // }
  userData.id = '20300006';
  const newUser = await userModel.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await studentModel.create(studentData);
    return newStudent;
  }
};
export const userService = {
  createStudentFromDB,
};
