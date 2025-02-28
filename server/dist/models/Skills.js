import { model, Schema } from "mongoose";
const skillsSchema = new Schema({
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
}, { timestamps: true });
export default model("Skills", skillsSchema);
