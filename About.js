import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bloodbank from "../assets/images/bloodbank.jpg"

const About = () => {
    return (
        <>
            <Header />
            <div className="text-center mt-4 mb-4">
                <h3> About Our Blood Bank</h3>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-6">
                        <p><b>ABOUT LIFE CARE BLOOD BANK:</b></p>
                        <p>
                            LifeCare Blood Bank is a licensed, non-profit organization dedicated to saving lives by providing safe, ethical, and timely access to blood and its components. Based in Vijayawada, we serve hospitals, emergency cases, and chronically ill patients across the city and nearby regions. Our mission is simple yet critical — to ensure that no life is lost due to the lack of available blood.

                            We operate under the regulatory guidelines of the Drug Control Authority of India and are affiliated with the National Blood Transfusion Council. These standards ensure that all our practices — from donor selection to blood processing and storage — meet the highest quality and safety benchmarks. LifeCare believes in transparency, ethics, and service, making us a trusted name among both donors and healthcare institutions.

                            Our infrastructure is equipped with advanced testing and storage technology. Every unit of blood collected is thoroughly screened for infections such as HIV, Hepatitis B and C, Syphilis, and Malaria. We follow a strict single-use policy with sterile donation kits, ensuring zero risk of contamination. Blood components like Red Blood Cells (RBCs), Platelets, Plasma, and Cryoprecipitate are processed and stored under optimal conditions by trained medical professionals.
                        </p>
                    </div>
                    <div className="col-sm-6 text-center pt-4">
                        <img src={bloodbank} className="about-image" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-center pt-4">
                        <img src={bloodbank} className="about-image" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <p><b>WHY DONATE BLOOD</b></p>
                        <p>One unit of blood can save up to three lives. Blood cannot be manufactured — it must come from generous donors like you.
                            Every two seconds, someone in India needs blood due to accidents, surgeries, or medical conditions.
                            Regular donors help maintain a steady supply for emergencies.
                            Your 15 minutes can mean a lifetime for someone else.
                            Be the reason someone gets a second chance at life.</p>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-6">
                        <p><b>AFTER DONATION CARE</b></p>
                        <p>After donating, relax for 10–15 minutes and enjoy light refreshments provided at the center.
                            Avoid heavy lifting or intense exercise for the next 24 hours.
                            Drink plenty of fluids and have a healthy meal soon after.
                            Keep the bandage on for a few hours and inform us if you feel dizzy or unwell.
                            Your well-being matters — take care and return only when you’re fully ready again.</p>

                    </div>
                    <div className="col-sm-6 text-center pt-4">
                        <img src={bloodbank} className="about-image" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-center pt-4">
                        <img src={bloodbank} className="about-image" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <p><b>PRIVACY AND CONTENT</b></p>
                        <p>All donor information is collected with your consent and stored securely.
                            It will be used only for medical records, follow-ups, or to reach you during emergency blood needs.
                            We strictly do not share or sell data to third parties.
                            By donating, you agree to be contacted about future donation opportunities.
                            Your trust is important, and we are committed to keeping your data confidential and protected at all times.

                        </p>
                    </div>
                </div>
                <div className="row" mb-4>

                    <div className="col-sm-12">
                        <p><b>T&C</b></p>
                        <p>Blood donation is 100% voluntary and unpaid.
                            We reserve the right to deny or defer donors based on medical screening results.
                            Only single-use, sterile kits are used to ensure hygiene.
                            In case of post-donation issues, please contact us immediately.
                            We prioritize donor health, and you can rest briefly after donation with refreshments provided.
                            Respect the donation guidelines to help ensure a safe and positive experience for all.

                        </p>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    );
}

export default About;