"use client"

import { memo, useState, useCallback, useMemo } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Plus, Minus } from "lucide-react"
import clsx from "clsx"
import type { FAQData, FAQItem, FAQCategory } from "@/types"
import Animated from "./Animated"

interface FAQComponentProps {
  data: FAQData
  showTitle?: boolean
  maxItemsToShow?: number
  className?: string
}

interface AccordionItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}

// Constants
const ANIMATION_CONFIG = {
  accordion: {
    initial: { opacity: 0, overflow: "hidden" },
    animate: { opacity: 1, overflow: "hidden" },
    exit: { opacity: 0, overflow: "hidden" },
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  stagger: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as const

const AccordionItem = memo<AccordionItemProps>(function AccordionItem({ item, isOpen, onToggle, index }) {
  const { question, answer } = item

  return (
    <Animated
      as="div"
      {...ANIMATION_CONFIG.stagger}
      transition={{
        ...ANIMATION_CONFIG.stagger.transition,
        delay: index * 0.05,
      }}
      className="group"
    >
      <button
        type="button"
        onClick={onToggle}
        className={clsx(
          "w-full px-6 py-5 text-left cursor-pointer flex items-start justify-between",
          "transition-all duration-300 rounded-xl",
          "hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-accent focus-visible:ring-offset-2",
          isOpen ? "bg-primary/10" : "bg-white/10",
        )}
        aria-expanded={isOpen}
        aria-controls={`answer-${item.id}`}
      >
        <div className="flex items-start gap-4 flex-1">
          <h3 className="font-quicksand font-bold text-base md:text-lg pr-4 text-white">{question}</h3>
        </div>
        <div
          className={clsx(
            "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full",
            "transition-all duration-300 bg-accent",
            isOpen ? " text-white rotate-180" : "text-white/70 group-hover:bg-primary/50",
          )}
        >
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            id={`answer-${item.id}`}
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 ml-12">
              <div className="pl-6 border-l-2 border-accent/30">
                <p className="font-nunito leading-relaxed text-sm md:text-base text-white/90">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Animated>
  )
})

const FAQHeader = memo<{ title: string }>(function FAQHeader({ title }) {
  return (
    <div className="text-center mb-12 relative">
      <div className="absolute inset-0 - overflow-hidden">
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl opacity-20"
          viewBox="0 0 800 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100C100 50 200 150 300 100C400 50 500 150 600 100C700 50 800 100 800 100"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
          />
          <circle cx="300" cy="100" r="8" fill="currentColor" className="text-complementary" />
          <circle cx="600" cy="100" r="6" fill="currentColor" className="text-accent" />
        </svg>
      </div>
      <Animated as="h1" {...ANIMATION_CONFIG.stagger} className="text-4xl md:text-5xl font-bold text-[#581b04] mb-3">
        {title}
      </Animated>
      <Animated
        as="p"
        {...ANIMATION_CONFIG.stagger}
        transition={{ ...ANIMATION_CONFIG.stagger.transition, delay: 0.1 }}
        className="font-nunito text-[#581b04] max-w-2xl mx-auto"
      >
        Find answers to common questions about our services and approach
      </Animated>
    </div>
  )
})

const TabNav = memo<{
  categories: FAQCategory[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}>(function TabNav({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="mb-8 overflow-x-auto py-4">
      <div className="flex gap-2 min-w-max mx-auto justify-center px-4">
        {categories.map((category) => {
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={clsx(
                "cursor-pointer relative px-6 py-3 rounded-full font-quicksand font-bold text-sm md:text-base",
                "transition-all duration-300 whitespace-nowrap",
                isActive
                  ? "text-white bg-accent shadow-lg scale-105"
                  : "text-[#581b04] bg-white/40 hover:bg-white/60 hover:scale-105",
              )}
            >
              {category.name}
            </button>
          )
        })}
      </div>
    </div>
  )
})

const FAQ = memo<FAQComponentProps>(function FAQ({ data, showTitle = true, maxItemsToShow, className = "" }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [activeCategory, setActiveCategory] = useState<string>(data.categories[0]?.id || "")

  const activeQuestions = useMemo(() => {
    const category = data.categories.find((cat) => cat.id === activeCategory)
    return category?.questions || []
  }, [data.categories, activeCategory])

  const displayedQuestions = useMemo(() => {
    return maxItemsToShow ? activeQuestions.slice(0, maxItemsToShow) : activeQuestions
  }, [activeQuestions, maxItemsToShow])

  const handleToggleItem = useCallback((itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }, [])

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId)
    setOpenItems(new Set())
  }, [])

  return (
    <section className={clsx("py-16 px-4 font-nunito relative overflow-hidden", className)}>
      <div className="absolute inset-0 - overflow-hidden pointer-events-none">
        <svg
          className="absolute top-20 right-10 w-32 h-32 opacity-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" fill="currentColor" className="text-accent" />
        </svg>
        <svg
          className="absolute bottom-40 left-10 w-40 h-40 opacity-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10C70 10 90 30 90 50C90 70 70 90 50 90C30 90 10 70 10 50C10 30 30 10 50 10Z"
            fill="currentColor"
            className="text-secondary"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        {showTitle && <FAQHeader title={data.title} />}

        <TabNav categories={data.categories} activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

        <div className="bg-[#581b04] backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-xl border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {displayedQuestions.map((question, index) => (
                <AccordionItem
                  key={question.id}
                  item={question}
                  isOpen={openItems.has(question.id)}
                  onToggle={() => handleToggleItem(question.id)}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
})

export default FAQ
