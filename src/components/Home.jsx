import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Html } from "@react-three/drei";
import Book from "./Book";
import CartoonAirPlane from "./CartoonAirPlane";
import gsap from "gsap";

// Starfield Component
const StarField = () => {
  const pointsRef = useRef();

  const stars = React.useMemo(() => {
    const starPositions = new Float32Array(3000 * 3);
    for (let i = 0; i < starPositions.length; i++) {
      starPositions[i] = (Math.random() - 0.5) * 10;
    }
    return starPositions;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Points ref={pointsRef} positions={stars} stride={3}>
      <PointMaterial size={0.02} sizeAttenuation depthWrite={false} color="black" />
    </Points>
  );
};

// Scene Component (where we handle the camera and sections)
const Scene = ({orbitControlsRef}) => {
  const airplaneRef = useRef();
  const { camera } = useThree();
  const [currentSection, setCurrentSection] = useState(""); // Track the current section

  // Section boundaries for different sections
  const sectionBoundaries = {
    intro: [0, Math.PI / 4],
    projects: [Math.PI / 4, Math.PI / 2],
    experience: [5.5, 6],
    achievements: [4, 5],
    contact: [Math.PI, (5 * Math.PI) / 4],
  };

  const normalizeAngle = (angle) => {
    let normalizedAngle = angle % (2 * Math.PI);
    if (normalizedAngle < 0) {
      normalizedAngle += 2 * Math.PI; // Ensure the angle is positive
    }
    return normalizedAngle;
  };
  useEffect(() => {
    // GSAP animation to rotate the airplane in circles
    if (airplaneRef.current) {
      gsap.to(airplaneRef.current.rotation, {
        y: Math.PI * 2,
        duration: 10,  // Complete a full rotation every 10 seconds
        repeat: -1,    // Repeat indefinitely
        ease: "none",  // Smooth constant motion
      });

      gsap.to(airplaneRef.current.position, {
        x: (i) => Math.sin(i * Math.PI * 2) * 3, // Radius of the circular path
        z: (i) => Math.cos(i * Math.PI * 2) * 3,
        duration: 10,
        repeat: -1,
        ease: "none",
        modifiers: {
          x: (x, i) => Math.sin(i * Math.PI * 2) * 3, // Adjust position based on rotation
          z: (z, i) => Math.cos(i * Math.PI * 2) * 3
        },
      });
    }
  }, []);

  // UseFrame to update scene on each render
  useFrame(() => {
    if (orbitControlsRef.current) {
      const azimuthalAngle = normalizeAngle(orbitControlsRef.current.getAzimuthalAngle());

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
        setCurrentSection("");
      }
    }
  });

  return (
    <>
      {/* Book Model */}
      <Book position={[0, 0, 0]} scale={[0.07, 0.07, 0.07]} />

      {/* Airplane Model, rotates around the book */}
      <CartoonAirPlane ref={airplaneRef} position={[-2,2,10]} scale={[0.02, 0.02, 0.02]} rotation={[0, 3, 0]} />

      {/* Display sections as text based on camera rotation */}
      {currentSection === "Intro" && (
        <Html position={[0, 2, 0]} center>
          <h1>Intro Section</h1>
          <p>Welcome to my portfolio!</p>
        </Html>
      )}
      {currentSection === "Projects" && (
        <Html position={[0, 2, 0]} center>
          <h1>Projects</h1>
          <p>Check out my awesome projects!</p>
        </Html>
      )}
      {currentSection === "Experience" && (
        <Html position={[0, 2, 0]} center>
          <h1>Experience</h1>
          <p>Here's a summary of my experience.</p>
        </Html>
      )}
      {currentSection === "Achievements" && (
        <Html position={[0, 2, 0]} center>
          <h1>Achievements</h1>
          <p>Look at my amazing achievements!</p>
        </Html>
      )}
      {currentSection === "Contact" && (
        <Html position={[0, 2, 0]} center>
          <h1>Contact</h1>
          <p>Feel free to contact me at example@mail.com</p>
        </Html>
      )}
    </>
  );
};

// Home Component (Root of the 3D scene)
const Home = () => {
  const orbitControlsRef = useRef();
  const [isDragging, setIsDragging] = useState(false); // Track if the user is dragging

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };
  return (
    <>
     <div
      className={`canvas-container ${isDragging ? "grabbing" : "grab"}`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <Canvas
        
        camera={{ position: [0, 2, 5], near: 0.1, far: 100000 }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Starfield Background */}
        <StarField />

        <Suspense fallback={<>Loading...</>}>
          {/* Lighting Setup */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 5, 5]} intensity={150} distance={50} decay={2} castShadow />
          <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={0.6} position={[0, 50, 0]} />

          {/* Main Scene */}
          <Scene orbitControlsRef={orbitControlsRef}/>
        </Suspense>

        {/* Orbit Controls for user interaction */}
        <OrbitControls ref={orbitControlsRef} enablePan={false} enableZoom={false} enableRotate={true} />
      </Canvas>
      </div>
    </>
  );
};

export default Home;
