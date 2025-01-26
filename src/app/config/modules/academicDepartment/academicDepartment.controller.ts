import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { AcademicDeparmentService } from './academicDepartment.service';
import httpStatus from 'http-status';
const createAcademicDepartment = catchAsync(async (req, res) => {
  const academicDepartment = req.body;
  const result =
    await AcademicDeparmentService.createAcademicDepartmentIntoDB(
      academicDepartment,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department is created successfuly',
    data: result,
  });
});
const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDeparmentService.getAllAcademicDepartmentIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department are retrived successfuly',
    data: result,
  });
});
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDeparmentService.getSingleAcademicDepartmentIntoDB(
      departmentId,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Academic department is created successfuly',
    data: result,
  });
});
const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await AcademicDeparmentService.upadateAcademicDepartmentIntoDB(
    departmentId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department is update successfuly',
    data: result,
  });
});

export const AcademicDeparmentConroller = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
