'use client'
import { useState, useEffect, useCallback } from 'react';

const GALLERY_PEEK_CONFIG = {
  minHeight: 120,
  maxHeight: 300,
  viewportRatio: 0.2,
};

const useGalleryPeekHeight = () => {
  const [peekHeight, setPeekHeight] = useState(200);

  const calculatePeekHeight = useCallback(() => {
    if (typeof window === 'undefined') return;
    
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