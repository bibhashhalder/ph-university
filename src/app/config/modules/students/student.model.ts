import { model, Schema } from 'mongoose';
import {
  IGuardian,
  ILocalGuardian,
  IStudent,
  IUserName,
} from './student.interface';
const userNameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});
const guardianSchema = new Schema<IGuardian>({
  fatherName: { type: String, required: true },
  fatherOcupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOcupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});
const localGuardianSchema = new Schema<ILocalGuardian>({
  name: { type: String, required: true },
  ocupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});
const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emargencyContactNumber: {
    type: String,
    required: true,
  },
  bloodGrup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
  },
});

export const studentModel = model<IStudent>('Student', studentSchema);
