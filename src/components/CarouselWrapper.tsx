"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Carousel = dynamic(
  () =>
    import("./ui/carousel").then(
      (mod) =>
        new Promise<typeof mod>((resolve) =>
          setTimeout(() => resolve(mod), 1000)
        )
    ),
  {
    ssr: false,
  }
);

export default function CarouselWrapper() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // triggerOnce: true equivalent
        }
      },
      {
        threshold: 0,
        rootMargin: "100px 0px", // Load 100px before it comes into view
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {inView ? (
        <div>
          <Carousel />
        </div>
      ) : (
        <div className="w-full h-full bg-gray-100 rounded animate-pulse" />
      )}
    </div>
  );
}