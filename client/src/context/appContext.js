import { createContext, useContext, useState, useReducer } from 'react';

const initialState = {
  loading: false,
  error: null,
  showAlert: false,
  alertType: '',
  alertText: '',
};

// Set app context to createContext
const AppContext = createContext();

// Set up AppProvider
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// Set up useAppContext hook
const useAppContext = () => useContext(AppContext);

export { initialState, AppProvider, useAppContext };
