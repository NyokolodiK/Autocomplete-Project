import AutoComplete from "./features/AutoComplete/AutoComplete"
import './App.css'
import { getSuggestions } from "./api/api";

const App = () => {
  return (
    <AutoComplete
      getSuggestions={getSuggestions}
    />
  )
}

export default App
