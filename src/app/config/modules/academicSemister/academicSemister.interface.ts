export type ISemisterName = 'Autum' | 'Summar' | 'Fall';
export type ISemisterCode = '01' | '02' | '03';
export type IMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
export type IAcademicSemister = {
  name: ISemisterName;
  code: ISemisterCode;
  year: string;
  startMonth: IMonth;
  endMonth: IMonth;
};
export type IAcademicSemisterNameAndCodeMapper = {
  [key: string]: string;
};
