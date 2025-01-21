/* eslint-disable @typescript-eslint/no-explicit-any */
import { studentService } from './students.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudentFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students retrived successfully',
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrived successfully',
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.deleteStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully',
    data: result,
  });
});
export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
