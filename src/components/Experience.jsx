import React from 'react';


const Experience = () => {
    return (
        <>
            <div className="experience overlay-projects">
                <div className="empty-cont"></div>
                <div className="projects">

                    <h1 className="title-pro share-tech">Experience</h1>
                    <p className="text-pro share-tech">Till now I have worked through some Internships , here's some overview</p>

                    <div className="full-card">
                        <div className="flex-div">
                            <img src="https://res.cloudinary.com/dn07sxmaf/image/upload/v1733297732/3DPortfolio/tcs_rartx3.png" preload="auto" alt="" className="logo-exp" />
                            <div className="line"></div>
                            <div>
                                <p className="full-card-title share-tech">TCS</p>
                                <p className="role share-tech">Software Development Intern</p>
                                <p className="role share-tech">Feb 2024 - July 2024</p>
                                <p className="card-text share-tech" >
                                • Created UI prototype for cockpit system with ReactJS and Flutter <br />
                                • Developed mock backend services with Spring Boot and NodeJS to simulate data flow . <br />
                                • Applied DSA to enhance the efficiency of real-time data processing tasks to Cockpit System.
                            </p>
                            </div>
                            
                        </div>

                    </div>

                    <div className="full-card">
                        <div className="flex-div">
                            <img src="https://res.cloudinary.com/dn07sxmaf/image/upload/v1733297717/3DPortfolio/dce_rgqrwa.png" preload="auto" alt="" className="dce logo-exp" />
                            <div className="line"></div>
                            <div>
                                <p className="full-card-title share-tech">Dce Refrigeration PVT LTD</p>
                                <p className="role share-tech">Software Development Intern</p>
                                <p className="role share-tech">Jan 2023 - April 2024</p>
                                <p className="card-text share-tech">
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