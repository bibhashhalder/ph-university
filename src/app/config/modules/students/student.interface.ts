import { Model, Types } from 'mongoose';

export type IGuardian = {
  fatherName: string;
  fatherOcupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOcupation: string;
  motherContactNo: string;
};

export type IUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type ILocalGuardian = {
  name: string;
  ocupation: string;
  contactNo: string;
  address: string;
};
export type IStudent = {
  id: string;
  user: Types.ObjectId;

  name: IUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNumber: string;
  emargencyContactNumber: string;
  bloodGrup?: 'A+' | 'A-' | 'B+' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImage?: string;
  isDeleted: boolean;
};
// custom a instance method

// export type IStudentMethod = {
//   isUserExists(id: string): Promise<IStudent | null>;
// };

// export type IStudentModel = Model<
//   IStudent,
//   Record<string, never>,
//   IStudentMethod
// >;

// customt a static method

export interface IStudentModel extends Model<IStudent> {
  isUserExists(id: string): Promise<IStudent | null>;
}
