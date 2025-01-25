import { academicFacultyModel } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: string) => {
  const result = await academicFacultyModel.create(payload);
  return result;
};
export const AcademicFacultyService = {
  createAcademicFacultyIntoDB,
};
