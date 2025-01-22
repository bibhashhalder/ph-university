/* eslint-disable @typescript-eslint/no-unused-vars */
import { academicSemisterNameAndCodeMapper } from './academicSemister.constant';
import { IAcademicSemister } from './academicSemister.interface';
import { AcademicSemisterModel } from './academicSemister.model';

const createAcademicSemisterIntoDB = async (payload: IAcademicSemister) => {
  if (academicSemisterNameAndCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semister code');
  }
  const result = await AcademicSemisterModel.create(payload);
  return result;
};
const getAllAcademicSemisterFromDB = async () => {
  const result = await AcademicSemisterModel.find();
  return result;
};
const getSingleAcademicSemisterFromDB = async (_id: string) => {
  const result = await AcademicSemisterModel.findById({ _id: _id });
  return result;
};
const updateAcademicSemisterFromDB = async (
  _id: string,
  payload: Partial<IAcademicSemister>,
) => {
  const result = await AcademicSemisterModel.updateOne({ _id: _id }, payload, {
    new: true,
  });
  return result;
};
export const AcademicSemisterService = {
  createAcademicSemisterIntoDB,
  getAllAcademicSemisterFromDB,
  getSingleAcademicSemisterFromDB,
  updateAcademicSemisterFromDB,
};
