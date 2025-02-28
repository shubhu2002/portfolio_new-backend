import { model, Schema, Document } from "mongoose";

export interface SkillsConstructor extends Document {
  name: string;
  category?: string;
  image?: string;
  fieldId?: string;
}

const skillsSchema: Schema = new Schema<SkillsConstructor>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    fieldId: {
      type: String,
    },
  },
  { timestamps: true },
);

export default model<SkillsConstructor>("Skills", skillsSchema);
