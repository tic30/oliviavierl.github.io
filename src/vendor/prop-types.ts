const chainable = new Proxy(() => chainable, {
  get: () => chainable,
  apply: () => chainable,
});

const PropTypes: any = new Proxy(
  {},
  {
    get: () => chainable,
  }
);

export default PropTypes;
