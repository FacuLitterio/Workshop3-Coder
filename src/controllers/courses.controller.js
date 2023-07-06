import CourseServiceDao from "../services/db/dao/courses.dao.js";

const coursesService = new CourseServiceDao();

export const getCourses = async (req, res) => {
  try {
    let courses = await coursesService.getAll();
    res.send(courses);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: error, message: "No se pudo obtener los cursos." });
  }
};

export const createCourse = async (req, res) => {
  try {
    let result = await coursesService.saveCourse(req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: error, message: "No se pudo guardar el curso." });
  }
};
