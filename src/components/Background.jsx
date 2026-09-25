import React, { useEffect, useRef } from 'react';

const GRID_SIZE = 48; // Size of each grid square in px

export default function Background({ children }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let hoveredCell = null;
    let activeSquares = [];

    // Resize canvas to match full viewport dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Track mouse position relative to grid
    const handleMouseMove = (e) => {
      const col = Math.floor(e.clientX / GRID_SIZE);
      const row = Math.floor(e.clientY / GRID_SIZE);
      hoveredCell = { col, row };
    };

    const handleMouseLeave = () => {
      hoveredCell = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Periodically generate random ambient flashing squares
    const interval = setInterval(() => {
      const cols = Math.ceil(canvas.width / GRID_SIZE);
      const rows = Math.ceil(canvas.height / GRID_SIZE);

      const count = Math.floor(Math.random() * 2) + 1;
      for (let i = 0; i < count; i++) {
        activeSquares.push({
          col: Math.floor(Math.random() * cols),
          row: Math.floor(Math.random() * rows),
          opacity: Math.random() * 0.25 + 0.1,
          life: 1.0, // Initial life for fade-out
        });
      }
    }, 350);

    // Main Canvas Render Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / GRID_SIZE);
      const rows = Math.ceil(canvas.height / GRID_SIZE);

      // 1. Draw Mouse Hover Effect
      if (hoveredCell) {
        ctx.fillStyle = '#b5f442';
        ctx.globalAlpha = 0.35; // Brightness when cursor hovers
        ctx.fillRect(
          hoveredCell.col * GRID_SIZE + 1,
          hoveredCell.row * GRID_SIZE + 1,
          GRID_SIZE - 1,
          GRID_SIZE - 1
        );
      }

      // 2. Draw Random Flashing Squares
      activeSquares.forEach((sq) => {
        ctx.fillStyle = '#b5f442';
        ctx.globalAlpha = sq.opacity * sq.life;
        ctx.fillRect(
          sq.col * GRID_SIZE + 1,
          sq.row * GRID_SIZE + 1,
          GRID_SIZE - 1,
          GRID_SIZE - 1
        );

        // Slowly decrease life for smooth fade
        sq.life -= 0.012;
      });

      // Filter out faded squares
      activeSquares = activeSquares.filter((sq) => sq.life > 0);

      // 3. Draw Grid Lines
      ctx.globalAlpha = 0.12;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += GRID_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += GRID_SIZE) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#080808] text-white font-sans">
      {/* Canvas Fixed Background Layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Radial Depth Gradient */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(181, 244, 66, 0.03) 0%, rgba(8, 8, 8, 0.75) 75%)',
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
} 