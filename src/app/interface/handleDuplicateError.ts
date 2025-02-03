/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IErrorSource, IGenericErrorResponse } from './error';

const handleDuplicateError = (error: any): IGenericErrorResponse => {
  const match = error.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];
  const errorSource: IErrorSource = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid ID',
    errorSource,
  };
};
export default handleDuplicateError;
