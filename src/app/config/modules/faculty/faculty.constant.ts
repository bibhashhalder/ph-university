import { IBloodGroup, IFacultyGender } from './faculty.interface';

export const facultyGender: IFacultyGender[] = ['male', 'female', 'other'];
export const facultyBloodGroup: IBloodGroup[] = [
  'A+',
  'A-',
  'AB+',
  'AB-',
  'B+',
  'B-',
  'O+',
  'O-',
];

export const FacultySearchableFields = [
  'email',
  'id',
  'contactNo',
  'emergencyContactNo',
  'name.firstName',
  'name.lastName',
  'name.middleName',
];
