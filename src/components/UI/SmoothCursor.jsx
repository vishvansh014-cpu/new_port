import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SmoothCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      /* REMOVED mix-blend-difference from className */
      className="pointer-events-none fixed left-0 top-0 z-50"
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
        /* Replace text-white or fill with whatever solid color you want:
           - text-white for solid white
           - text-black for solid black
           - text-indigo-500, etc. */
        className=" drop-shadow-md"
        
        fill="currentColor"
      >
        <path
          d="M3 3l7 18 3-7 7-3L3 3z"
          fill="#000000"         /* Black inside fill */
          stroke="#ffffff"       /* White border outline */
          strokeWidth="1.5"      /* Outline thickness */
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}