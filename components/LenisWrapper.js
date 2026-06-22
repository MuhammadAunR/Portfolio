"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

const LenisWrapper = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;
