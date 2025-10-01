'use client'
import { useInView } from 'react-intersection-observer';


export default function LazyLoadOnView({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  console.log(inView)
  return <div ref={ref}>{inView ? children : null}</div>;
}
