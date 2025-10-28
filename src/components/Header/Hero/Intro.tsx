"use client";
import { FC, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { MENULINKS, TYPED_STRINGS } from "@/utility/constants";
import { Button } from "@/components/ui/button";
import useTypingEffect from "../../../../hooks/useTypingEffect";
import Image from "next/image";
const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { currentText } = useTypingEffect(TYPED_STRINGS);

  const cursorVariants = {
    blink: {
      opacity: [0, 1, 1, 0], // Keyframes: Hidden, Visible, Visible, Hidden
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.75, 1], // Custom timing for the blink cycle
      },
    },
  };

  // Kept GSAP for the initial stagger reveal, as it's in your package.json
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .to(sectionRef.current, { opacity: 1, duration: 0.5 })
        .fromTo(
          ".staggered-reveal",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24 opacity-0"
    >
      <div className="flex flex-col pt-40 md:pt-0 select-none w-full md:w-3/5">
        <h5 className="text-indigo-600 font-jetbrains font-medium mb-4 staggered-reveal">
          Hi, my name is
        </h5>

        <h1 className="text-5xl md:text-6xl text-slate-100 font-jetbrains font-semibold staggered-reveal">
          <span className="relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:h-2 after:w-full after:bg-indigo-600">
            Asish
          </span>
          <span> Nayak</span>
        </h1>

        {/* --- Framer Motion Typing Animation (Replaces Typed.js) --- */}
        <motion.h2
          className="text-2xl md:text-3xl text-slate-400 mt-5 font-jetbrains staggered-reveal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentText}
          <motion.span
            className="inline-block w-1 bg-indigo-600 h-6 md:h-7 ml-1 align-middle"
            variants={cursorVariants}
            animate="blink"
          ></motion.span>
        </motion.h2>

        <div className="mt-8 staggered-reveal flex flex-row gap-x-5">
          <Image src="/assets/mail.svg" alt={"git"} width={22} height={22}></Image>
          <Image src="/assets/linkedin.svg" alt={"git"} width={22} height={22}></Image>
          <Image src="/assets/github.svg" alt={"git"} width={22} height={22}></Image>
          <Image src="/assets/instagram.svg" alt={"git"} width={22} height={22}></Image>
          <Image src="/assets/twitter.svg" alt={"git"} width={22} height={22}></Image>
        </div>

        <div className="mt-8 staggered-reveal">
          <Button
            size="lg"
            asChild
            className="cursor-none border-2 border-indigo-600  font-jetbrains"
          >
            <a href={`#${MENULINKS[4].ref}`}>Let&apos;s Talk</a>
          </Button>
        </div>
      </div>

      <div className="absolute invisible md:visible w-2/5 h-1/2 bottom-0 right-0 lg:right-12 z-0 overflow-hidden">
        <video
          className="w-full h-full object-bottom"
          autoPlay
          loop
          muted
          playsInline
          // Note: The video file 'anim.webm' must be accessible at the root level
          // or in the public directory relative to where the component is rendered.
        >
          <source src="/assets/developer.webm" type="video/webm" />
          <p>Your browser does not support the video tag.</p>
        </video>
      </div>
    </section>
  );
};

export default Intro;
