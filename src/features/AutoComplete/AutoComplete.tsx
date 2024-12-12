
import TextInput from "../../components/TextInput";
import useAutoComplete from "../../hooks/useAutoComplete";
import SuggestionsRenderer from "./Suggestions/SuggestionsRenderer";

type AutoCompleteProps = {
  getSuggestions: (query: string) => Promise<string[]>;
  onSelect: (value: string) => void;
  onChange: (value: string) => void;
  onBlur: () => void;
  onFocus: () => void;
};

const AutoComplete = ({
  getSuggestions,
  onSelect,
  onChange,
  onBlur,
  onFocus,
}: AutoCompleteProps) => {
  const {
    textInputValue,
    loading,
    error,
    searchSuggestions,
    showSuggestions,
    handleInputChange,
    handleOnSelect,
  } = useAutoComplete({
    getSuggestions,
    onChange,
    onSelect,
  });

  return (
    <div className="autocomplete-container">
      <TextInput
        value={textInputValue}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Search..."
      />
      <SuggestionsRenderer
        loading={loading}
        error={error}
        suggestions={searchSuggestions}
        showSuggestions={showSuggestions}
        searchText={textInputValue}
        onSelect={handleOnSelect}
      />
    </div>
  );
};

export default AutoComplete;
