import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  // State to manage the visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event to show or hide the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling down 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn fixed bottom-8 right-8 bg-white text-[#124af4] p-4 rounded-full shadow-lg hover:bg-orange-400 focus:outline-none"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M5 15l7-7 7 7" />
        </svg>
      </button>
    )
  );
};

export default ScrollToTopButton;
