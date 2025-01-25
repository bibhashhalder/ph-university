import config from '../..';
import { AcademicSemisterModel } from '../academicSemister/academicSemister.model';
import { IStudent } from '../students/student.interface';
import { studentModel } from '../students/student.model';
import { IUser } from './user.interface';

import { userModel } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentFromDB = async (password: string, studentData: IStudent) => {
  const userData: Partial<IUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  const admissionSemister = await AcademicSemisterModel.findById(
    studentData.admissionSemister,
  );
  userData.id = await generateStudentId(admissionSemister);
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
