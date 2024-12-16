import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Html, Loader } from "@react-three/drei";
import Book from "./Book";
import CartoonAirPlane from "./CartoonAirPlane";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Load from "./Loader";
import dragImg from '../assets/drag_animation.svg'


// Starfield Component
export const StarField = () => {
  const pointsRef = useRef();

  const stars = React.useMemo(() => {
    const starPositions = new Float32Array(3000 * 4);
    for (let i = 0; i < starPositions.length; i++) {
      starPositions[i] = (Math.random() - 0.5) * 10;
    }
    return starPositions;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <Points ref={pointsRef} positions={stars} stride={3}>
      <PointMaterial size={0.018} sizeAttenuation depthWrite={false} color="black" />
    </Points>
  );
};

const Scene = ({ orbitControlsRef }) => {
  const airplaneRef = useRef();
  const { camera } = useThree();
  const [currentSection, setCurrentSection] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  const scaleModel = () => {
    let s1 = 0.07; let s2 = 0.07; let s3 = 0.07;
    if (isMobile) {
      s1 = 0.05, s2 = 0.05, s3 = 0.05;
    }
    return { s1, s2, s3 };
  };
  const { s1, s2, s3 } = scaleModel();
  // Section boundaries for different sections
  const sectionBoundaries = {
    intro: [0, Math.PI / 4],
    projects: [Math.PI / 4, Math.PI / 2],
    experience: [2.1, 3.3],
    achievements: [4, 5],
    contact: [5.2, 5.9],
  };

  const normalizeAngle = (angle) => {
    let normalizedAngle = angle % (2 * Math.PI);
    if (normalizedAngle < 0) {
      normalizedAngle += 2 * Math.PI;
    }
    return normalizedAngle;
  };

  const airplanePositions = {
    Intro: [0, 0.8, 0],
    Projects: [1.5, 2, -2],
    Experience: [-1.5, 2, -2],
    Achievements: [2, 0.5, 2],
    Contact: [-2, 1.5, 2],
  };

  useEffect(() => {
    // GSAP animation to rotate the airplane in circles
    if (airplaneRef.current) {
      const targetPosition = airplanePositions[currentSection] || [0, 1.5, 0];  // Default position if section is not found

      gsap.to(airplaneRef.current.position, {
        x: targetPosition[0],
        y: targetPosition[1],
        z: targetPosition[2],
        duration: 2, // Adjust the speed of the movement
        ease: "power2.out", // Smooth easing for the movement
      });
    }
  }, [currentSection]);

  useFrame(() => {
    if (orbitControlsRef.current) {
      const azimuthalAngle = normalizeAngle(orbitControlsRef.current.getAzimuthalAngle());
      // console.log(azimuthalAngle);

      if (azimuthalAngle >= sectionBoundaries.intro[0] && azimuthalAngle < sectionBoundaries.intro[1]) {
        setCurrentSection("Intro");
      } else if (azimuthalAngle >= sectionBoundaries.projects[0] && azimuthalAngle < sectionBoundaries.projects[1]) {
        setCurrentSection("Projects");
      } else if (azimuthalAngle >= sectionBoundaries.experience[0] && azimuthalAngle < sectionBoundaries.experience[1]) {
        setCurrentSection("Experience");
      } else if (azimuthalAngle >= sectionBoundaries.achievements[0] && azimuthalAngle < sectionBoundaries.achievements[1]) {
        setCurrentSection("Achievements");
      } else if (azimuthalAngle >= sectionBoundaries.contact[0] && azimuthalAngle < sectionBoundaries.contact[1]) {
        setCurrentSection("Contact");
      } else {
        setCurrentSection("Drag");
      }
    }
  });
  window.onload = function () {
    const popup = document.querySelector('popup');
    popup.classList.add('show');
    setTimeout(() => {
      popup.style.animation = 'slideOut 2s forwards';
    }, 17000);
  };


  return (
    <>
      {/* Book Model */}
      <Book position={[0, -0.4, 0]} scale={[s1, s2, s3]} />

      {/* Airplane Model, rotates around the book */}
      <CartoonAirPlane ref={airplaneRef} position={[-4, 3.7, 1]} scale={[0.02, 0.02, 0.02]} rotation={[0, 3, 0]} />
      {/* Display sections as text based on camera rotation */}
      {currentSection === "Intro" && (
        <Html position={[0, 1.9, 0]} center>
          <div className="container">
            <p className="text share-tech">Hi, I'm <span className="bold">Amar Gaikwad </span> </p>
            <p className="text mg-up-1rem share-tech">A Software Engineer who Believes in Interactive Web Designs</p>
          </div>
        </Html>
      )}
      {currentSection === "Projects" && (
        <Html position={[0, 1.7, 0]} center>
          <div className="container">
            <p className="text big-txt share-tech">Projects</p>
            <p className="text mg-up-1rem share-tech" >Check out my awesome projects!</p>
            <div onClick={() => handleClick('projects')} className="btn">
              Learn More
            </div>
          </div>
          {/* <Panel header={"Projects"} text={"Check out my awesome projects!"} route={"projects"}/> */}

        </Html>
      )}
      {currentSection === "Experience" && (
        <Html position={[0, 1.7, 0]} center>
          <div className="container">
            <p className="text big-txt share-tech">Experience</p>
            <p className="text mg-up-1rem share-tech" share-tech>Here's a summary of my experience.</p>
            <div onClick={() => handleClick('exp')} className="btn">
              Learn More
            </div>
          </div>
        </Html>
      )}
      {currentSection === "Achievements" && (
        <Html position={[0, 1.7, 0]} center>
          <div className="container">
            <p className="text big-txt share-tech">Achievements</p>
            <p className="text mg-up-1rem share-tech">Look at my amazing achievements!</p>
            <div onClick={() => handleClick('achievements')} className="btn">
              Learn More
            </div>
          </div>

        </Html>
      )}
      {currentSection === "Contact" && (
        <Html position={[0, 1.7, 0]} center>
          <div className="container">
            <p className="text big-txt share-tech">Contact Me</p>
            <p className="text mg-up-1rem share-tech">amar3152002@gmail.com</p>
          </div>

        </Html>
      )}




    </>
  );
};

// Home Component (Root of the 3D scene)
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [dragThresholdMet, setDragThresholdMet] = useState(false); 
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();
  const orbitControlsRef = useRef();

  const handlePointerDown = (event) => {
    setIsDragging(true);
    setDragStart(event.clientX); // Track drag start position
  };

  const handlePointerMove = (event) => {
    if (isDragging && dragStart !== null) {
      const dragDistance = event.clientX - dragStart;
      if (dragDistance > 100) { 
        setDragThresholdMet(true); // Disable animation after dragging threshold
      }
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setDragStart(null); 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 17000); // Display for 17 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <>

      <div
        className={`canvas-container ${isDragging ? "grabbing" : "grab"}`}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
      >


        <Canvas

          camera={{ position: [0, 2, 5], near: 0.1, far: 100000 }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          {/* Starfield Background */}
          <StarField />

          <Suspense fallback={<Load />}>
            {/* Lighting Setup */}
            <directionalLight
              position={[5, 5, 5]}
              intensity={4}
              castShadow

            />
            <ambientLight intensity={0.4} />
            {/* <pointLight position={[0, 5, 5]} intensity={150} distance={50} decay={2} castShadow /> */}
            <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={0.4} position={[0, 50, 0]} />


            <Scene orbitControlsRef={orbitControlsRef} />

          </Suspense>


          {/* Orbit Controls for user interaction */}
          <OrbitControls ref={orbitControlsRef} enablePan={false} enableZoom={false} enableRotate={true} enableDamping={true} />
        </Canvas>
      </div>


      {showPopup && (
        <div>
          <div className="popup">
            <img src={dragImg} alt="" />
          <p>Drag to Explore
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </p>
          </div>
          
        </div>
      )}

    </>
  );
};

export default Home;
