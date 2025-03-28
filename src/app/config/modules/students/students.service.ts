/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import { studentModel } from './student.model';
import AppEorror from '../../../error/eorror';
import httpStatus from 'http-status';
import { userModel } from '../users/user.model';
import { IStudent } from './student.interface';
import QueryBuilder from '../../../builder/QueryBuilder';
import { studentSearchAbleField } from './student.constant';

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  // const queryObj = { ...query };
  // console.log({ queryObj });
  // let searchTerm = '';
  // if (query?.searchTerm) {
  //   searchTerm = query?.searchTerm as string;
  // }
  // const searchQuery = studentModel.find({
  //   $or: studentSearchAbleField.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: 'i' },
  //   })),
  // });
  // const excludefields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
  // excludefields.forEach((el) => delete queryObj[el]);
  // const filterQuery = searchQuery
  //   .find(queryObj)
  //   .populate('admissionSemister')
  //   .populate({
  //     path: 'academicDepartment',
  //     populate: {
  //       path: 'academicFaculty',
  //     },
  //   });
  // let sort = '-createAt';
  // if (query.sort) {
  //   sort = query.sort as string;
  // }
  // const sortQuery = filterQuery.sort(sort);
  // let page = 1;
  // let limit = 1;
  // let skip = 0;
  // if (query.limit) {
  //   limit = Number(query.limit);
  // }
  // if (query.page) {
  //   page = Number(query.page);
  //   skip = (page - 1) * limit;
  // }
  // const paginationQuery = sortQuery.skip(skip);
  // const limitQuery = paginationQuery.limit(limit);
  // let fields = '-__v';
  // if (query.fields) {
  //   fields = (query.fields as string).split(',').join(' ');
  // }
  // const fieldLimitation = await limitQuery.select(fields);
  // return fieldLimitation;
  const studentQuery = new QueryBuilder(
    studentModel
      .find()
      .populate('admissionSemister')
      .populate({
        path: 'academicDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  )
    .search(studentSearchAbleField)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await studentQuery.modelQuery;
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  // const result = await studentModel.findOne({ _id: _id });
  const result = await studentModel
    .findById(id)
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
  const updateStudent = await studentModel.findByIdAndUpdate(
    id,
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
    const deletedStudent = await studentModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedStudent) {
      throw new AppEorror(httpStatus.BAD_REQUEST, 'Student not deleted');
    }
    const userID = deletedStudent.user;
    const deletedUser = await userModel.findByIdAndUpdate(
      userID,
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
