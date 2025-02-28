import type { Request, Response } from "express";
import multer from "multer";
import path from "path";

import Skills from "../models/Skills.js";
import { SkillsConstructor, SkillsZodSchem } from "../types/index.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads/"); // Make sure you have 'uploads' folder in root
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

export const upload = multer({ storage });

export const createSkill = async (req: Request, res: Response) => {
  try {
    const { name, category } = req.body;
    const image = req.file
      ? `server/src/uploads/${req.file.filename}`
      : undefined;

    const newSkill = SkillsZodSchem.parse({ name, image, category });

    const skill = new Skills(newSkill);

    const savedSkill = await skill.save();

    res.status(200).json({
      status: true,
      data: savedSkill as SkillsConstructor,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

export const updatePSkillById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedSkill = SkillsZodSchem.parse(req.body);
    const skill = await Skills.findByIdAndUpdate(
      id,
      {
        $set: updatedSkill,
      },
      { new: true },
    );
    res.status(200).json({
      status: true,
      data: skill as SkillsConstructor,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

export const deleteSkillById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Skills.findByIdAndDelete(id);

    res.status(200).json({
      status: true,
      message: "statusfully Deleted",
      data: response,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

export const getAllSkills = async (req: Request, res: Response) => {
  try {
    const skills = await Skills.find();
    console.log(skills);

    if (!skills) {
      res.status(404).json({ status: true, message: "No data found" });
      return;
    }

    res.status(200).json({
      status: true,
      data: skills as SkillsConstructor[],
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};
