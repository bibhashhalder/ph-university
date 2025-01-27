import { model, Schema } from 'mongoose';
import { IAcademicSemister } from './academicSemister.interface';
import {
  monthSchema,
  semisterCodeSchema,
  semisterNameSchema,
} from './academicSemister.constant';

const academicSemisterSchema = new Schema<IAcademicSemister>(
  {
    name: {
      type: String,
      enum: semisterNameSchema,
      required: true,
    },
    code: {
      type: String,
      enum: semisterCodeSchema,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: monthSchema,
      required: true,
    },
    endMonth: {
      type: String,
      enum: monthSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
academicSemisterSchema.pre('save', async function (next) {
  const isSemisterExist = await AcademicSemisterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemisterExist) {
    throw new Error('Semister is already exist!');
  }
  next();
});
export const AcademicSemisterModel = model<IAcademicSemister>(
  'AcademicSemister',
  academicSemisterSchema,
);
