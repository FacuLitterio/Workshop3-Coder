import { Router } from "express";
import {
  createStudent,
  getStudents,
} from "../controllers/students.controller.js";
//import del service repository:

const router = Router();

//TODO: Migrar a patrón controller:

router.get("/", getStudents);

router.post("/", createStudent);

export default router;
