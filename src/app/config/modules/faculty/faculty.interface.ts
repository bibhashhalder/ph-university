import { Model, Types } from 'mongoose';

export type IFacultyName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type IFacultyGender = 'male' | 'female' | 'other';
export type IBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';
export type IFaculty = {
  id: string;
  user: Types.ObjectId;
  name: IFacultyName;
  gender: IFacultyGender;
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: IBloodGroup;
  presentAddress: string;
  parmanentAddress: string;
  profileImage?: string;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};

export interface IFacultyModel extends Model<IFaculty> {
  isUserExists(id: string): Promise<IFaculty | null>;
}
