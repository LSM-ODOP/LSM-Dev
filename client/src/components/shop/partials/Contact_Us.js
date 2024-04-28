import React, { useState } from "react";
import "./ContactForm.css"; // Ensure this path is correct based on your project structure
import axios from "axios";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactDetails: "",
    state: "",
    district: "",
    address: "",
    products: "",
    registrationNumber: "",
    salesType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/contactus/submit`, formData)
      .then((res) => {
        setSubmitted(true);
      })
      .catch((err) => {
        alert(err.response.data.message || "An error occurred");
      });
  };

  if (submitted) {
    return (
      <div className="thank-you-message">
        <p>
          Thank you for your interest in joining our platform! Your submission
          has been received, and our team will review your information.
        </p>
        <p>
          We are excited to have you as a part of this initiative to promote
          locally made products. We will be in touch with you shortly to discuss
          the next steps.
        </p>
      </div>
    );
  }

  if (loading) {
    return <>Submitting</>;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Contact Details:
            <input
              type="text"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            District:
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Authentic Products you want to sell:
            <input
              type="text"
              name="products"
              value={formData.products}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Registration number (If any):
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Do you wish to sell your products as wholesale or retail:
            <select
              name="salesType"
              value={formData.salesType}
              onChange={handleChange}
            >
              <option value="retail">Retail</option>
              <option value="wholesale">Wholesale</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
