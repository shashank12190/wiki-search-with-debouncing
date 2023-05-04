import React, { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
      console.log("setting new timeout");
    }, delay);
    return () => {
      console.log("clearing timeout");
      clearTimeout(id);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
