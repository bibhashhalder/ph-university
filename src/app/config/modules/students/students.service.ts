/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import { studentModel } from './student.model';
import AppEorror from '../../../error/eorror';
import httpStatus from 'http-status';
import { userModel } from '../users/user.model';
import { IStudent } from './student.interface';
const getAllStudentFromDB = async () => {
  const result = await studentModel
    .find()
    .populate('admissionSemister')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  // const result = await studentModel.findOne({ _id: _id });
  const result = await studentModel
    .findOne({ id })
    .populate('admissionSemister')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};
const updateStudentFromDB = async (id: string, payload: Partial<IStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;
  const modifiedUpdateData: Record<string, unknown> = {
    ...remainingStudentData,
  };
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdateData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdateData[`name.${key}`] = value;
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdateData[`name.${key}`] = value;
    }
  }
  console.log(modifiedUpdateData);
  const updateStudent = await studentModel.findOneAndUpdate(
    { id },
    modifiedUpdateData,
    {
      new: true,
      runValidators: true,
    },
  );
  return updateStudent;
};
const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const deletedStudent = await studentModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedStudent) {
      throw new AppEorror(httpStatus.BAD_REQUEST, 'Student not deleted');
    }
    const deletedUser = await userModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppEorror(httpStatus.BAD_REQUEST, 'User note deleted');
    }
    await session.commitTransaction();
    await session.endSession();
    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};
export const studentService = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentFromDB,
  deleteStudentFromDB,
};
