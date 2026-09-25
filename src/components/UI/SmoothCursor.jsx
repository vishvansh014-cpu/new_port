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
    // EDITED LINE: Dual check for desktop hardware (fine pointer AND screen width >= 768px)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    
    const checkDevice = () => {
      const isDesktopWidth = window.innerWidth >= 768;
      // EDITED LINE: Returns true if precision pointer is detected or viewport is desktop width
      setIsPointerDevice(mediaQuery.matches || isDesktopWidth);
    };

    checkDevice(); // Initial check on mount

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // EDITED LINE: Attach window mousemove event listener directly
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("resize", checkDevice);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", checkDevice);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkDevice);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", checkDevice);
      }
    };
  }, [cursorX, cursorY]);

  // EDITED LINE: Return null on smartphones and touch devices (when width < 768px or no fine pointer)
  if (!isPointerDevice) return null;

  return (
    <motion.div
      // EDITED LINE: Fixed styling to keep cursor pointer layer visible above all sections
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
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
          stroke="#f8f9fa"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}