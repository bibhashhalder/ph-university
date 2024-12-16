import { IStudent } from './student.interface';
import { studentModel } from './student.model';

const createStudentFromDB = async (student: IStudent) => {
  const result = await studentModel.create(student);
  return result;
};
const getAllStudentFromDB = async () => {
  const result = await studentModel.find();
  return result;
};
const getSingleStudentFromDB = async (_id: string) => {
  const result = await studentModel.findOne({ _id: _id });
  return result;
};
export const studentService = {
  createStudentFromDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
