export function getCarouselIconClass(
  position: number,
  center: number,
  total: number
) {
  const lastIndex = total - 1;

  if (position === lastIndex) return 'enter-screen';
  if (position === center + 2) return 'grow-md';
  if (position === center + 1) return 'grow-center';
  if (position === center) return 'shrink-md';
  if (position === center - 1) return 'shrink-sm';
  if (position === 0) return 'leave-screen';
  return 'slide';
}
