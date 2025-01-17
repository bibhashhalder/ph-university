import { z } from 'zod';

const GuardianSchema = z.object({
  fatherName: z.string(),
  fatherOcupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOcupation: z.string(),
  motherContactNo: z.string(),
});

const UserNameSchema = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
});

const LocalGuardianSchema = z.object({
  name: z.string(),
  ocupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const StudentSchema = z.object({
  id: z.string(),
  password: z.string().max(15),
  name: UserNameSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNumber: z.string(),
  emargencyContactNumber: z.string(),
  bloodGrup: z.enum(['A+', 'A-', 'B+', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  presentAddress: z.string(),
  parmanentAddress: z.string(),
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'inactive']),
  isDeleted: z.boolean().default(false),
});

export default StudentSchema;
