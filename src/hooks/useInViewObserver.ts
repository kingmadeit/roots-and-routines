'use client'
import { useEffect } from 'react';

interface useInViewObserverProps {
  selector?: string;
}
export default function useInViewObserver({ selector = '.animate-on-scroll' }: useInViewObserverProps) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // entry.target.classList.remove('in-view'); // remove if you want toggle behavior
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}
