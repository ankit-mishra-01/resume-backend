import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  description: { type: String },
});

const Enquiry = mongoose.model("Enquiry", EnquirySchema);

export default Enquiry;
