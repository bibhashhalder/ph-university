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
  isActive: 'active' | 'inactive';
};
