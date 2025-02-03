import { model, Schema } from 'mongoose';
import { IAcademicDepartment } from './academicDepartment.interface';
import AppEorror from '../../../error/eorror';
import httpStatus from 'http-status';
const academicDepartmentSchema = new Schema<IAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

// academicDepartmentSchema.pre('save', async function (next) {
//   const isDepartmentExist = await AcademicDepartmentModel.findOne({
//     name: this.name,
//   });
//   if (isDepartmentExist) {
//     throw new AppEorror(
//       httpStatus.NOT_FOUND,
//       'Academic department all ready exist',
//     );
//   }
//   next();
// });
academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartmentModel.findOne(query);
  if (isDepartmentExist) {
    throw new AppEorror(httpStatus.NOT_FOUND, 'This department does not exist');
  }
  next();
});
export const AcademicDepartmentModel = model<IAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
