import AutoComplete from "./features/AutoComplete/AutoComplete"
import './App.css'
import { getSuggestions } from "./api/api";

const App = () => {
  return (
    <AutoComplete
      getSuggestions={getSuggestions}
      onSelect={console.log}
      onChange={console.log}
      onBlur={console.log}
      onFocus={console.log}
    />
  )
}

export default App
