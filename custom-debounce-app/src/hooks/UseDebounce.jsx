import { useCallback, useState } from "react";

export const UseDounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value || "");
  const debouncedFxn = useCallback(debounce(setDebouncedValue, delay), [delay]);
  debouncedFxn(value);
  return debouncedValue;
}

const  debounce = (callback, delay) => {
  let timerId;
  return function debouncedFxn(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}