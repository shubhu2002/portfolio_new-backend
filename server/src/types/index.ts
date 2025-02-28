import { z } from "zod";

export interface ProjectConstructor {
  id: number;
  heading: string;
  src: string;
  link?: string;
  description: string;
  images: string[];
  tech_used: string[];
  github_link?: string;
  category: string[];
}

export const ProjectZodSchema = z.object({
  id: z.number(),
  heading: z.string(),
  src: z.string(),
  link: z.string().optional(),
  description: z.string(),
  images: z.string().array(),
  tech_used: z.string().array(),
  github_link: z.string().optional(),
  category: z.string().array(),
});

export interface SkillsConstructor {
  name: string;
  image?: string;
  category?: string;
}

export const SkillsZodSchem = z.object({
  name: z.string(),
  image: z.string().optional(),
  category: z.string().optional(),
  fieldId: z.string().optional(),
});
