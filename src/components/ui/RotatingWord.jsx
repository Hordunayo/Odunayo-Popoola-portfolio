import { useState, useEffect } from "react";

function RotatingWord() {
  const words = ["Full-Stack", "WordPress", "Frontend", "React"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block text-primary transition-all duration-300"
      style={{
        opacity: fade ? 1 : 0,
        transform: fade ? "translateY(0)" : "translateY(10px)",
      }}
    >
      I am {words[index]}
    </span>
  );
}

export default RotatingWord;
