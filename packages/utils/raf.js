import { isServer } from "./";
let prev = Date.now();
function fallback(fn) {
    const curr = Date.now();
    const ms = Math.max(0, 16 - (curr - prev));
    const id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}
const root = isServer ? global : window;
/* istanbul ignore next */
const Raf =
    root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

/* istanbul ignore next */
const CancelRaf =
    root.cancelAnimationFrame ||
    root.webkitCancelAnimationFrame ||
    root.clearTimeout;

export function raf(fn) {
    return Raf.call(root, fn);
}

export function cancel(id) {
    CancelRaf.call(root, id);
}
