import React from 'react';
import tcs from '../assets/tcs.png';
import dce from '../assets/dce.png';

const Experience = () => {
    return (
        <>
            <div className="experience overlay-projects">
                <div className="empty-cont"></div>
                <div className="projects">

                    <h1 className="title-pro">Experience</h1>
                    <p className="text-pro">Till now I have worked through some Internships , here's some overview</p>

                    <div className="full-card">
                        <div className="flex-div">
                            <img src={tcs} alt="" className="logo-exp" />
                            <div className="line"></div>
                            <div>
                                <p className="full-card-title">TCS</p>
                                <p className="role">Software Development Intern</p>
                                <p className="role">Feb 2024 - July 2024</p>
                                <p className="card-text">
                                • Created UI prototype for cockpit system with ReactJS and Flutter <br />
                                • Developed mock backend services with Spring Boot and NodeJS to simulate data flow . <br />
                                • Applied DSA to enhance the efficiency of real-time data processing tasks to Cockpit System.
                            </p>
                            </div>
                            
                        </div>

                    </div>

                    <div className="full-card">
                        <div className="flex-div">
                            <img src={dce} alt="" className="dce logo-exp" />
                            <div className="line"></div>
                            <div>
                                <p className="full-card-title">Dce Refrigeration PVT LTD</p>
                                <p className="role">Software Development Intern</p>
                                <p className="role">Jan 2023 - April 2024</p>
                                <p className="card-text">
                                    • Developed and launched a professional, globally recognized website for the company . <br />
                                    • Implemented a CMS for employees to easily edit and update website and deployed it using Plesk . <br />
                                    • Increased SEO performance and Improved Company Sales . Website live at www.dceref.com.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="empty-cont"></div>
            </div>
        </>
    )
}

export default Experience;