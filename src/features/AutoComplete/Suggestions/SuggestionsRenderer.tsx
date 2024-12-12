import MessageBox from '../../../components/MessageBox';
import Suggestions from './Suggestions';

type SuggestionsRendererProps = {
  loading: boolean;
  error: string;
  suggestions: string[];
  showSuggestions: boolean;
  searchText: string;
  onSelect: (value: string) => void;
};

const SuggestionsRenderer = ({
  loading,
  error,
  suggestions,
  showSuggestions,
  searchText,
  onSelect,
}: SuggestionsRendererProps) => {
  if (!showSuggestions) return null;
  if (loading) return <MessageBox message="Loading suggestions..." />;
  if (error) return <MessageBox message={error} />;
  if (suggestions?.length === 0) return <MessageBox message="No suggestions found" />;

  return (
    <Suggestions
      suggestions={suggestions}
      searchText={searchText}
      onSelect={onSelect}
    />
  );
};

export default SuggestionsRenderer;
