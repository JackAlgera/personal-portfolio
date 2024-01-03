function subscribe(eventName: string, listener) {
  document.addEventListener(eventName, listener);
}

function unsubscribe(eventName: string, listener) {
  document.removeEventListener(eventName, listener);
}

function publish(eventName: string) {
  const event = new CustomEvent(eventName, { detail: {} });
  document.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe};
