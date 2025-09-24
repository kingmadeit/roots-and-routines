'use client';

import { motion, MotionProps, ForwardRefComponent } from 'motion/react';
import React, { ElementType, ComponentPropsWithRef } from 'react';

// Default motion component tag
const defaultElement = 'div';

type AnimatedComponentProps<T extends ElementType> = {
  as?: T;
} & MotionProps & Omit<ComponentPropsWithRef<T>, keyof MotionProps>;

/**
 * A dynamic, reusable component for rendering animated elements.
 * @template T - The element type, which can be an HTML tag string or a React component.
 * @param {object} props - Any other props supported by the motion component.
 * @returns {React.ReactElement} The animated element.
 */
function Animated<T extends ElementType = typeof defaultElement>({
  as,
  ...props
}: AnimatedComponentProps<T>) {
  const MotionComponent = motion(as || defaultElement) as ForwardRefComponent<T, MotionProps>;
  return <MotionComponent {...props} />;
}

export default Animated;
