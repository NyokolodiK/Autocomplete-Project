import HighlightedSuggestion from './SuggestionHighlighted';

type SuggestionsProps = {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  searchText: string;
};

const Suggestions = ({
  suggestions,
  onSelect,
  searchText,
}: SuggestionsProps) => {
  return (
    <ul className="suggestions">
      {suggestions.map((suggestion) => (
        <li
          key={suggestion}
          className="suggestion-item"
          onClick={() => onSelect(suggestion)}
        >
          <HighlightedSuggestion searchText={searchText} suggestion={suggestion} />
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
