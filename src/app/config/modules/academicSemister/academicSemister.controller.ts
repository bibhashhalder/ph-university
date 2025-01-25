import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';

import { AcademicSemisterService } from './academicSemister.service';
const createAcademicSemister = catchAsync(async (req, res) => {
  const academicSemister = req.body;
  const result =
    await AcademicSemisterService.createAcademicSemisterIntoDB(
      academicSemister,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is created successfully',
    data: result,
  });
});
const getAllAcademicSemister = catchAsync(async (req, res) => {
  const result = await AcademicSemisterService.getAllAcademicSemisterFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is retrived successfully',
    data: result,
  });
});
const getSingleAcademicSemister = catchAsync(async (req, res) => {
  const { semisterId } = req.params;
  const result =
    await AcademicSemisterService.getSingleAcademicSemisterFromDB(semisterId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Academic semister is retrived successfully',
    data: result,
  });
});
const updateAcademicSemister = catchAsync(async (req, res) => {
  const { semisterId } = req.params;
  const result = await AcademicSemisterService.updateAcademicSemisterFromDB(
    semisterId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Academic semister is update successfully',
    data: result,
  });
});
export const AcademicSemisterController = {
  createAcademicSemister,
  getAllAcademicSemister,
  getSingleAcademicSemister,
  updateAcademicSemister,
};
