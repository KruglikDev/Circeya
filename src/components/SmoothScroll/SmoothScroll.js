import Card from "../Card/Card";

//Images
import slide1 from '../../images/slides/1.png';
import slide2 from '../../images/slides/2.png';
import slide3 from '../../images/slides/3.png';
import slide4 from '../../images/slides/4.png';
import slide5 from '../../images/slides/5.png';
import slide6 from '../../images/slides/6.png';
import slide7 from '../../images/slides/7.png';
import slide8 from '../../images/slides/8.png';

import React, {
    useRef,
    useState,
    useLayoutEffect,
    useCallback,
    useEffect
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue
} from "framer-motion";
import './SmoothScroll.scss';

import { useScrollPercentage } from "react-scroll-percentage";

const SmoothScroll = ({title}) => {
    const scrollRef = useRef(null);
    const ghostRef = useRef(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [viewportW, setViewportW] = useState(0);
    const images = [slide1, slide8, slide5, slide7, slide6, slide4, slide3, slide2];
    const scrollPerc = useMotionValue(0);

    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth);
    }, [scrollRef]);

    const onResize = useCallback((entries) => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => onResize(entries));
        resizeObserver.observe(ghostRef.current);
        return () => resizeObserver.disconnect();
    }, [onResize]);

    const { scrollYProgress } = useScroll();

    const [containerRef, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0.1
    });

    useEffect(() => {
        scrollPerc.set(percentage);
    }, [percentage]);

    const transform = useTransform(
        scrollPerc,
        [0, 1],
        [0, -scrollRange + viewportW]
    );
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(transform, physics);

    return (
        <section ref={containerRef}>
            <div className="scroll-container">
                {title}
                <motion.section
                    ref={scrollRef}
                    style={{ x: spring }}
                    className="thumbnails-container"
                >
                    <div className="thumbnails">
                        {images.map((img, i) => <div className="thumbnail" key={i}><Card image={img}/></div>)}
                    </div>
                </motion.section>
            </div>
            <div
                ref={ghostRef}
                style={{ height: scrollRange }}
                className="ghost"
            />
        </section>
    );
};

export default SmoothScroll;
