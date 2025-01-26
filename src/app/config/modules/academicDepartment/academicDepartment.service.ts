import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentModel } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: IAcademicDepartment) => {
  const result = await AcademicDepartmentModel.create(payload);
  return result;
};
const getAllAcademicDepartmentIntoDB = async () => {
  const result =
    await AcademicDepartmentModel.find().populate('academicFaculty');
  return result;
};
const getSingleAcademicDepartmentIntoDB = async (id: string) => {
  const result = await AcademicDepartmentModel.findById({ _id: id }).populate(
    'academicFaculty',
  );
  return result;
};
const upadateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<IAcademicDepartment>,
) => {
  const result = await AcademicDepartmentModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDeparmentService = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentIntoDB,
  getSingleAcademicDepartmentIntoDB,
  upadateAcademicDepartmentIntoDB,
};
