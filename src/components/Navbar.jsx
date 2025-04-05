import React, { useState } from "react";
import "../App.css";

const Navbar = ({ setCategory, setCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState("in");

  const countries = [
    { code: "ae", name: "United Arab Emirates" },
    { code: "ar", name: "Argentina" },
    { code: "at", name: "Austria" },
    { code: "au", name: "Australia" },
    { code: "be", name: "Belgium" },
    { code: "bg", name: "Bulgaria" },
    { code: "br", name: "Brazil" },
    { code: "ca", name: "Canada" },
    { code: "ch", name: "Switzerland" },
    { code: "cn", name: "China" },
    { code: "co", name: "Colombia" },
    { code: "cu", name: "Cuba" },
    { code: "cz", name: "Czech Republic" },
    { code: "de", name: "Germany" },
    { code: "eg", name: "Egypt" },
    { code: "fr", name: "France" },
    { code: "gb", name: "United Kingdom" },
    { code: "gr", name: "Greece" },
    { code: "hk", name: "Hong Kong" },
    { code: "hu", name: "Hungary" },
    { code: "id", name: "Indonesia" },
    { code: "ie", name: "Ireland" },
    { code: "il", name: "Israel" },
    { code: "in", name: "India" },
    { code: "it", name: "Italy" },
    { code: "jp", name: "Japan" },
    { code: "kr", name: "South Korea" },
    { code: "lt", name: "Lithuania" },
    { code: "lv", name: "Latvia" },
    { code: "ma", name: "Morocco" },
    { code: "mx", name: "Mexico" },
    { code: "my", name: "Malaysia" },
    { code: "ng", name: "Nigeria" },
    { code: "nl", name: "Netherlands" },
    { code: "no", name: "Norway" },
    { code: "nz", name: "New Zealand" },
    { code: "ph", name: "Philippines" },
    { code: "pl", name: "Poland" },
    { code: "pt", name: "Portugal" },
    { code: "ro", name: "Romania" },
    { code: "rs", name: "Serbia" },
    { code: "ru", name: "Russia" },
    { code: "sa", name: "Saudi Arabia" },
    { code: "se", name: "Sweden" },
    { code: "sg", name: "Singapore" },
    { code: "si", name: "Slovenia" },
    { code: "sk", name: "Slovakia" },
    { code: "th", name: "Thailand" },
    { code: "tr", name: "Turkey" },
    { code: "tw", name: "Taiwan" },
    { code: "ua", name: "Ukraine" },
    { code: "us", name: "United States" },
    { code: "ve", name: "Venezuela" },
    { code: "za", name: "South Africa" },
  ];

  const categories = [
    "general",
    "technology",
    "business",
    "health",
    "science",
    "sports",
    "entertainment",
  ];

  const displayCountry =
    countries.find((country) => country.code === selectedCountry)?.name ||
    "India";

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    setCountry(countryCode);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">eNEWS</div>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <div className="nav-link" onClick={() => setCategory(category)}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
          </div>
          <div className="navbar-nav ml-auto">
            <div className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {displayCountry}
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ zIndex: "100", maxHeight: "300px", overflowY: "auto" }}
              >
                {countries.map((country) => (
                  <button
                    key={country.code}
                    className="dropdown-item"
                    onClick={() => handleCountryChange(country.code)}
                  >
                    {country.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
