export const win = {
  get screen() {
    return { w: window.innerWidth, h: window.innerHeight };
  },
  html: document.documentElement,
  head: document.head,
  body: document.body,
  has: (obj, prop) => window.hasOwnProperty.call(obj, prop),
};
