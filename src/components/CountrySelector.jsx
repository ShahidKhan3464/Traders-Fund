import React, { useEffect, useState } from 'react';
import { getProfile, updateUserCountry } from '../api';
import toast from 'react-hot-toast';
import './CountrySelector.css';

const CountrySelector = ({
                           selectedCountry,
                           setSelectedCountry,
                           allCountries,
                           setSelectedCountryCode,
                           selectedCountryCode,
                           darkmode,
                         }) => {
  const [search, setSearch] = useState('');
  const [currentCountry, setCurrentCountry] = useState();
  const [openCountry, setOpenCountry] = useState(false);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProfile();
      setUserData(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (
      selectedCountry &&
      selectedCountryCode &&
      userData?.country?.toLowerCase() !== selectedCountryCode.toLowerCase()
    ) {
      const fetchData = async () => {
        const response = await updateUserCountry({ country: selectedCountryCode });
        if (response.statusCode === 201) {
          toast.success(response.message || 'Successfully updated country');
        } else {
          toast.error(response.message || "Couldn't update country");
        }
      };
      fetchData();
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && allCountries?.length) {
      const country = allCountries.filter(
        country => country.name?.toLowerCase() === selectedCountry?.toLowerCase()
      );
      if (country.length) {
        setSelectedCountryCode(country[0]?.code);
        setSelectedCountry(country[0]?.name);
      }
    }
  }, [selectedCountry, allCountries]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(`${country.flag} ${country.name}`);
    setSelectedCountryCode(country.code);
    setSearch('');
    setCurrentCountry('');
    setOpenCountry(false);
  };

  return (
    <div className="mt-8 mb-4 select-container">
      <div className="relative custom-select">
        <p className="text-[24px]">Select your country</p>
        <div className="w-full mt-2 bg-transparent border-[#e6e8ec] select border-[2px]">
          <span className="flex px-2" onClick={() => setOpenCountry(!openCountry)}>
            <input
              className={`w-[200px] border-none bg-transparent text-[24px] outline-none ${darkmode ? 'placeholder-white text-white' : 'text-black'}`}
              type="text"
              onChange={e => {
                setSelectedCountry('');
                setCurrentCountry('');
                setOpenCountry(true);
                setSearch(e.target.value);
              }}
              placeholder={!selectedCountry ? 'Select your country' : ''}
              value={selectedCountry ? selectedCountry : search}
              style={{ color: darkmode ? 'white' : 'black' }}
            />
            {!selectedCountry && !currentCountry ? (
              <div
                onClick={() => setOpenCountry(!openCountry)}
                className="w-full text-sm text-blue-600 cursor-pointer text-end change-doc-btn"
              >
                Select
              </div>
            ) : (
              <div
                onClick={() => setOpenCountry(!openCountry)}
                className="w-full text-sm text-blue-600 cursor-pointer text-end change-doc-btn"
              >
                Change
              </div>
            )}
          </span>
          {openCountry && (
            <ul>
              {allCountries
                .filter(country =>
                  search === '' || country.name?.toLowerCase().includes(search?.toLowerCase())
                )
                .map(option => (
                  <div className="flex" key={option.code}>
                    <div className="rounded-full w-5 h-5 mt-[16.5px] object-cover">{option.flag}</div>
                    <li
                      onClick={() => handleCountrySelect(option)}
                    >
                      {option.name}
                    </li>
                  </div>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountrySelector;
