import { FC, useEffect, useState } from "react";
import { ICountryInput, Country } from "./types";
import "../style.css";

const CountrySelectInput: FC<ICountryInput> = ({
  id,
  label,
  icon,
  onchange,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryData = data.map((country: any) => ({
          name: country.name.common,
          flag: country.flags?.png || "",
          code: country.cca2,
        }));

        // SORT COUNTRIES ARRAY
        const sorted = countryData.sort((a: Country, b: Country) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });

        // SET DEFAULT COUNTRY
        const defaultCountry = sorted.find(
          (country: Country) => country.name === "Nigeria"
        );

        // SET STATES
        setCountries(sorted);
        setFilteredCountries(sorted);
        setSelectedCountry(defaultCountry);
      })
      .catch((error) => console.log("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, countries]);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    onchange && onchange(country);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
      {label && (
        <label className="manrope-600 fs-body" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className="input-div d-flex align-items-center gap-2 rounded-pill px-3 width-full custom-dropdown"
        onClick={toggleDropdown}
      >
        {icon && icon}
        {selectedCountry ? (
          <div className="selected-country">
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} flag`}
              style={{ width: "20px", marginRight: "8px" }}
            />
            {selectedCountry.name}
          </div>
        ) : (
          <span>{label}</span>
        )}
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu open">
          <input
            type="text"
            placeholder="Search country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input rounded-pill px-3 w-100"
          />
          <ul className="dropdown-list w-100">
            {filteredCountries.map((country, index) => (
              <li
                key={index}
                className="dropdown-items w-100"
                onClick={() => handleCountrySelect(country)}
              >
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  style={{ width: "20px", marginRight: "8px" }}
                />
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountrySelectInput;
