import { useState, useCallback } from "react";
import { API } from "api";

export const useInput = () => {
  const [inputValue, setInputValue] = useState("");

  const setValue = useCallback(
    ({ target: { value } }) => setInputValue(value),
    []
  );

  return [inputValue, setValue];
};

export const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState([
    { name: "Liam" },
    { name: "Liam2" },
    { name: "Liam3" },
    { name: "Liam4" },
    { name: "Liam5" },
    { name: "Liam6" },
    { name: "Steve" }
  ]);

  return [suggestions, setSuggestions];
};
