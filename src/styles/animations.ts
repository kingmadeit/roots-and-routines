import { Variants } from "framer-motion";

const slideUp: Variants = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

const slideLeft: Variants = {
  initial: { x: 300, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};

export const defaultTransition = {
  duration: 0.6,
  ease: "anticipate" as const,
};

export const slideUpTransition = {
  ...slideUp,
  ...defaultTransition,
};

export const slideLeftTransition = {
  ...slideLeft,
  ...defaultTransition,
};
