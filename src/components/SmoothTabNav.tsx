import { ServiceCategory } from "@/constants/services";
import clsx from "clsx";
import { useLayoutEffect, useRef, useState, useCallback, CSSProperties, ReactNode } from "react";
import Animated, { motion } from "./Animated";
import Link from "next/link";

interface SmoothTabNavProps {
  className?: string;
  tabs: ServiceCategory[];
  selectedTab: ServiceCategory;
  style?: CSSProperties;
  onChange: (tabId: string, tab: ServiceCategory) => void;
}

const SmoothTabNav: React.FC<SmoothTabNavProps> = ({ tabs, className, selectedTab, style, onChange }) => {
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const updateDimensions = useCallback(() => {
    const button = buttonRefs.current.get(selectedTab.id);
    const container = containerRef.current;
    if (button && container) {
      const rect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        left: rect.left - containerRect.left - 8,
      });
    }
  }, [selectedTab.id]);

  useLayoutEffect(() => {
    const handleResize = () => updateDimensions(); 
    requestAnimationFrame(updateDimensions);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateDimensions]);

  const handleOnChange = (tab: ServiceCategory) => {
    debugger
    requestAnimationFrame(updateDimensions);
    onChange(tab.id, tab);
  };

  console.log(selectedTab.id)

  return (
    <div className={`w-full h-full mx-auto flex justify-center items-center`}>
      <div className={`flex justify-center mb-8 ${className || ""}`}>
        <div
          ref={containerRef}
          className={clsx("flex w-full h-full items-start gap-2 p-2 relative rounded-3xl", `${selectedTab.color}/40`)}
        > 
          {/* Sliding background */}
          <motion.div
            className={`absolute rounded-2xl z-[1] ${
                selectedTab?.color || "bg-accent"
              } shadow-lg`}
              initial={false}
              animate={{
                width: dimensions.width,
                x: dimensions.left,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            style={style ?? { height: "calc(100% - 16px)", top: "8px" }}
          />

          <div className="flex gap-2 h-full relative z-[2]">
            {tabs.map((tab) => {
              const isSelected = selectedTab.id === tab.id;
              const isLink = !!tab.linksTo; 

              const content: ReactNode = (
                <>
                  <span className="font-semibold">{tab.title}</span>
                  <span className={`text-xs mt-1 font-nunito ${isSelected ? "text-white" : "text-white/90"}`}>
                    {tab.description}
                  </span>
                </>
              );

              return (
                <Animated
                  as="button"
                  key={tab.id}
                  ref={(el) => (el ? buttonRefs.current.set(tab.id, el) : buttonRefs.current.delete(tab.id))}
                  type="button"
                  onClick={(e) => isLink ? e.preventDefault() : handleOnChange(tab)}
                  onMouseEnter={(e) => isLink ? handleOnChange(tab): e.preventDefault()}
                  className={clsx(
                    "relative flex flex-col items-center justify-center px-6 py-4 text-sm font-medium rounded-2xl transition-all duration-300 whitespace-nowrap",
                    isSelected ? "text-white" : "text-white/90",
                  )}
                >
                  {isLink ? (
                    <Link href={tab.linksTo!} className="w-full h-full">
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </Animated>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothTabNav;
