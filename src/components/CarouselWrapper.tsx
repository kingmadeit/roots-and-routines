"use client";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "100px 0px", // Load 100px before it comes into view
  });

  return (
    <div ref={ref} className="min-h-[50vh]">
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
