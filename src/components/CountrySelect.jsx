import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import data from './countries.json';

const CountrySelect = ({ isDarkMode, onChange, value }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    if (value) {
      if (typeof value === 'string') {
        const sel = data.find(i => i.value.toLowerCase() === value.toLowerCase());
        setSelectedCountry(sel);
      } else {
        setSelectedCountry(value);
      }
    }
  }, [value]);

  useEffect(() => {
    setCountries(data);
  }, []);

  const customStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: isDarkMode ? '#1c1d20' : 'white',
      color: isDarkMode ? 'white' : 'black',
      border: 'none',
      outline: 'none',
      'box-shadow': 'none',
      width: '100%',
      cursor: 'pointer'
    }),
    menu: styles => ({
      ...styles,
      backgroundColor: isDarkMode ? '#1c1d20' : 'white',
      width: '100%'
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? (isDarkMode ? '#1c1d20' : '#eee') : isDarkMode ? '#333' : 'white',
      color: isDarkMode ? 'white' : 'black'
    }),
    singleValue: styles => ({
      ...styles,
      color: isDarkMode ? 'white' : 'black'
    }),
    input: styles =>({
      ...styles,
      color: isDarkMode ? 'white' : 'black'

    })
  };

  return (
    <Select
      options={countries}
      value={selectedCountry}
      styles={customStyles}
      onChange={selectedOption => {
        setSelectedCountry(selectedOption);
        onChange(selectedOption);
      }}
    />
  );
};

export default CountrySelect;
