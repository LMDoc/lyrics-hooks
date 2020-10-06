import React, { useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { useInput, useSuggestions } from "./hooks";

const Autocomplete = props => {
  const [inputValue, setValue] = useInput();
  const [suggestions, setSuggestions] = useSuggestions();

  const renderSuggestion = suggestion => (
    <div onClick={() => alert("Clicked!")}>{suggestion.name}</div>
  );

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : suggestions.filter(
          s => s.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = suggestion => suggestion.name;

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onChange = event => {
    setValue(event);
  };

  const inputProps = {
    placeholder: "What are you looking for?",
    value: inputValue,
    onChange
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export { Autocomplete };
