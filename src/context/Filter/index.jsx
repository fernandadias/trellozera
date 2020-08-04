import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [filter, setFilter] = useState();

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  const { filter, setFilter } = context;
  return { filter, setFilter };
}
