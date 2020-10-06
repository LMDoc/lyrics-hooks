import { useState, useCallback } from "react";
import { API } from "../../../api/index";

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
    { name: "Steve" }
  ]);

  return [suggestions, setSuggestions];
};
