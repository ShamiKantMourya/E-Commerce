import { createContext, useReducer } from "react";
import {
  reducer,
  initial_state,
} from "../Reducer/filterReducer";

export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  return (
    <FilterContext.Provider
      value={{ filtersApplied: state, filterDispatch: dispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};