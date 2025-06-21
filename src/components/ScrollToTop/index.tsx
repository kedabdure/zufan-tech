"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[99]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            role="button"
            tabIndex={0}
            onClick={scrollToTop}
            onKeyDown={handleKeyDown}
            aria-label="Scroll to top"
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-[#3F72AF] text-[#F9F7F7] shadow-md transition-all duration-300 hover:bg-[#112D4E] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/50 group cursor-pointer"
          >
            <motion.svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </motion.svg>
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#3F72AF]/20 to-[#DBE2EF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};