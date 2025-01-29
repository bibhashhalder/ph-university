/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import config from '../..';
import AppEorror from '../../../error/eorror';
import { AcademicSemisterModel } from '../academicSemister/academicSemister.model';
import { IStudent } from '../students/student.interface';
import { studentModel } from '../students/student.model';
import { IUser } from './user.interface';

import { userModel } from './user.model';
import { generateStudentId } from './user.utils';
import httpStatus from 'http-status';
const createStudentFromDB = async (password: string, payload: IStudent) => {
  const userData: Partial<IUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  const admissionSemister = await AcademicSemisterModel.findById(
    payload.admissionSemister,
  );
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    if (!admissionSemister) {
      throw new AppEorror(httpStatus.NOT_FOUND, 'Semester Not found');
    }
    userData.id = await generateStudentId(admissionSemister);
    const newUser = await userModel.create([userData], { session });
    if (!newUser.length) {
      throw new AppEorror(httpStatus.BAD_REQUEST, 'Semester Not found');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;
    const newStudent = await studentModel.create([payload], { session });
    if (!newStudent.length) {
      throw new AppEorror(httpStatus.BAD_REQUEST, 'Semester Not found');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
  }
};
export const userService = {
  createStudentFromDB,
};
