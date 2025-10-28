"use client"; 

import { useCallback, useEffect, useRef, ReactNode, JSX } from "react";
import { Howl } from "howler";

// Howler instance remains the same
const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

// Define the type for the component's props
interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps): JSX.Element => {
  // Add the specific element type (HTMLInputElement) to the ref
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Type the event as a React MouseEvent
  const handleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    // e.target needs to be asserted as an HTMLInputElement to access .checked
    if ((e.target as HTMLInputElement).checked) {
      multiPop.play();
    }
  }, []);

  // Type the event as a native KeyboardEvent
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && inputRef.current?.checked) {
      inputRef.current.checked = false;
    }
  }, []);

  useEffect(() => {
    // The types from useCallback will flow here
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <nav className="w-full fixed top-0 py-10 px-10 z-50 select-none bg-gradient-to-b from-black shadow-black transition-all duration-300">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          Home
        </a>
        <div className="outer-menu relative flex items-center gap-8 z-[1]">
          <input
            ref={inputRef}
            aria-labelledby="menu"
            aria-label="menu"
            className="checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0"
            type="checkbox"
            onClick={handleClick}
          />
          <div className="hamburger w-6 h-6 flex items-center justify-center cursor-none">
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center" />
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Header;