import React, { useEffect, useRef } from "react";
import "./textScramble.css";

function TextScramble() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    const pools = {
      symbols: "!<>-_\\/[]{}—=+*^?#",
      binary: "01",
      alpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      blocks: "░▒▓█▖▘▙▚",
    };

    const visual = root.querySelector(".em-scramble__visual");
    const text = root.dataset.text || "";
    const chars = Array.from(text);

    const movable = chars
      .map((char, index) => (/\s/u.test(char) ? -1 : index))
      .filter((i) => i >= 0);

    const positions = new Map(movable.map((i, p) => [i, p]));
    const totalPositions = Math.max(1, movable.length - 1);

    const duration = Number(root.dataset.duration);
    const tick = Number(root.dataset.tick);
    const total = Math.max(2, Math.ceil((duration * 1000) / tick));

    const pool = pools[root.dataset.charset];

    let frame = 0;
    let timer;

    const render = (progress) =>
      chars
        .map((char, index) => {
          if (/\s/u.test(char)) return char;

          const pos = positions.get(index) || 0;
          const threshold = pos / totalPositions;

          return progress >= threshold
            ? char
            : pool[(frame * 7 + pos * 13) % pool.length];
        })
        .join("");

    const step = () => {
      visual.textContent = render(Math.min(1, frame / total));
      frame++;

      if (frame <= total) {
        timer = setTimeout(step, tick);
      } else {
        visual.textContent = text;
      }
    };

    step();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={rootRef}
      className="em-scramble rounded-3xl text-5xl "
      data-text={`Hi I'm VANSH VISHWAKARMA`}
      data-charset="symbols"
      data-duration="1.8"
      data-tick="100"
    >
      <h2 className="em-scramble__headline">
        <span className="em-scramble__visual" />
      </h2>
    </section>
  );
}

export default TextScramble;