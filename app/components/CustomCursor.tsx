"use client";
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isMobile, setIsMobile] = useState(false);

    // Using springs for smoother, simpler movement
    const mouseX = useSpring(0, { stiffness: 1000, damping: 50 });
    const mouseY = useSpring(0, { stiffness: 1000, damping: 50 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const mouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseEnter = () => setCursorVariant("hover");
        const handleMouseLeave = () => setCursorVariant("default");

        if (!isMobile) {
            window.addEventListener('mousemove', mouseMove);

            const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive-element');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });

            return () => {
                window.removeEventListener('mousemove', mouseMove);
                interactiveElements.forEach(el => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
                window.removeEventListener('resize', checkMobile);
            };
        }

        return () => window.removeEventListener('resize', checkMobile);
    }, [isMobile, mouseX, mouseY]);

    if (isMobile) return null;

    const variants = {
        default: {
            height: 12,
            width: 12,
            backgroundColor: "var(--accent-primary)",
            mixBlendMode: "normal" as const,
        },
        hover: {
            height: 48,
            width: 48,
            backgroundColor: "var(--accent-primary)",
            mixBlendMode: "difference" as const,
            opacity: 0.4
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
            variants={variants}
            animate={cursorVariant}
            style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        />
    );
};

export default CustomCursor;
