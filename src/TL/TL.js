import T from "./T.js";

class TL {
  constructor() {
    this.count = 0;
    this.items = [];
  }

  to(element, o, time = 0) {
    if (this.count === 0) {
      this.items.push(new T(element, o));
    } else {
      this.items.push(
        new T(element, {
          ...o,
          delay:
            this.items[this.count - 1].del +
            this.items[this.count - 1].d +
            time,
        })
      );
    }
    ++this.count;
  }

  play() {
    this.items.map((t) => {
      t.play();
    });
  }
}

export default TL;