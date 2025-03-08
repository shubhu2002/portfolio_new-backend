import { Router } from "express";
import { getAllProjects, deleteProjectById, updateProjectById, createProject, } from "../controllers/projectController.js";
const router = Router();
router.post("/create", createProject);
router.put("/:id", updateProjectById);
router.delete("/:id", deleteProjectById);
router.get("/all", getAllProjects);
export default router;
