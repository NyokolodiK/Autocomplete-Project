# Autocomplete Project

## Overview

This project is an autocomplete component built using React and TypeScript. The component provides a text input field that suggests possible completions as the user types.

---

## Features

- **Autocomplete Suggestions**: Provides a list of suggestions as the user types in the input field.
- **Debouncing**: Delays the API call to fetch suggestions until the user has stopped typing for a short period.
- **Highlighting**: Highlights the matching text in the suggestions.
- **Customizable**: Can be configured to use a different API endpoint or display suggestions in a different format.

---

## Components

### 1. **Autocomplete**

The main component that renders the input field and the suggestions list.

### 2. **SuggestionHighlighted**

A component that highlights the matching text in the suggestions.

---

## API

The component uses the Dummy JSON API to fetch suggestions.

---

## Installation

To install the project, run the following command:

```bash
npm install
```

## Running the Project

To run the project, use the following command:

```bash
npm run dev
```

# Part 2: Answers to Questions

1. PureComponent does not have state and it does not re-render, Compoonent does not have state and it re-renders.
2. Context + ShouldComponentUpdate might me be dangerous because it cause unexpected behavior when not used correctly.
3. 3 Ways that information can be passed from child to parent:
   - Using a callback function
   - Using state management library
   - Using context API
4. 2 ways to prevent component from re-rendering:
   - Using memoization or lifecycle method in class based components such componentShouldUpdate
5. A fragment is an invisible dom element that does not add extra dom nodes, a fragment might break the app if you pass in props
6. 2 ways for HOC: an authentication HOC, loader HOC, HoneyBadger HOC currently being used in my work project
7. callbacks handle exceptions by calling a callback function with exception, promises uses .then and .catch and async await uses try catch
8. setState takes 2 arguments
9. Steps to migrate from class based to functional component:
   - Create a functional component
   - change setState to useState
   - change lifecycle methods to useEffect
   - change usage of this e.g this.props to props
10. To style react components, you can use module.css, inline styles or styled components
11. setDangerouslySetInnerHTML
