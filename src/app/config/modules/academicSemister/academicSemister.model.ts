import { model, Schema } from 'mongoose';
import {
  IAcademicSemister,
  IMonth,
  ISemisterCode,
  ISemisterName,
} from './academicSemister.interface';
const semisterNameSchema: ISemisterName[] = ['Autum', 'Summar', 'Fall'];
const semisterCodeSchema: ISemisterCode[] = ['01', '02', '03'];
const monthSchema: IMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemisterSchema = new Schema<IAcademicSemister>({
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
});

export const academicSemisterModel = model<IAcademicSemister>(
  'AcademicSemister',
  academicSemisterSchema,
);
