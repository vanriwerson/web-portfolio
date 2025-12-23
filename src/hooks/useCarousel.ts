import { useEffect, useMemo, useState } from 'react';
import { carouselIcons } from '../helpers';

const SCREEN_WIDTH = {
  SM: 600,
  MD: 720,
  LG: 840,
};

const ICON_WRAPPER_SIZE = 68;
const CAROUSEL_REFRESH_INTERVAL = 2400;

export function useCarousel() {
  const total = carouselIcons.length;

  const [index, setIndex] = useState(0);
  const [iconsPerPage, setIconsPerPage] = useState(getIconsPerPage());

  function getIconsPerPage() {
    const w = window.innerWidth;
    if (w < SCREEN_WIDTH.SM) return 6;
    if (w < SCREEN_WIDTH.MD) return 8;
    if (w < SCREEN_WIDTH.LG) return 10;
    return 12;
  }

  const center = Math.floor(iconsPerPage / 2) - 1;

  const visibleIcons = useMemo(() => {
    return Array.from({ length: iconsPerPage }, (_, i) => {
      return carouselIcons[(index + i) % total];
    });
  }, [index, iconsPerPage, total]);

  const trackWidth = iconsPerPage * ICON_WRAPPER_SIZE - ICON_WRAPPER_SIZE;

  useEffect(() => {
    const onResize = () => setIconsPerPage(getIconsPerPage());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, CAROUSEL_REFRESH_INTERVAL);

    return () => clearInterval(id);
  }, [total]);

  return {
    index,
    iconsPerPage,
    center,
    trackWidth,
    visibleIcons,
  };
}
