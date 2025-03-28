import { model, Schema } from 'mongoose';
import { IFaculty, IFacultyModel, IFacultyName } from './faculty.interface';
import { facultyBloodGroup, facultyGender } from './faculty.constant';

const facultyNameSchema = new Schema<IFacultyName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const facultySchema = new Schema<IFaculty>(
  {
    id: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id must be required'],
      ref: 'User',
    },
    name: {
      type: facultyNameSchema,
      required: [true, 'Faculty name must be needed'],
    },
    gender: {
      type: String,
      enum: facultyGender,
      required: [true, 'Gender is requirde'],
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: facultyBloodGroup,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    parmanentAddress: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);
facultySchema.virtual('fullName').get(function () {
  return (
    this?.name?.firstName +
    '' +
    this?.name?.middleName +
    '' +
    this?.name?.lastName
  );
});

facultySchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

facultySchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

facultySchema.statics.isUserExists = async function (id: string) {
  const existingUser = await FacultyModel.findOne({ id });
  return existingUser;
};
export const FacultyModel = model<IFaculty, IFacultyModel>(
  'Faculty',
  facultySchema,
);
