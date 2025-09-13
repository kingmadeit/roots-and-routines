import { Variants } from "framer-motion";

const slideUp: Variants = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

const slideDown: Variants = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

const slideLeft: Variants = {
  initial: { x: 300, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};

const slideRight: Variants = {
  initial: { x: -300, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};

const fadeIn: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

export const defaultTransition = {
  duration: 0.6,
  ease: "anticipate" as const,
  delay: 1,
  viewport: { once: true },
};

export const slideUpTransition = {
  ...slideUp,
  ...defaultTransition,
};

export const slideDownTransition = {
  ...slideDown,
  ...defaultTransition,
};

export const slideRightTransition = {
  ...slideRight,
  ...defaultTransition,
};

export const slideLeftTransition = {
  ...slideLeft,
  ...defaultTransition,
};

export const fadeInTransition = {
  ...fadeIn,
  ...defaultTransition,
};
