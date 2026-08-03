const viewportOnce = { once: true, amount: 0.3 } as const;
const easeOut = { duration: 0.5, ease: "easeOut" } as const;

type MotionOverrides = Record<string, unknown>;

export const fadeSlideFromLeft = (overrides: MotionOverrides = {}) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: viewportOnce,
  transition: easeOut,
  ...overrides,
});

export const fadeSlideFromRight = (overrides: MotionOverrides = {}) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: viewportOnce,
  transition: easeOut,
  ...overrides,
});

export const fadeSlideUp = (overrides: MotionOverrides = {}) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: easeOut,
  ...overrides,
});

export const fadeSlideDown = (overrides: MotionOverrides = {}) => ({
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: easeOut,
  ...overrides,
});
