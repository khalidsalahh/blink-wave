import sub from '../../Core/Observer/observer.js';
import win from '../../Utils/methods/window.js';
import { round, clamp, lerp } from '../../Math/math.js';

export default function scrub(cb) {
  const node = document.createElement('section');
  const lProg = { start: 0, end: 0, lerp: 0.75 };

  node.style.cssText = `
    position: fixed;

    height: 32px;
    width: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    
    background: #333;
    color: #fff;

    border-radius: 50%;
    pointer-events: none;
  `;

  sub.add('pointermove').onChange(e => {
    const progress = round(e.pageX / win.screen.w);

    node.style.top = e.pageY + -30 + 'px';
    node.style.left = e.pageX + -30 * progress + 'px';

    node.textContent = progress;
    lProg.start = clamp(0, 0.99999, progress);
  });

  sub.add('raf', () => {
    lProg.end = lerp(lProg.start, lProg.end, lProg.lerp);
    cb(lProg.end);
  });

  document.body.appendChild(node);
}
