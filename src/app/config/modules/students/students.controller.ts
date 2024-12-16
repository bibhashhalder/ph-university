import { Request, Response } from 'express';
import { studentService } from './students.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await studentService.createStudentFromDB(student);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
