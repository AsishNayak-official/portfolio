// components/Cursor.tsx
"use client"; // This component uses hooks and browser APIs, so it must be a client component.

import { useEffect, useRef } from "react";
import gsap from "gsap";



const Cursor = () => {
  // Add types for the refs to point to HTMLDivElement or null
  const cursor = useRef<HTMLDivElement | null>(null);
  const follower = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cursor.current && follower.current) {
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      // Type the event as a MouseEvent
      const moveCircle = (e: MouseEvent) => {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none",
        });
        gsap.to(follower.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "none",
        });
      };

      const hover = () => {
        gsap.to(cursor.current, {
          scale: 0.5,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 3,
          duration: 0.3,
        });
      };

      const unHover = () => {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 1,
          duration: 0.3,
        });
      };

      document.addEventListener("mousemove", moveCircle);

      const links = document.querySelectorAll(".link");
      links.forEach((el) => {
        el.addEventListener("mouseenter", hover);
        el.addEventListener("mouseleave", unHover);
      });

      // Cleanup function
      return () => {
        document.removeEventListener("mousemove", moveCircle);
        links.forEach((el) => {
          el.removeEventListener("mouseenter", hover);
          el.removeEventListener("mouseleave", unHover);
        });
      };
    }
  }, []); // Removed refs from dependency array as they are stable

  return (
    <>
      <div
        ref={cursor}
        className="bg-white rounded-full mix-blend-difference fixed w-4 h-4 select-none pointer-events-none z-50 hidden"
      />
      <div
        ref={follower}
        className="bg-white/[0.02] border border-white/[0.2] rounded-full fixed -top-4 -left-4 w-10 h-10 select-none pointer-events-none z-50 hidden"
      />
    </>
  );
};

export default Cursor;