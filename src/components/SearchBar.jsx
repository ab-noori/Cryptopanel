import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = ({ value, onChange, onKeyDown }) => (
  <div className="search-bar">
    <input
      type="text"
      value={value}
      placeholder="Search"
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    <button type="button">Search</button>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default SearchBar;
