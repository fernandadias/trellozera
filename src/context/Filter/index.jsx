import { createContext, useState, useContext } from 'react';

function FilterHook() {
  const [filter, setFilter] = useState('all');
  const FilterContext = createContext({
    filter, setFilter,
  });

  const applicationFilter = (newFilter) => {
    setFilter(newFilter);
  };
}

function useFilter() {
  const context = useContext(FilterContext);
  return context;
}
export { useFilter, FilterHook };
