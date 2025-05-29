'use client';

import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  'Home',
  'My Journey',
  'Expertise',
  'Built Stuff',
  "Let's Connect",
  'Interactive Mode [Win+J]',
];

const Navbar = () => {
  return (
    <div className="flex flex-row w-2/3 justify-between py-4 text-lg font-medium">
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          className="relative cursor-pointer group"
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span>{item}</span>

          {/* Underline from right to left */}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 group-hover:w-full transition-all duration-500 origin-right"></span>
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar;
