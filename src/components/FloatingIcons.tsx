"use client";
import { memo, useMemo, useEffect, useState } from "react";
import {
  Sparkles,
  Star,
  Baby,
  BookOpen,
  Heart,
  Sun,
  Flower,
  Rainbow,
  Apple,
  Calendar,
  Home,
  GraduationCap,
  Cake,
  CalendarCheck2,
  School,
  Puzzle,
  Crown,
  Gift,
  Smile,
  Music,
  TreePine,
  Gamepad2,
  Palette,
  Camera,
  Rocket,
  CloudSun,
  Leaf,
  Cherry,
  Cookie,
  IceCream,
  Snowflake,
  Zap,
  Moon,
  Stars,
  Wand2,
  PartyPopper,
  Candy,
} from "lucide-react";
import { Animated } from ".";

// Types
interface FloatingIconsProps {
  count?: number;
  className?: string;
  containerClassName?: string;
  enableAnimation?: boolean;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  opacityRange?: [number, number];
  colorVariants?: ('accent' | 'secondary' | 'secondary-light' | 'complementary')[];
}

interface FloatingIcon {
  id: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
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

// Constants - Family-friendly floating icons
const FAMILY_ICONS = [
  // Original core icons
  Star,           // PiStarFourFill
  Sparkles,       // PiShootingStarLight, HiOutlineSparkles
  Baby,           // PiBabyBold
  BookOpen,       // PiBookOpenBold
  Heart,          // PiHeartBold, HiOutlineHeart
  Sun,            // PiSunBold, LuSun
  Flower,         // PiFlowerBold
  Rainbow,        // PiRainbowBold
  Apple,          // IoNutritionOutline, LuApple
  Calendar,       // IoCalendarOutline
  Home,           // IoHomeOutline
  School,         // IoSchoolOutline
  GraduationCap,  // HiOutlineAcademicCap
  Cake,           // HiOutlineCake
  CalendarCheck2, // LuCalendarCheck2
  Puzzle,         // TbPuzzle
  
  // Additional family & childhood icons
  Crown,          // Royal/princess themes
  Gift,           // Present/celebration
  Smile,          // Happy faces
  Music,          // Musical notes
  TreePine,       // Nature/Christmas
  Gamepad2,       // Fun/games
  Palette,        // Creativity/art
  Camera,         // Memories/photos
  Rocket,         // Adventure/space
  CloudSun,       // Weather/sky
  Leaf,           // Nature/growth
  Cherry,         // Sweet treats
  Cookie,         // Snacks/treats
  IceCream,       // Desserts
  Snowflake,      // Winter/unique
  Zap,            // Energy/excitement
  Moon,           // Night/dreams
  Stars,          // Multiple stars
  Wand2,          // Magic/fairy tales
  PartyPopper,    // Celebrations
  Candy,          // Sweets
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
  complementary: 'text-complementary',
} as const;

type ColorClassKey = keyof typeof COLOR_CLASSES;

// Position zones to ensure even distribution
const POSITION_ZONES = [
  // Corners
  { top: '10px', left: '10px' },
  { top: '10px', right: '3rem' },
  { bottom: '30%', left: '10px' },
  { bottom: '10x', right: '10%' },
  // Edges
  { top: '20%', left: '10px' },
  { top: '20%', left: '10%' },
  { top: '20%', right: '10px' },
  { top: '40%', right: '10%' },
  { bottom: '20%', left: '10px' },
  { bottom: '20%', right: '10px' },
  // Mid positions
  { top: '30%', right: '30%' },
  { top: '50%', left: '50%' },
  { top: '50%', left: '30%' },
  { top: '40%', left: '20px' },
  { bottom: '30%', right: '20px' },
] as const;

// Utility functions
const getRandomItem = <T,>(array: readonly T[]): T => 
  array[Math.floor(Math.random() * array.length)];

const getRandomInRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const generateFloatingAnimation = () => {
  // Get viewport dimensions for full-screen movement
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  
  return {
    // Much slower, more subtle movement (30-50 seconds vs 15-25)
    duration: getRandomInRange(30, 50),
    delay: getRandomInRange(0, 8),
    x: [
      0, // Start from current position
      getRandomInRange(-viewportWidth * 0.3, viewportWidth * 0.3),   
      getRandomInRange(-viewportWidth * 0.5, viewportWidth * 0.5),   
      getRandomInRange(-viewportWidth * 0.2, viewportWidth * 0.2),   
      0  
    ],
    y: [
      0, // Start from current position
      getRandomInRange(-viewportHeight * 0.2, viewportHeight * 0.2), 
      getRandomInRange(-viewportHeight * 0.4, viewportHeight * 0.4), 
      getRandomInRange(-viewportHeight * 0.15, viewportHeight * 0.15), 
      0 
    ],
    rotate: [
      0,
      getRandomInRange(-8, 8),     
      getRandomInRange(-5, 5),      
      getRandomInRange(-3, 3),      
      0
    ],
  };
};

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
      
      const defaultColors: ColorClassKey[] = ['accent', 'secondary', 'secondary-light', 'complementary'];
      const validColorVariants = colorVariants && colorVariants.length ? colorVariants : defaultColors;
      
      // The type assertion (as ColorClassKey) fixes the TS error
      const colorVariant = getRandomItem(validColorVariants) as ColorClassKey;
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

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1] as [number, number, number, number]; // Memoized icon component

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
      delay: animation.delay * 0.1,
      repeat: Infinity,
      ease,
    },
  } : {};

  const positionClasses = Object.entries(position)
    .map(([key, value]) => `${key}-[${value}]`)
    .join(' ');

  return (
    <Animated as="div"
      key={icon.id}
      className={`absolute ${positionClasses} pointer-events-none select-none`}
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        zIndex: 1,
      }}
      initial={{ opacity: 0.5, scale: 0.5 }}
      animate={{ opacity, scale: 0.6 }}
      transition={{ 
        duration: 1.2, 
        delay: animation.delay * 0.1,
        ease,
      }}
      {...motionProps}
    >
      <Icon className={`${size} ${color}`} />
    </Animated>
  );
});

const FloatingIcons = memo<FloatingIconsProps>(function FloatingIcons({
  count = 5,
  className = "",
  containerClassName = "",
  enableAnimation = true,
  iconSize = 'md',
  opacityRange = [0.15, 0.5],
  colorVariants = ['accent', 'secondary', 'secondary-light', 'complementary'],
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
    <div className={`fixed w-full h-full ${className} ${containerClassName}`}>
      {icons.map((icon) => (
        <FloatingIconItem
          key={icon.id}
          icon={icon}
          enableAnimation={enableAnimation}
        />
      ))}
    </div>
  );
});

export default FloatingIcons;