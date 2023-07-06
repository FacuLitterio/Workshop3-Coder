import { Router } from "express";
//import del service para Courses.
//import CourseService from '../services/filesystem/courses.service.js';
import { createCourse, getCourses } from "../controllers/courses.controller.js";

const router = Router();

router.get("/", getCourses);

router.post("/", createCourse);

export default router;
