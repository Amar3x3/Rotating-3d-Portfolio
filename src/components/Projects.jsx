import React from "react";
import DigitalRain from "./DigitalRain";

const Projects = () => {
    return (
        <div className="projects-container">
            {/* Digital Rain Background */}

            <DigitalRain />


            {/* Projects Content */}
            {/* <div className="empty-cont"></div> */}
            <div className="projects-content">
                <div className="projects">
                    <h1 className="title-pro share-tech">Projects</h1>
                    <p className="text-pro share-tech">
                        A Journey Through My Passion Projects. Over the years, I've had the privilege of working on many projects, but a few truly stand out as personal favorites. Each of these endeavors holds a special place in my heart. Many of them are open-source, and I invite you to dive into the code! If you find something that inspires you, I would love for you to share your thoughts and suggestions for improvement.
                    </p>
                    <div className="cards">
                        {projectsData.map((project, index) => (

                            <div key={index} className='card'>
                                <div className="screen">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="screen-content">
                                    <p className="card-title share-tech">{project.title}</p>
                                    <p className="card-text share-tech">{project.description}</p>
                                    <div className="button-group">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-btn">Live</a>
                                        <a href={project.git} target="_blank" rel="noopener noreferrer" className="live-btn git-btn">Git</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="empty-cont-transparent"></div>
                </div>
            </div>
        </div>
    );
};


// Sample data for projects (you can modify this as needed)
const projectsData = [
    {
        image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731674569/3DPortfolio/terminal_mj4qmw.gif",
        title: "Dynamic Rule Engine",
        description: "Created an application using Abstract Syntax Trees (AST) which mimicks SQL compiler working for dynamic rule creation and evaluation.",
        live: "https://ruleenginefrontend.netlify.app/",
        git: "https://github.com/Amar3x3/RuleEngineApp"
    },
    {
        image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731673765/3DPortfolio/comp_syijed.gif",
        title: "ChitranCode",
        description: "Developed a desktop application that provides code summary and visualization using D3.js.",
        live: "https://youtu.be/aEf8j-IIa68?si=lqyBhBwq84g-s_ip",
        git: "https://github.com/Amar3x3/ChitranCodeForked"
    },
    {
        image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731673765/3DPortfolio/comp_syijed.gif",
        title: "VedaVision",
        description: "Built an app to identify Ayurvedic plants with online/offline modes and a chatbot for plant identification.",
        live: "https://drive.google.com/file/d/1I4Ig5t23nGwfT282vyOEhBuppXdqSGjB/view",
        git: "https://github.com/Amar3x3/VedaVision"
    },
    {
        image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731676049/3DPortfolio/web_h2ahod.gif",
        title: "Dce CMS Website",
        description: "Developed and launched a CMS-driven website for company use, deployed using Plesk.",
        live: "https://www.dceref.com/",
        git: "https://github.com/Amar3x3/frontend_product"
    },
    {
        image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731676049/3DPortfolio/web_h2ahod.gif",
        title: "Trading Website",
        description: "Built a trading platform integrating CoinGecko API for cryptocurrency data.",
        live: "https://tradingwebsite0.netlify.app/",
        git: "https://github.com/Amar3x3/"
    },
    {
        image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731676049/3DPortfolio/web_h2ahod.gif",
        title: "Dental Website",
        description: "Developed a hospital clinic-themed website for a freelance client, with modern and visually appealing UI/UX design and animations",
        live: "https://amar3x3.github.io/sampleclinic/",
        git: "https://github.com/Amar3x3/sampleclinic"
    }
];

export default Projects;
