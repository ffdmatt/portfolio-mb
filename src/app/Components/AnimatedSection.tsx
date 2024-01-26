"use client";
import React, { Children, cloneElement } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useTrail } from "react-spring";

type Props = {
  children: React.ReactNode;
  staggerChildren?: boolean;
};

const AnimatedSection: React.FC<Props> = ({ children, staggerChildren = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const commonAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const trail = useTrail(Children.count(children), {
    ...commonAnimation,
    delay: staggerChildren ? 200 : 0, // will delay only if stagger is selected
  });

  return (
    <div ref={ref}>
      {staggerChildren ? (
        Children.map(children, (child, index) => {
          if (!child) return null;
          return (
            <animated.div style={trail[index]}>
              {cloneElement(child as React.ReactElement)}
            </animated.div>
          );
        })
      ) : (
        <animated.div style={commonAnimation}>{children}</animated.div>
      )}
    </div>
  );
};

export default AnimatedSection;
