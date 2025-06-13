"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

const HamburgerToggle = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const top = useRef(null);
  const middle = useRef(null);
  const bottom = useRef(null);

  useLayoutEffect(() => {
    // Optional: Reset initial state
    gsap.set([top.current, middle.current, bottom.current], {
      clearProps: "all",
    });
  }, []);

  const handleToggle = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.inOut" },
    });

    if (!isOpen) {
      tl.to(top.current, { rotate: 45, y: 8 })
        .to(middle.current, { opacity: 0 }, "<")
        .to(bottom.current, { rotate: -45, y: -8 }, "<");
    } else {
      tl.to(top.current, { rotate: 0, y: 0 })
        .to(middle.current, { opacity: 1 }, "<")
        .to(bottom.current, { rotate: 0, y: 0 }, "<");
    }

    setIsOpen(!isOpen);
    onClick?.();
  };

  return (
    <button
      onClick={handleToggle}
      className="flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-50"
      aria-label="Toggle Menu"
    >
      <div ref={top} className="w-8 h-[3px] bg-black rounded origin-center" />
      <div
        ref={middle}
        className="w-8 h-[3px] bg-black rounded origin-center"
      />
      <div
        ref={bottom}
        className="w-8 h-[3px] bg-black rounded origin-center"
      />
    </button>
  );
};

export default HamburgerToggle;
