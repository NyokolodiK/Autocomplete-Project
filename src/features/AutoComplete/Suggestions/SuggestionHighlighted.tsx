type HighlightedSuggestionProps = {
  searchText: string;
  suggestion: string;
};

const SuggestionHighlighted = ({
  searchText,
  suggestion,
}: HighlightedSuggestionProps) => {
  const index = suggestion.toLowerCase().indexOf(searchText.toLowerCase());
  if (index === -1) {
    return <>{suggestion}</>;
  }
  return (
    <>
      <span role="presentation">{suggestion.slice(0, index)}</span>
      <strong
        role="presentation"
        aria-label={`Highlighted text: ${searchText}`}
      >
        {suggestion.slice(index, index + searchText.length)}
      </strong>
      <span role="presentation">
        {suggestion.slice(index + searchText.length)}
      </span>
    </>
  );
};

export default SuggestionHighlighted;
