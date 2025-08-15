const { Schema, mongoose } = require("mongoose");

const projectSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  technologies: [String],
  liveUrl: String,
  frontendCodeUrl: String,
  backendCodeUrl: String,
  fullstackCodeUrl: String,
  user: String,
  password: String,
  youtubeLink: {
    type: String,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  createDate: {
    type: Object,
  },
  updateDate: {
    type: Object,
  },
});

module.exports =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
