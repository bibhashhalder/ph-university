/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';

export const golobalError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  const statusCode = 500;
  const message = error.message || 'Something went wrong';
  return res.status(statusCode).json({
    succer: false,
    message,
    error: error,
  });
};
