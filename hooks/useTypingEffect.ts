import { DELETING_SPEED, PAUSE_DURATION, TYPING_SPEED } from "@/utility/constants";
import { useEffect, useState } from "react";

const useTypingEffect = (strings: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  // Removed typingDelay state as it wasn't strictly necessary for the logic,
  // focusing solely on core state (index, text, phase).

  const currentString = strings[currentIndex % strings.length];

  // The core logic of the typing loop
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      // --- Deleting Phase ---
      const delay = DELETING_SPEED;

      if (currentText.length > 0) {
        // Remove the last character
        timeout = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentText.length - 1));
        }, delay);
      } else {
        // Finished deleting, switch to the next string
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
      }

    } else {
      // --- Typing Phase ---
      const delay = TYPING_SPEED;

      if (currentText.length < currentString.length) {
        // Add the next character
        timeout = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        }, delay);
      } else {
        // Finished typing the string, pause, then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION); // Pause for a fixed duration
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, strings, currentString]);

  return { currentText };
};


export default useTypingEffect