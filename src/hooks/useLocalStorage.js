import { useState, useEffect } from "react";
const useLocalStorage = (key, fallback) => {
  const [val, setVal] = useState(() => getStoredValue(key, fallback));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val]);

  return [val, setVal];
};

const getStoredValue = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export default useLocalStorage;
