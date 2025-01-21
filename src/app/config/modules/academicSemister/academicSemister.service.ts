import { IAcademicSemister } from './academicSemister.interface';
import { AcademicSemisterModel } from './academicSemister.model';

const createAcademicSemisterIntoDB = async (payload: IAcademicSemister) => {
  const result = await AcademicSemisterModel.create(payload);
  return result;
};
export const AcademicSemisterService = {
  createAcademicSemisterIntoDB,
};
