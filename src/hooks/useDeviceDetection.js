import { useState, useEffect } from 'react';

export const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouchDevice: false,
    isLowEndDevice: false,
  });

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const screenWidth = window.innerWidth;

      // Mobile detection
      const isMobile =
        screenWidth < 768 ||
        /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );

      // Tablet detection
      const isTablet =
        !isMobile &&
        (screenWidth < 1024 ||
          /ipad|tablet|kindle|playbook|silk/i.test(userAgent));

      // Desktop detection
      const isDesktop = !isMobile && !isTablet;

      // Touch device detection
      const isTouchDevice =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      // Low-end device detection (rough heuristic)
      const isLowEndDevice =
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
        (navigator.deviceMemory && navigator.deviceMemory < 4);

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouchDevice,
        isLowEndDevice,
      });
    };

    detectDevice();

    // Debounce resize events
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(detectDevice, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return deviceInfo;
};
