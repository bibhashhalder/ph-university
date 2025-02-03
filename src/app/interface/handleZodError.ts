import { ZodError, ZodIssue } from 'zod';
import { IErrorSource, IGenericErrorResponse } from './error';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errorSource: IErrorSource = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorSource,
  };
};

export default handleZodError;
