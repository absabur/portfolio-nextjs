const { Schema, mongoose } = require("mongoose");

const experienceSchema = new Schema({
  role: { type: String, trim: true },
  company: { type: String, trim: true },
  logo: { type: String },
  companyUrl: { type: String },
  duration: { type: String },
  location: { type: String },
  description: { type: String },
  order: { type: Number, default: 0 },
  is_active: { type: Boolean, default: true },
  createDate: { type: Object },
  updateDate: { type: Object },
});

module.exports =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);