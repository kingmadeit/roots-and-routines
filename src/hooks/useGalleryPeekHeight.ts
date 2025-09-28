import { useCallback, useEffect, useState } from "react";

// Gallery peek height calculation based on viewport
const GALLERY_PEEK_CONFIG = {
  minHeight: 120,    // Minimum peek height
  maxHeight: 300,    // Maximum peek height  
  viewportRatio: 0.2, // 20% of viewport height
};

const useGalleryPeekHeight = () => {
    const [peekHeight, setPeekHeight] = useState(200);
    
    const calculatePeekHeight = useCallback(() => {
      const vh = window.innerHeight;
      const calculated = Math.max(
        GALLERY_PEEK_CONFIG.minHeight,
        Math.min(
          GALLERY_PEEK_CONFIG.maxHeight,
          vh * GALLERY_PEEK_CONFIG.viewportRatio
        )
      );
      setPeekHeight(calculated);
      document.documentElement.style.setProperty('--gallery-peek-height', `${calculated}px`);
    }, []);
  
    useEffect(() => {
      calculatePeekHeight();
      window.addEventListener('resize', calculatePeekHeight);
      return () => window.removeEventListener('resize', calculatePeekHeight);
    }, [calculatePeekHeight]);
  
    return peekHeight;
  };

  export default useGalleryPeekHeight;