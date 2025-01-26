import { IAcademicFaculty } from './academicFaculty.interface';
import { academicFacultyModel } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: IAcademicFaculty) => {
  const result = await academicFacultyModel.create(payload);
  return result;
};
const getAllAcademicFacultyIntoDB = async () => {
  const result = await academicFacultyModel.find();
  return result;
};
const getSingleAcademicFacultyIntoDB = async (_id: string) => {
  const result = await academicFacultyModel.findById({ _id: _id });
  return result;
};
const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<IAcademicFaculty>,
) => {
  const result = await academicFacultyModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};
export const AcademicFacultyService = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyIntoDB,
  getSingleAcademicFacultyIntoDB,
  updateAcademicFacultyIntoDB,
};
