class EventTarget {
  constructor() {
    this.listeners = {};
  }

  addEventListener(name, callback) {
    if (!this.listeners.hasOwnProperty(name)) {
      this.listeners[name] = new Set([callback]);
    } else {
      this.listeners[name].add(callback);
    }
  }

  removeEventListener(name, callback) {
    this.listeners[name]?.delete(callback);
  }

  dispatchEvent(name) {
    this.listeners[name]?.forEach((callback) => callback());
  }
}

const target = new EventTarget();
const logHello = () => console.log("hello");
const logWorld = () => console.log("world");

target.addEventListener("hello", logHello);
target.addEventListener("world", logWorld);
target.dispatchEvent("hello");
target.dispatchEvent("world");
