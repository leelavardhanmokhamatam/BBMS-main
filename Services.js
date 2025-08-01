import React, { useEffect, useState } from "react";
import helpImage from "../assets/images/help.png";
import axios from "axios";

const Services = () => {
  const [serviceList, setServiceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}services`)
      .then((resp) => {
        setServiceList(resp.data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load services.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading services...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;

  return (
    <div className="service-container">
      <div className="text-center">
        <h2 className="service-title">Our Services</h2>
      </div>
      <div className="row">
        {serviceList.length === 0 ? (
          <div className="col-12 text-center">
            <h5>No Services Found</h5>
          </div>
        ) : (
          serviceList.map((ele, index) => (
            <div className="col-sm-3 text-center service-card" key={index}>
              <div className="card w-80" style={{ margin: "10px" }}>
                <div className="text-center">
                  <img
                    className="card-img-top"
                    src={ele.image || helpImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = helpImage;
                    }}
                    style={{ height: "100px", width: "100px", objectFit: "cover" }}
                    alt={ele.name || "Service"}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
