const values = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const breakpoints = {
  values,
  up: (key: keyof typeof values) => `@media (min-width:${values[key]}px)`,
};

export default breakpoints;