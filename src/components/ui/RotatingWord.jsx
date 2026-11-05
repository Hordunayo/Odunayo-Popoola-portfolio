import { useState, useEffect } from "react";

function RotatingWord() {
  const words = ["Modern Websites", "WordPress Sites", "Web Applications"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let speed = isDeleting ? 50 : 100; // deleting is faster

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // TYPING
        const nextText = currentWord.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === currentWord) {
          // Pause 1500ms when word is complete
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // ERASING
        const nextText = currentWord.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-primary">
      {text}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
}
export default RotatingWord;
