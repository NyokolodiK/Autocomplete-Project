import { useState, useEffect, useRef } from "react";
import useDebounce from "./useDebounce";

type UseAutoCompleteProps = {
  getSuggestions: (query: string) => Promise<string[]>;
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
}: UseAutoCompleteProps): UseAutoCompleteReturn => {
  const [textInputValue, setTextInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cache = useRef<{ [key: string]: string[] }>({});

  const handleInputChange = (value: string) => {
    setTextInputValue(value);
  };

  const handleOnSelect = (value: string) => {
    setTextInputValue(value);
    setSearchSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError("");
    setShowSuggestions(true);

    if (cache.current[query]) {
      setSearchSuggestions(cache.current[query]);
      setLoading(false);
      return;
    }

    try {
      const suggestions = await getSuggestions(query);
      const matchingSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      cache.current[query] = matchingSuggestions;
      setSearchSuggestions(matchingSuggestions);
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
