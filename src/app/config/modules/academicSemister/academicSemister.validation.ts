import { z } from 'zod';
import {
  monthSchema,
  semisterCodeSchema,
  semisterNameSchema,
} from './academicSemister.constant';

const createAcademicSemisterValidaqtionSchema = z.object({
  body: z.object({
    name: z.enum([...semisterNameSchema] as [string, ...string[]]),
    code: z.enum([...semisterCodeSchema] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...monthSchema] as [string, ...string[]]),
    endMonth: z.enum([...monthSchema] as [string, ...string[]]),
  }),
});
const updateAcademicSemisterValidaqtionSchema = z.object({
  body: z.object({
    name: z.enum([...semisterNameSchema] as [string, ...string[]]).optional(),
    code: z.enum([...semisterCodeSchema] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    startMonth: z.enum([...monthSchema] as [string, ...string[]]).optional(),
    endMonth: z.enum([...monthSchema] as [string, ...string[]]).optional(),
  }),
});
export const AcademicSemisterValidations = {
  createAcademicSemisterValidaqtionSchema,
  updateAcademicSemisterValidaqtionSchema,
};
