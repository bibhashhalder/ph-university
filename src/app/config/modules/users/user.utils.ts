import { IAcademicSemister } from '../academicSemister/academicSemister.interface';
import { userModel } from './user.model';
const findLastStudent = async () => {
  const lastStudent = await userModel
    .findOne(
      {
        role: 'student',
      },
      {
        id: 1,
        _id: 0,
      },
    )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};
export const generateStudentId = async (payload: IAcademicSemister) => {
  let currentId = (0).toString();
  const lastStudentId = await findLastStudent();
  const currentSemisterCode = payload.code;
  const currentSemisterYear = payload.year;
  const lastStudentSemisterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  if (
    lastStudentId &&
    lastStudentSemisterCode === currentSemisterCode &&
    lastStudentYear === currentSemisterYear
  ) {
    currentId = lastStudentId.substring(6);
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
