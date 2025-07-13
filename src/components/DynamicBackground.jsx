import { useEffect, useState } from "react";

const DynamicBackground = ({ children }) => {
  const [bgColor, setBgColor] = useState("rgb(0, 0, 30)"); // azul inicial

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      const percent = scrollTop / maxScroll;
      const blue = Math.round(30 * (1 - percent));
      const color = `rgb(0, 0, ${blue})`;

      setBgColor(color);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        transition: "background 0.2s ease",
        minHeight: "100vh",
      }}
      className="flex flex-col md:flex-row  w-full"
    >
      {children}
    </div>
  );
};

export default DynamicBackground;
