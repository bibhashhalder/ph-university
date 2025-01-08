import { IStudent } from './student.interface';
import { studentModel } from './student.model';

const createStudentFromDB = async (studentData: IStudent) => {
  // const result = await studentModel.create(student); //built in static method
  // return result;
  const student = new studentModel(studentData);
  if (await student.isUserExists(studentData.id)) {
    throw new Error('User alrady exist!');
  }
  const result = student.save();
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
