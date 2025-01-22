import {
  IAcademicSemisterNameAndCodeMapper,
  IMonth,
  ISemisterCode,
  ISemisterName,
} from './academicSemister.interface';

export const semisterNameSchema: ISemisterName[] = ['Autum', 'Summar', 'Fall'];
export const semisterCodeSchema: ISemisterCode[] = ['01', '02', '03'];
export const monthSchema: IMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const academicSemisterNameAndCodeMapper: IAcademicSemisterNameAndCodeMapper =
  {
    Autum: '01',
    Summar: '02',
    Fall: '03',
  };
