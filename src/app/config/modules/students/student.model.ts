/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import {
  IGuardian,
  ILocalGuardian,
  IStudent,
  IStudentModel,
  IUserName,
} from './student.interface';
import validator from 'validator';
const userNameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    required: [true, 'First name must be needed'],
    trim: true,
    maxlength: [20, 'First name is not alowed  more than 20 charecter '],
    minlength: [3, 'First name is needed minimum 3 charecter'],
    validate: {
      validator: function (value) {
        const firstNameValue = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameValue === value;
      },
      message: '{VALUE} is not capitalize',
    },
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name must be needed'],
    maxlength: [20, 'First name is not alowed  more than 20 charecter '],
    minlength: [3, 'First name is needed minimum 3 charecter'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
    },
  },
});
const guardianSchema = new Schema<IGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name must be needed'],
  },
  fatherOcupation: {
    type: String,
    required: [true, 'Father ocupation must be needed'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact number must be needed'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother name must be needed'],
  },
  motherOcupation: {
    type: String,
    required: [true, 'Mother ocupation must be needed'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number must be needed'],
  },
});
const localGuardianSchema = new Schema<ILocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name must be needed'],
  },
  ocupation: {
    type: String,
    required: [true, 'Local guardian ocupation must be needed'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number must be needed'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address must be needed'],
  },
});
const studentSchema = new Schema<IStudent, IStudentModel>({
  id: {
    type: String,
    required: [true, 'Id must be required'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id must be required'],
    unique: true,
    ref: 'User',
  },

  name: {
    type: userNameSchema,
    required: [true, 'User name must be needed'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} IS NOT VALID PERSON',
    },
    required: [true, 'Gender must be needed'],
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email must be needed'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not valid email',
    },
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number must be needed'],
  },
  emargencyContactNumber: {
    type: String,
    required: [true, 'Emargency contact number must be needed'],
  },
  bloodGrup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address must be needed'],
  },
  parmanentAddress: {
    type: String,
    required: [true, 'Parmanent address must be needed'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian must be needed'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian must be needed'],
  },
  profileImage: {
    type: String,
  },

  admissionSemister: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemister',
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },
});
// pre save/create  middleware

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await studentModel.findOne({ id });
  return existingUser;
};
export const studentModel = model<IStudent, IStudentModel>(
  'Student',
  studentSchema,
);
