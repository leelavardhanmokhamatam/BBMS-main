import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bannerImage from "../assets/images/banner.jpg";

const DonorRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    bloodGroup: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/donors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Donor request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          bloodGroup: "",
          remarks: "",
        });
      } else {
        console.error("Server responded with error:", result);
        alert("Submission failed: " + result.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          background: "rgb(244, 244, 244)",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="text-danger">Become a Donor</h2>
          </div>
          <div className="card p-4">
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <img
                  src={bannerImage}
                  style={{ width: "100%" }}
                  alt="Donor Banner"
                />
              </div>

              <div className="col-sm-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      maxLength="10"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="bloodGroup" className="form-label">Blood Group:</label>
                    <select
                      className="form-control"
                      id="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="remarks" className="form-label">Remarks:</label>
                    <textarea
                      className="form-control"
                      id="remarks"
                      rows="3"
                      value={formData.remarks}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-danger">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonorRequest;
