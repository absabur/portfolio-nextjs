const { Schema, mongoose } = require("mongoose");

const skillSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  proficiency: Number,
  type: String,
  images: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  order: { type: Number, default: 0 },
  published: { type: Boolean, default: true },
  createDate: {
    type: Object,
  },
  updateDate: {
    type: Object,
  },
});

module.exports = mongoose.models.Skill || mongoose.model("Skill", skillSchema);
