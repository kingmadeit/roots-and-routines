"use client";
import { memo, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";
import { FAQData, FAQItem } from "@/types";


interface FAQComponentProps {
  data: FAQData;
  showTitle?: boolean;
  maxItemsToShow?: number;
  className?: string;
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

// Constants
const ANIMATION_CONFIG = {
  accordion: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
  },
  stagger: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as const;

// Memoized Components
const AccordionItem = memo<AccordionItemProps>(function AccordionItem({ 
  item, 
  isOpen, 
  onToggle, 
  index 
}) {
  const { question, answer } = item;

  return (
    <motion.div
      {...ANIMATION_CONFIG.stagger}
      transition={{ ...ANIMATION_CONFIG.stagger.transition, delay: index * 0.05 }}
      className="border-b border-white/20"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-2 py-4 text-left cursor-pointer flex items-center justify-between hover:bg-secondary/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={`answer-${item.id}`}
      >
        <h3 className="font-nunito font-semibold md:text-lg pr-4">
          {question}
        </h3>
        <div className={clsx(
          "flex-shrink-0 w-6 h-6 flex items-center bg-primary/20 rounded-full justify-center transition-transform duration-200",
        )}>
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            id={`answer-${item.id}`}
            {...ANIMATION_CONFIG.accordion}
            
          >
            <div className="px-6 pb-5 pt-4 bg-primary/10 rounded-t-lg">
              <p className="font-nunito leading-relaxed text-sm md:text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

const FAQHeader = memo<{ title: string; subtitle: string }>(function FAQHeader({ 
  title, 
  subtitle 
}) {
  return (
    <div className="text-center mb-12">
      <motion.h1
        {...ANIMATION_CONFIG.stagger}
        className="text-heading text-primary mb-4"
      >
        {title}
      </motion.h1>
      <motion.p
        {...ANIMATION_CONFIG.stagger}
        transition={{ ...ANIMATION_CONFIG.stagger.transition, delay: 0.1 }}
        className="text-lg md:text-xl text-primary max-w-3xl mx-auto font-nunito"
      >
        {subtitle}
      </motion.p>
    </div>
  );
});

const FAQ = memo<FAQComponentProps>(function FAQ({ 
  data, 
  showTitle = true, 
  maxItemsToShow,
  className = "" 
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const displayedQuestions = useMemo(() => {
    return maxItemsToShow ? data.questions.slice(0, maxItemsToShow) : data.questions;
  }, [data.questions, maxItemsToShow]);

  const handleToggleItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  return (
    <section className={clsx("py-16 px-4 font-nunito", className)}>
      <div className="max-w-4xl mx-auto">
        {showTitle && (
          <FAQHeader title={data.title} subtitle={data.subtitle} />
        )}
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white flex flex-col">
          {displayedQuestions.map((question, index) => (
            <AccordionItem
              key={question.id}
              item={question}
              isOpen={openItems.has(question.id)}
              onToggle={() => handleToggleItem(question.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default FAQ;