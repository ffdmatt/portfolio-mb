'use client';
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

type Props = {
    children: React.ReactNode;
};

const AnimatedSection: React.FC<Props> = ({children}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.25,
    });

    const animationStyle = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { mass: 1, tension: 120, friction: 14},
    });

    return (
        <animated.div style={animationStyle} ref={ref}>
            {children}
        </animated.div>
    )
}

export default AnimatedSection;