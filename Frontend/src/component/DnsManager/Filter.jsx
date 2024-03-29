import React, { useState } from 'react';
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from 'react-toastify';

const FilterSearchComponent = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <select value={filterValue} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="A">A (Address) Record</option>
        <option value="CNAME">CNAME (Canonical Name) Record</option>
        {/* Add more options for other record types */}
      </select>
    </div>
  );
};

export default FilterSearchComponent;
