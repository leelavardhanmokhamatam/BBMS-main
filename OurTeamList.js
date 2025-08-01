import React, { useEffect, useState } from "react";
import manImage from "../assets/images/man.png";
import axios from "axios";

const OurTeamList = () => {
    const [team, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}get-team`)
            .then((res) => {
                setTeams(res.data?.data || []);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load team.");
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center">Loading team...</p>;
    if (error) return <p className="text-center text-danger">{error}</p>;

    return (
        <div className="row" style={{ background: '#f4f4f4' }}>
            <div className="text-center">
                <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>Our Team</h2>
            </div>

            {team.length === 0 ? (
                <h5 className="text-center mt-4 mb-4">Teams not Found</h5>
            ) : (
                team.map((item, index) => (
                    <div className="col-sm-3" key={index}>
                        <div className="card" style={{ margin: "20px" }}>
                            <div className="text-center">
                                <img
                                    className="card-img-top"
                                    src={item.image || manImage}
                                    alt="Team member"
                                    style={{ height: '100px', width: '100px', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default OurTeamList;


