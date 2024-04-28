const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema({
  name: String,
  contactDetails: String,
  state: String,
  district: String,
  address: String,
  products: String,
  registrationNumber: String,
  salesType: String,
});

const Contactus = mongoose.model("Contactus", contactusSchema);
module.exports = Contactus;
