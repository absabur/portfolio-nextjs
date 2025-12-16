const { Schema, mongoose } = require("mongoose");

const educationSchema = new Schema({
  degree: { type: String, trim: true },
  institution: { type: String, trim: true },
  duration: { type: String },
  description: { type: String },
  icon: { type: String },
  color: { type: String },
  order: { type: Number, default: 0 },
  is_active: { type: Boolean, default: true },
  createDate: { type: Object },
  updateDate: { type: Object },
});

module.exports =
  mongoose.models.Education || mongoose.model("Education", educationSchema);