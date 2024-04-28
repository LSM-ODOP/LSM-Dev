const ContactUs = require("../models/contactus");

const contactus = async (req, res) => {
//   console.log(req.body);
  try {
    // throw new Error("Something went wrong");
    const record = await ContactUs.create(req.body);
    res.json({ message: "Contact form submitted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

exports.contactus = contactus;
