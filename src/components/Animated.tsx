'use client';

import { motion, MotionProps, AnimatePresence } from 'motion/react';
import React, { ElementType, ComponentPropsWithRef } from 'react';

const defaultElement = 'div';

type AnimatedComponentProps<T extends ElementType> = {
  as?: T;
} & MotionProps & Omit<ComponentPropsWithRef<T>, keyof MotionProps>;

function Animated<T extends ElementType = typeof defaultElement>({
  as,
  ...props
}: AnimatedComponentProps<T>) {
  const Component = as || defaultElement;
  const MotionComponent = motion.create(Component);
  
  return <MotionComponent {...props} />;
}

export {motion, AnimatePresence};

export default Animated;