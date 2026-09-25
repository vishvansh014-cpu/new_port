import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SmoothCursor() {
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if the device has a primary fine pointer (mouse/trackpad, not touch)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    
    const checkPointer = () => setIsPointerDevice(mediaQuery.matches);
    checkPointer(); // Initial check

    // Listen for device changes (e.g. docking a laptop)
    mediaQuery.addEventListener("change", checkPointer);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      mediaQuery.removeEventListener("change", checkPointer);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  // Completely unmount on smartphones/touch devices
  if (!isPointerDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="drop-shadow-md"
        fill="currentColor"
      >
        <path
          d="M3 3l7 18 3-7 7-3L3 3z"
          fill="#000000"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}