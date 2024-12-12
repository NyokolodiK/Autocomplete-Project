
import TextInput from "../../components/TextInput";
import useAutoComplete from "../../hooks/useAutoComplete";
import SuggestionsRenderer from "./Suggestions/SuggestionsRenderer";

type AutoCompleteProps = {
  getSuggestions: (query: string) => Promise<string[]>;
  onBlur?: () => void;
  onFocus?: () => void;
};

const AutoComplete = ({
  getSuggestions,
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
    getSuggestions
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
