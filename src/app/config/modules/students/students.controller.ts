import { studentService } from './students.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
const getAllStudent = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result = await studentService.getAllStudentFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students retrived successfully',
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const { Id } = req.params;
  const result = await studentService.getSingleStudentFromDB(Id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrived successfully',
    data: result,
  });
});
const updateStudent = catchAsync(async (req, res) => {
  const { Id } = req.params;
  const result = await studentService.updateStudentFromDB(Id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student updated successfully',
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res) => {
  const { Id } = req.params;
  const result = await studentService.deleteStudentFromDB(Id);
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
  updateStudent,
  deleteStudent,
};
