import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Dropdown = () => {
  const [countriesList, setCountriesList] = useState([]);
const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/av/countries");
        setCountriesList(res.data);
        console.log(setCountriesList);
        
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/av/categories");
        setCategoriesList(res.data);
        console.log(setCategoriesList);
        
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className='w-full flex justify-center'>
    <select
      id="countryDropdown"
      className="border-0 px-3 py-3 rounded dark:bg-lightDark text-sm shadow w-1/3 bg-green-50 mt-20"
      name="countryDropdown"
    >
      <option value="">Sélectionnez un pays...</option>
      {countriesList && countriesList.map((country:any) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        
      ))}
    </select>
    <select
      id="categoryDropdown"
      className="border-0 px-3 py-3 rounded dark:bg-lightDark text-sm shadow w-1/3 bg-green-50 mt-20"
      name="categoryDropdown"
    >
      <option value="">Sélectionnez une categorie...</option>
      {categoriesList && categoriesList.map((categrory:any) => (
          <option key={categrory.id} value={categrory.name}>
            {categrory.name}
          </option>
        
      ))}
    </select>
    </div>
  );
};

