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
export const AcademicSemisterController = {
  createAcademicSemister,
};
