import { z } from 'zod';
import {
  monthSchema,
  semisterCodeSchema,
  semisterNameSchema,
} from './academicSemister.constant';

const AcademicSemisterValidaqtionSchema = z.object({
  body: z.object({
    name: z.enum([...semisterNameSchema] as [string, ...string[]]),
    code: z.enum([...semisterCodeSchema] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...monthSchema] as [string, ...string[]]),
    endMonth: z.enum([...monthSchema] as [string, ...string[]]),
  }),
});
export const AcademicSemisterValidations = {
  AcademicSemisterValidaqtionSchema,
};
