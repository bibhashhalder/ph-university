import mongoose from 'mongoose';
import { IErrorSource, IGenericErrorResponse } from './error';

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errorSource: IErrorSource = Object.values(error.errors).map(
    (value: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: value?.path,
        message: value?.message,
      };
    },
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorSource,
  };
};
export default handleValidationError;
