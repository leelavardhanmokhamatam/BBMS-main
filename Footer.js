import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div className="row">
        {/* Useful Links */}
        <div className="col-sm-4">
          <h4 className="text-center">Usefull Links</h4>
          <ul className="text-center list-unstyled">
            <li><Link to="/">Link 1</Link></li>
            <li><Link to="/">Link 2</Link></li>
            <li><Link to="/">Link 3</Link></li>
            <li><Link to="/">Link 4</Link></li>
            <li><Link to="/">Link 5</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-sm-4">
          <p style={{ color: "red", fontWeight: "bold" }}>Contact Information:</p>
          <p>LifeLine Blood Donation Center
            Ground Floor, Sai Krishna Medical Complex
            Opposite Benz Circle, MG Road
            Labbipet, Vijayawada, Andhra Pradesh – 520007

            .</p>
          <p>Email : email@company.com</p>
          <p>Mobile Number : +91 9878987690</p>
        </div>

        {/* Subscribe */}
        <div className="col-sm-4">
          <p>For Updates About Our Associates.</p>
          <p>Details will be sended through mail:</p>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter Your Email" />
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-danger">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;