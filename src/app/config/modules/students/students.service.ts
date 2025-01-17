import { IStudent } from './student.interface';
import { studentModel } from './student.model';

const createStudentFromDB = async (studentData: IStudent) => {
  if (await studentModel.isUserExists(studentData.id)) {
    throw new Error('Student alrady exist!');
  }
  const result = await studentModel.create(studentData); //built in static method
  return result;
  // const student = new studentModel(studentData);
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User alrady exist!');
  // }
  // const result = student.save();
  // return result;
};
const getAllStudentFromDB = async () => {
  const result = await studentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  // const result = await studentModel.findOne({ _id: _id });
  const result = await studentModel.aggregate([{ $match: { id: id } }]);
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await studentModel.updateOne({ id }, { isDeleted: true });
  return result;
};
export const studentService = {
  createStudentFromDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
