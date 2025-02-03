import mongoose from 'mongoose';
import { IErrorSource, IGenericErrorResponse } from './error';

const handleCastError = (
  error: mongoose.Error.CastError,
): IGenericErrorResponse => {
  const errorSource: IErrorSource = [
    {
      path: error.path,
      message: error.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid ID',
    errorSource,
  };
};
export default handleCastError;
