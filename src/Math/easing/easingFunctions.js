const easingFunctions = {
  linear: (x) => x,
  i1: (x) => 1 - Math.cos((x * Math.PI) / 2),
  o1: (x) => Math.sin((x * Math.PI) / 2),
  io1: (x) => -(Math.cos(Math.PI * x) - 1) / 2,
  i2: (x) => Math.pow(x, 2),
  o2: (x) => 1 - (1 - x) * (1 - x),
  io2: (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2),
  i3: (x) => Math.pow(x, 3),
  o3: (x) => 1 - Math.pow(1 - x, 3),
  io3: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
  i4: (x) => Math.pow(x, 4),
  o4: (x) => 1 - Math.pow(1 - x, 4),
  io4: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
  i5: (x) => Math.pow(x, 5),
  o5: (x) => 1 - Math.pow(1 - x, 5),
  io5: (x) => (x < 0.5 ? 16 * Math.pow(x, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2),
  i6: (x) => (x === 0 ? 0 : Math.pow(2, 10 * x - 10)),
  o6: (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x)),
  io6: (x) =>
    x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2,
};

export default easingFunctions;
