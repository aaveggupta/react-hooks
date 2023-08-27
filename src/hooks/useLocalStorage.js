import { useEffect, useState } from "react";

const getValue = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key));

  if (storedValue) return storedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
