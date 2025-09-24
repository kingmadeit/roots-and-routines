'use client";'
import { memo } from "react";
import * as motion from "motion/react-client";
interface IsometricTitleProps {
  title: string;
  splitTitle?: string[];
  className?: string;
}

const IsometricTitle = memo<IsometricTitleProps>(function IsometricTitle({ 
  title, 
  splitTitle, 
  className = "" 
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      rotateX: -90
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const words = splitTitle || title.split(' ');

  return (
    <div className={`relative w-full max-w-6xl mx-auto perspective-1000 ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative transform-gpu"
      >
        {/* Main Isometric Text Stack */}
        <div className="relative">
          {words.map((word, index) => (
            <motion.div
              key={index}
              className={`
                relative font-black uppercase tracking-tighter leading-none
                transform-gpu preserve-3d
                ${index === 0 ? 'text-8xl md:text-9xl lg:text-[12rem]' : ''}
                ${index === 1 ? 'text-6xl md:text-7xl lg:text-8xl -mt-4' : ''}
                ${index === 2 ? 'text-7xl md:text-8xl lg:text-9xl -mt-6' : ''}
                ${index === 3 ? 'text-5xl md:text-6xl lg:text-7xl -mt-4' : ''}
              `}
              style={{
                transform: `
                  translateZ(${index * 30}px)
                  rotateX(${index * 2}deg)
                  rotateY(${index * -1}deg)
                  translateX(${index * (index % 2 === 0 ? -20 : 20)}px)
                `
              }}
            >
              {/* Background shadow layers */}
              <div
                className="absolute inset-0 select-none pointer-events-none"
                style={{
                  color: 'var(--bg-secondary)',
                  transform: 'translate(8px, 8px) translateZ(-10px)',
                  opacity: 0.3
                }}
                aria-hidden="true"
              >
                {word}
              </div>
              <div
                className="absolute inset-0 select-none pointer-events-none"
                style={{
                  color: 'var(--bg-secondary-light)',
                  transform: 'translate(4px, 4px) translateZ(-5px)',
                  opacity: 0.5
                }}
                aria-hidden="true"
              >
                {word}
              </div>

              {/* Main text with gradient based on index */}
              <span
                className="relative block"
                style={{
                  color: index === 0 ? 'var(--bg-accent)' :
                         index === 1 ? 'var(--bg-complementary)' :
                         index === 2 ? 'var(--bg-secondary)' :
                         'var(--bg-primary-light)',
                  textShadow: `
                    2px 2px 0 rgba(120, 138, 104, 0.3),
                    4px 4px 0 rgba(120, 138, 104, 0.2),
                    6px 6px 0 rgba(120, 138, 104, 0.1)
                  `
                }}
              >
                {word}
              </span>

              {/* Isometric side faces */}
              <div
                className="absolute inset-0 select-none pointer-events-none"
                style={{
                  color: 'var(--bg-secondary)',
                  transform: 'translate(6px, -6px) skewX(-15deg) scaleY(0.8) translateZ(-15px)',
                  opacity: 0.4
                }}
                aria-hidden="true"
              >
                {word}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional geometric shapes */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute top-1/2 -left-8 w-32 h-32 lg:w-48 lg:h-48 -z-10"
        >
          <div
            className="w-full h-full transform rotate-45"
            style={{
              background: `linear-gradient(135deg, 
                var(--bg-accent) 0%, 
                var(--bg-complementary) 50%, 
                var(--bg-secondary-light) 100%)`,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }}
          />
        </motion.div>
      </motion.div>


    </div>
  );
});

export default IsometricTitle;