import React, { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Dynamic canvas props renderer based on screen size
const getCloudOptions = (iconSize) => ({
  containerProps: {
    className: "flex justify-center items-center w-full overflow-hidden max-w-full",
    style: {
      paddingTop: 10,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
});

// Helper function to render simple icons with responsive sizing
export const renderCustomIcon = (icon, iconSize = 42, theme = "dark") => {
  const bgHex = theme === "light" ? "#f3f4f6" : "#080808";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: iconSize,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs = [] }) {
  const [data, setData] = useState(null);
  const [iconSize, setIconSize] = useState(42);

  // Responsive Icon Size Handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIconSize(28); // Mobile screen size
      } else if (window.innerWidth < 1024) {
        setIconSize(36); // Tablet screen size
      } else {
        setIconSize(42); // Desktop screen size
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch icon data based on provided simple-icon slugs
  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  // Map fetched icons to interactive cloud nodes with active dynamic iconSize
  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, iconSize, "dark")
    );
  }, [data, iconSize]);

  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto overflow-hidden px-2">
      <Cloud {...getCloudOptions(iconSize)}>
        {renderedIcons}
      </Cloud>
    </div>
  );
}