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
      type: Date,
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

export const AcademicSemisterModel = model<IAcademicSemister>(
  'AcademicSemister',
  academicSemisterSchema,
);
