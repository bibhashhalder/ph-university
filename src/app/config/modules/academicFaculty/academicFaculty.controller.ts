import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { AcademicFacultyService } from './academicFaculty.service';
const createAcademicFaculty = catchAsync(async (req, res) => {
  const academicFacultyData = req.body;
  const result =
    await AcademicFacultyService.createAcademicFacultyIntoDB(
      academicFacultyData,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is created successfully',
    data: result,
  });
});
export const AcademicFacultyController = {
  createAcademicFaculty,
};
