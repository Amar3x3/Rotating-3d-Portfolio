import React from "react";
import comp from '../assets/comp.png';
import mob from '../assets/mob.png';
import webPng from '../assets/web.png';
import trade from '../assets/trade.png';
import doc from '../assets/doc.png';

const Projects = () => {
    return <>
        <div className="overlay-projects">
            <div className="empty-cont"></div>
            <div className='projects'>
                <h1 className="title-pro">Projects</h1>
                <p className="text-pro">
                    A Journey Through My Passion Projects.
                    Over the years, I've had the privilege of working on many projects, but a few truly stand out as personal favorites. Each of these endeavors holds a special place in my heart. Many of them are open-source, and I invite you to dive into the code! If you find something that inspires you, I would love for you to share your thoughts and suggestions for improvement. Your contributions and insights are always welcome and appreciated!
                </p>
                <div className="cards">
                <div className='card text'>
                        <img src={comp} alt="" />
                        <p className="card-title">Dynamic Rule Engine</p>
                        <p className="card-text">
                        Created an application using Abstract Syntax Trees (AST) for dynamic rule creation and evaluation.
<br />Mimicked SQL compiler parsing and evaluation to dynamically process user-defined rules and custom data.

                        </p>
                       <div className="flex-2">
                       <a href='https://ruleenginefrontend.netlify.app/' target="_blank" className="live-btn">live</a>
                       <a href="https://github.com/Amar3x3/RuleEngineApp" className="live-btn git-btn">Git</a>
                       </div>
                    </div>
                    <div className='card text'>
                        <img src={comp} alt="" />
                        <p className="card-title">ChitranCode</p>
                        <p className="card-text">
                            Developed a Desktop Application which provides Code Summary and Code Visualization using D3.js
                            to create tree like structure for easy code understanding and Code Documentation
                        </p>
                       <div className="flex-2">
                       <a href='https://youtu.be/aEf8j-IIa68?si=lqyBhBwq84g-s_ip' target="_blank" className="live-btn">live</a>
                       <a href="https://github.com/Amar3x3/ChitranCodeForked" className="live-btn git-btn">Git</a>
                       </div>
                    </div>
                    <div className='card text'>
                        <img src={mob} alt="" />
                        <p className="card-title"> VedaVision</p>
                        <p className="card-text">
                            Built an App to Identify Ayurvedic Plants.
                            Built features to reduce background noise , offer online and offline modes, maintain user history, search panel and Chatbot for plant identification.
                        </p>
                       <div className="flex-2">
                       <a href='https://drive.google.com/file/d/1I4Ig5t23nGwfT282vyOEhBuppXdqSGjB/view' target="_blank" className="live-btn">live</a>
                       <a href="https://github.com/Amar3x3/VedaVision" className="live-btn git-btn">Git</a>
                       </div>
                    </div>
                    <div className='card text'>
                        <img src={webPng} alt="" />
                        <p className="card-title">Dce CMS Website </p>
                        <p className="card-text">
                            Developed and launched a professional, globally recognized website for the company .
                            Implemented a CMS for employees to easily edit and update website and deployed it using Plesk 
                        </p>
                        <div className="flex-2">
                        <a href='https://www.dceref.com/' target="_blank" className="live-btn">live</a>
                        <a href="https://github.com/Amar3x3/frontend_product" className="live-btn git-btn">Git</a>
                        </div>
                    </div>
                    <div className='card text'>
                        <img src={trade} alt="" />
                        <p className="card-title">Trading Website</p>
                        <p className="card-text">
                            Developed a Trading website integrating CoinGecko API , enabling users to search for
                            cryptocurrencies, access statistical information with seamless UI experience.
                        </p>
                        <div className="flex-2">
                        <a href='https://tradingwebsite0.netlify.app/' target="_blank" className="live-btn">live</a>
                        <a href="https://github.com/Amar3x3/" className="live-btn git-btn">Git</a>
                        </div>
                    </div>
                    <div className='card text'>
                        <img src={doc} alt="" />
                        <p className="card-title">Dental Website </p>
                        <p className="card-text"></p>
                        <div className="flex-2">
                        <a href='https://amar3x3.github.io/sampleclinic/' target="_blank" className="live-btn">live</a>
                        <a href="https://github.com/Amar3x3/sampleclinic" className="live-btn git-btn">Git</a>
                        </div>
                    </div>
                    <div className='card text'>
                        <img src={webPng} alt="" />
                        <p className="card-title">Trailers Website </p>
                        <p className="card-text">
                        Developed a Website for browsing and searching movie trailers, genre-based displays, movie lists
                        using TMDB API for dynamic content and the YouTube API for fetching trailers.
                        </p>
                        <div className="flex-2">
                        <a href='https://amar3x3.github.io/Trailers-react/' target="_blank" className="live-btn">live</a>
                        <a href="https://github.com/Amar3x3/Trailers-react" className="live-btn git-btn">Git</a>
                        </div>
                    </div>
                    <div className='card text'>
                        <img src={webPng} alt="" />
                        <p className="card-title">College ACM club website</p>

                        <div className="flex-2">
                        <a href='https://pvgcoet.acm.org/' target="_blank" className="live-btn">live</a>
                        <a href="https://github.com/Amar3x3/acmwebsiteOfficial" className="live-btn git-btn">Git</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="empty-cont"></div>
        </div>
    </>
}

export default Projects;