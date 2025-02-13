"use client";
import React, { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Text = ({ screen, setCurrentImg, i }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setItemVisible = (e) => {
    if (e[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className={`screen-text ${isVisible ? "text-visible" : ""}`} ref={ref}>
      <div className="screen-heading" data-aos="fade-up">
        {screen.heading}
      </div>
      {/* <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              className="mobile-screen-img slide-in-right "
              key={screen.mobile_img}
            />
          </div>
        </div>
      </div> */}
      <div className="screen-description" data-aos="fade-up">
        {screen.description}
      </div>
    </div>
  );
};

export default Text;
