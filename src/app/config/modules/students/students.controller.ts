import { Request, Response } from 'express';
import { studentService } from './students.service';
import StudentSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const zodParseData = StudentSchema.parse(studentData);
    const result = await studentService.createStudentFromDB(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Smoe thing went worngt',
      error: error,
    });
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
    res.status(500).json({
      success: false,
      message: 'Smoe thing went worngt',
      error: error,
    });
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
    res.status(500).json({
      success: false,
      message: 'Smoe thing went worngt',
      error: error,
    });
  }
};
export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
