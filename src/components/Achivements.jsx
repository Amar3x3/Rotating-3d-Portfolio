import { Line } from "@react-three/drei";
import React from "react";
import Lines from "./WavyLines/AWaves";


const Achievements = () => {
    return <>
        <div className="achievements  overlay-projects">
            <Lines/>
            <div className="empty-cont"></div>
            <div className="empty-cont"></div>
            <div className="projects share-tech">
           

                <h1 className="title-pro">Achievements</h1>
               
                <p className="text-pro">A Showcase of significant accomplishments in competitive programming, professional development, and industry certifications, reflecting a journey of growth and excellence.</p>
               
                <div className="full-card">
                    <div className="flex-div">
                        <img src="https://res.cloudinary.com/dn07sxmaf/image/upload/v1733297732/3DPortfolio/sih_n26rwa.jpg" preload="auto" alt="" className="logo-exp" />
                        <div className="line"></div>
                        <div>
                            <p className="full-card-title">Smart India Hackathon Winner</p>
                            <p className="card-text">
                                • Built an App to Identify Ayurvedic Plants using Image Processing and Machine learning algorithms <br />
                                • Built features to reduce background noise , offer online and offline modes, and maintain user history <br />
                                • Designed User-friendly interface with a search panel, Chatbot for plant identification.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="full-card">
                    <div className="flex-div">
                        <img src="https://res.cloudinary.com/dn07sxmaf/image/upload/v1733297732/3DPortfolio/moe_tttjki.jpg" preload="auto" alt="" className="dce logo-exp" />
                        <div className="line"></div>
                        <div>
                            <p className="full-card-title">Innovation, Design and Entrepreneurship Bootcamp Finalists</p>
                            <p className="card-text">
                                • Completed a 5-day Innovation and Design Bootcamp by the Ministry of Education, India. <br />
                                •  Developed product prototypes and enhanced design thinking skills. <br />
                                •  Pitched innovative solutions to industry experts, focusing on market-ready strategies.

                            </p>
                        </div>

                    </div>

                </div>

                <div className="full-card">
                    <div className="flex-div">
                        <img src="https://res.cloudinary.com/dn07sxmaf/image/upload/v1733297732/3DPortfolio/mit_cvkzlr.png" alt="" preload="auto" className="dce logo-exp" />
                        <div className="line"></div>
                        <div>
                            <p className="full-card-title">Hack Metro MIT'23 Finalists</p>
                            <p className="card-text">
                                Developed test cases for video analytics system including: <br />
                                • Identification of passengers crossing platform edges <br />
                                • Implementation of passenger count threshold for ticketing lines <br />
                                • Integration of left object/baggage detection algorithms

                            </p>
                        </div>

                    </div>

                </div>

                <div className="full-card">
                    <div className="flex-div">
                        <img src="https://res.cloudinary.com/dn07sxmaf/image/upload/v1733297722/3DPortfolio/leetcode_tgwhbs.png" preload="auto" alt=""  className="dce logo-exp" />
                        <div className="line"></div>
                        <div>
                            <p className="full-card-title">Solved 400+ questions at Leetcode and Geeks for geeks</p>
                            <p className="card-text">
                            • Solved 450+ algorithmic challenges across topics like dynamic programming, graphs, trees, and tries. <br />
                            •  Enhanced problem-solving skills in data structures and algorithms, improving efficiency and optimization techniques. <br />
                            •  Gained proficiency in diverse approaches, including backtracking, greedy algorithms, and advanced recursion.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
            <div className="empty-cont"></div>
        </div>
    </>
}
export default Achievements;