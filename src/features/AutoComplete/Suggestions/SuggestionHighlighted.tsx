type HighlightedSuggestionProps = {
  searchText: string;
  suggestion: string;
}

const SuggestionHighlighted = ({ searchText, suggestion }: HighlightedSuggestionProps) => {
  const index = suggestion.toLowerCase().indexOf(searchText.toLowerCase());
  if (index === -1) {
    return <>{suggestion}</>;
  }
  return (
    <>
      {suggestion.slice(0, index)}
      <strong>{suggestion.slice(index, index + searchText.length)}</strong>
      {suggestion.slice(index + searchText.length)}
    </>
  );
};

export default SuggestionHighlighted;
