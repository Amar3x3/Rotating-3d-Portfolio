import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [useRealProgress, setUseRealProgress] = useState(false);

  // Step 1: Artificially increase progress to 40%
  useEffect(() => {
    let animationFrame;
    const animateProgress = () => {
      if (!useRealProgress && displayProgress < 40) {
        setDisplayProgress((prev) => Math.min(prev + 0.2, 40)); // Slow increment to 40%
      } else if (useRealProgress) {
        // Step 2: Switch to actual loading progress
        const adjustedProgress = progress >= 90
          ? 90 + (progress - 90) / 4 // Slow down between 90-100%
          : progress;
        setDisplayProgress(adjustedProgress);
      }
      animationFrame = requestAnimationFrame(animateProgress);
    };

    animateProgress();

    const timer = setTimeout(() => {
      setUseRealProgress(true);
    }, 3000); // Switch to actual progress after 3 seconds

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
    };
  }, [progress, useRealProgress]);

  return (
    <Html center>
      <div className="loading-screen">
        <div className="loader">
          <p>Loading...</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${displayProgress.toFixed(0)}%` }}
            ></div>
          </div>
          <p>{displayProgress.toFixed(0)}%</p>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
