"use client";
import { memo, useMemo, useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  PiStarFourFill,
  PiShootingStarLight,
  PiBabyBold,
  PiBookOpenBold,
  PiHeartBold,
  PiSunBold,
  PiFlowerBold,
  PiButterflyBold,
  PiRainbowBold,
} from "react-icons/pi";
import {
  IoNutritionOutline,
  IoCalendarOutline,
  IoHomeOutline,
  IoSchoolOutline,
} from "react-icons/io5";
import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineCake,
} from "react-icons/hi";
import { LuCalendarCheck2, LuApple, LuSun } from "react-icons/lu";
import { TbBalloon, TbPuzzle } from "react-icons/tb";

// Types
interface FloatingIconsProps {
  count?: number;
  className?: string;
  containerClassName?: string;
  enableAnimation?: boolean;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  opacityRange?: [number, number];
  colorVariants?: ('accent' | 'secondary' | 'secondary-light' | 'complimentary')[];
}

interface FloatingIcon {
  id: string;
  Icon: React.ComponentType<{ className?: string }>;
  size: string;
  color: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animation: {
    duration: number;
    delay: number;
    x: number[];
    y: number[];
    rotate: number[];
  };
  opacity: number;
}

// Constants
const FAMILY_ICONS = [
  PiStarFourFill,
  PiShootingStarLight,
  PiBabyBold,
  PiBookOpenBold,
  PiHeartBold,
  PiSunBold,
  PiFlowerBold,
  PiButterflyBold,
  PiRainbowBold,
  IoNutritionOutline,
  IoCalendarOutline,
  IoHomeOutline,
  IoSchoolOutline,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineCake,
  LuCalendarCheck2,
  LuApple,
  LuSun,
  TbBalloon,
  TbPuzzle,
] as const;

const SIZE_CLASSES = {
  sm: ['w-6 h-6', 'w-8 h-8'],
  md: ['w-8 h-8', 'w-12 h-12', 'w-16 h-16'],
  lg: ['w-12 h-12', 'w-16 h-16', 'w-20 h-20'],
  xl: ['w-16 h-16', 'w-20 h-20', 'w-24 h-24', 'w-32 h-32'],
} as const;

const COLOR_CLASSES = {
  accent: 'text-accent',
  secondary: 'text-secondary',
  'secondary-light': 'text-secondary-light',
  complimentary: 'text-complimentary',
} as const;

const POSITION_ZONES = [
  // Corners
  { top: '10px', left: '10px' },
  { top: '10px', right: '10px' },
  { bottom: '10px', left: '10px' },
  { bottom: '10px', right: '10px' },
  // Edges
  { top: '20%', left: '10px' },
  { top: '20%', right: '10px' },
  { bottom: '20%', left: '10px' },
  { bottom: '20%', right: '10px' },
  // Mid positions
  { top: '30%', right: '15%' },
  { top: '70%', left: '15%' },
  { top: '40%', left: '20px' },
  { bottom: '30%', right: '20px' },
] as const;

// Utility functions
const getRandomItem = <T,>(array: readonly T[]): T => 
  array[Math.floor(Math.random() * array.length)];

const getRandomInRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const generateFloatingAnimation = () => ({
  duration: getRandomInRange(15, 25),
  delay: getRandomInRange(0, 5),
  x: [
    0,
    getRandomInRange(-30, 30),
    getRandomInRange(-20, 20),
    getRandomInRange(-40, 40),
    0
  ],
  y: [
    0,
    getRandomInRange(-40, 40),
    getRandomInRange(-60, 60),
    getRandomInRange(-30, 30),
    0
  ],
  rotate: [
    0,
    getRandomInRange(-15, 15),
    getRandomInRange(-10, 10),
    getRandomInRange(-20, 20),
    0
  ],
});

const generateRandomPosition = (): FloatingIcon['position'] => {
  const zone = getRandomItem(POSITION_ZONES);
  return zone;
};

// Hook for generating icons
const useFloatingIcons = (
  count: number,
  iconSize: FloatingIconsProps['iconSize'],
  opacityRange: [number, number],
  colorVariants: FloatingIconsProps['colorVariants']
): FloatingIcon[] => {
  return useMemo(() => {
    const icons: FloatingIcon[] = [];
    
    for (let i = 0; i < count; i++) {
      const Icon = getRandomItem(FAMILY_ICONS);
      const sizeClass = getRandomItem(SIZE_CLASSES[iconSize || 'md']);
      const colorVariant = getRandomItem(colorVariants || ['accent', 'secondary', 'secondary-light']);
      const colorClass = COLOR_CLASSES[colorVariant];
      const opacity = getRandomInRange(opacityRange[0], opacityRange[1]);
      
      icons.push({
        id: `floating-icon-${i}`,
        Icon,
        size: sizeClass,
        color: colorClass,
        position: generateRandomPosition(),
        animation: generateFloatingAnimation(),
        opacity,
      });
    }
    
    return icons;
  }, [count, iconSize, opacityRange, colorVariants]);
};

// Memoized icon component
const FloatingIconItem = memo<{ 
  icon: FloatingIcon; 
  enableAnimation: boolean 
}>(function FloatingIconItem({ icon, enableAnimation }) {
  const { Icon, size, color, position, animation, opacity } = icon;
  
  const motionProps = enableAnimation ? {
    animate: {
      x: animation.x,
      y: animation.y,
      rotate: animation.rotate,
    },
    transition: {
      duration: animation.duration,
      delay: animation.delay,
      repeat: Infinity,
      ease: "linear",
    },
  } : {};

  const positionClasses = Object.entries(position)
    .map(([key, value]) => `${key}-[${value}]`)
    .join(' ');

  return (
    <motion.div
      key={icon.id}
      className={`absolute ${positionClasses} pointer-events-none select-none`}
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        zIndex: 1,
        opacity,
      }}
      initial={{ opacity: 0.3, scale: 0.5 }}
      animate={{ opacity, scale: 0.5 }}
      transition={{ 
        duration: 0.6, 
        delay: animation.delay * 0.2,
        ease: "easeOut" 
      }}
      {...motionProps}
    >
      <Icon className={`${size} ${color}`} />
    </motion.div>
  );
});

const FloatingIcons = memo<FloatingIconsProps>(function FloatingIcons({
  count = 5,
  className = "",
  containerClassName = "",
  enableAnimation = true,
  iconSize = 'md',
  opacityRange = [0.3, 0.6],
  colorVariants = ['accent', 'secondary', 'secondary-light', 'complimentary'],
}) {
  const [shouldRender, setShouldRender] = useState(false);
  
  // Delay rendering to avoid hydration mismatch due to random generation
  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const icons = useFloatingIcons(count, iconSize, opacityRange, colorVariants);

  if (!shouldRender) return null;

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${containerClassName}`}
      aria-hidden="true"
    >
      <div className={`relative w-full h-full ${className}`}>
        {icons.map((icon) => (
          <FloatingIconItem
            key={icon.id}
            icon={icon}
            enableAnimation={enableAnimation}
          />
        ))}
      </div>
    </div>
  );
});

export default FloatingIcons;