/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';

import { ZodError } from 'zod';
import { IErrorSource } from '../interface/error';
import config from '../config';
import handleZodError from '../interface/handleZodError';
import handleValidationError from '../interface/handleValidationError';
import handleCastError from '../interface/handleCastError';
import handleDuplicateError from '../interface/handleDuplicateError';
import AppEorror from '../error/eorror';
export const golobalError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  // setting default

  let statusCode = 500;
  let message = 'Something went wrong';

  let errorSource: IErrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (error instanceof ZodError) {
    const simpliFiedError = handleZodError(error);
    statusCode = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    errorSource = simpliFiedError?.errorSource;
  } else if (error?.name === 'ValidationError') {
    const simpliFiedError = handleValidationError(error);
    statusCode = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    errorSource = simpliFiedError?.errorSource;
  } else if (error?.name === 'CastError') {
    const simpliFiedError = handleCastError(error);
    statusCode = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    errorSource = simpliFiedError?.errorSource;
  } else if (error?.code === 11000) {
    const simpliFiedError = handleDuplicateError(error);
    statusCode = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    errorSource = simpliFiedError?.errorSource;
  } else if (error instanceof AppEorror) {
    statusCode = error?.statusCode;
    message = error.message;
    errorSource = [
      {
        path: '',
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error.message;
    errorSource = [
      {
        path: '',
        message: error?.message,
      },
    ];
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    error,
    stack: config.NODE_ENV === 'development' ? error?.stack : null,
  });
};
