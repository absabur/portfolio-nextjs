const { Schema, mongoose } = require("mongoose");

const certificationSchema = new Schema({
  logo: { type: String },
  title: { type: String, trim: true },
  issuer: { type: String, trim: true },
  date: { type: String },
  description: { type: String },
  url: { type: String },
  credentialId: { type: String },
  order: { type: Number, default: 0 },
  is_active: { type: Boolean, default: true },
  createDate: { type: Object },
  updateDate: { type: Object },
});

module.exports =
  mongoose.models.Certification || mongoose.model("Certification", certificationSchema);