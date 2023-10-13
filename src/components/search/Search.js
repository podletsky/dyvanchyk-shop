import React, { useState } from 'react';

function Search() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук меблів за назвою"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Пошук</button>
    </div>
  );
}

export { Search };
