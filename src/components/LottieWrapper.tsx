"use client"
import React from 'react'
import animationData from '../../public/loading.json';
import Lottie from 'lottie-react';

const LottieWrapper = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{
          width: 200,
          height: 200,
        }}
      />{" "}
    </div>
  );
};

export default LottieWrapper;
