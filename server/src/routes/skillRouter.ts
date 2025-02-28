import { Router } from "express";
import {
  createSkill,
  updatePSkillById,
  deleteSkillById,
  getAllSkills,
  upload,
} from "../controllers/skillsController.js";

const router = Router();

router.post("/create", upload.single("image"), createSkill);
router.put("/:id", updatePSkillById);
router.delete("/:id", deleteSkillById);
router.get("/all", getAllSkills);

export default router;
