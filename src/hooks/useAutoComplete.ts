import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

type UseAutoCompleteProps = {
  getSuggestions: (query: string) => Promise<string[]>;
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
};

type UseAutoCompleteReturn = {
  textInputValue: string;
  loading: boolean;
  error: string;
  searchSuggestions: string[];
  showSuggestions: boolean;
  handleInputChange: (value: string) => void;
  handleOnSelect: (value: string) => void;
};

const useAutoComplete = ({
  getSuggestions,
  onChange,
  onSelect,
}: UseAutoCompleteProps): UseAutoCompleteReturn => {
  const [textInputValue, setTextInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (value: string) => {
    setTextInputValue(value);
    onChange(value);
  };

  const handleOnSelect = (value: string) => {
    setTextInputValue(value);
    onSelect(value);
    setSearchSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError("");
    setShowSuggestions(true);

    try {
      const suggestions = await getSuggestions(query);
      setSearchSuggestions(suggestions);
    } catch {
      setError("Error fetching suggestions");
      setSearchSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useDebounce(handleSearch, 500);

  useEffect(() => {
    if (textInputValue.length >= 2) {
      debouncedSearch(textInputValue);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  }, [textInputValue]);

  return {
    textInputValue,
    loading,
    error,
    searchSuggestions,
    showSuggestions,
    handleInputChange,
    handleOnSelect,
  };
};

export default useAutoComplete;
