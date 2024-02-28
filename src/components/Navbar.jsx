import React, { useState } from 'react';
import '../App.css';
import '../navbar.js'

const Navbar = ({ setCategory, setCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState('in'); 

  const countries = [
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'ar', name: 'Argentina' },
    { code: 'at', name: 'Austria' },
    { code: 'au', name: 'Australia' },
    { code: 'be', name: 'Belgium' },
    { code: 'bg', name: 'Bulgaria' },
    { code: 'br', name: 'Brazil' },
    { code: 'ca', name: 'Canada' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'cn', name: 'China' },
    { code: 'co', name: 'Colombia' },
    { code: 'cu', name: 'Cuba' },
    { code: 'cz', name: 'Czech Republic' },
    { code: 'de', name: 'Germany' },
    { code: 'eg', name: 'Egypt' },
    { code: 'fr', name: 'France' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'gr', name: 'Greece' },
    { code: 'hk', name: 'Hong Kong' },
    { code: 'hu', name: 'Hungary' },
    { code: 'id', name: 'Indonesia' },
    { code: 'ie', name: 'Ireland' },
    { code: 'il', name: 'Israel' },
    { code: 'in', name: 'India' },
    { code: 'it', name: 'Italy' },
    { code: 'jp', name: 'Japan' },
    { code: 'kr', name: 'South Korea' },
    { code: 'lt', name: 'Lithuania' },
    { code: 'lv', name: 'Latvia' },
    { code: 'ma', name: 'Morocco' },
    { code: 'mx', name: 'Mexico' },
    { code: 'my', name: 'Malaysia' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'no', name: 'Norway' },
    { code: 'nz', name: 'New Zealand' },
    { code: 'ph', name: 'Philippines' },
    { code: 'pl', name: 'Poland' },
    { code: 'pt', name: 'Portugal' },
    { code: 'ro', name: 'Romania' },
    { code: 'rs', name: 'Serbia' },
    { code: 'ru', name: 'Russia' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'se', name: 'Sweden' },
    { code: 'sg', name: 'Singapore' },
    { code: 'si', name: 'Slovenia' },
    { code: 'sk', name: 'Slovakia' },
    { code: 'th', name: 'Thailand' },
    { code: 'tr', name: 'Turkey' },
    { code: 'tw', name: 'Taiwan' },
    { code: 'ua', name: 'Ukraine' },
    { code: 'us', name: 'United States' },
    { code: 've', name: 'Venezuela' },
    { code: 'za', name: 'South Africa' },
  ];

  let displayCountry = "India";
  
  countries.forEach((country) => {
    if(country.code === selectedCountry)
    {
      displayCountry = country.name;
    }
  });

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    setCountry(countryCode);
  };

  

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          eNEWS
        </div>
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
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('general')}
              >
                General
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('technology')}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('business')}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('health')}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('science')}
              >
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('sports')}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('entertainment')}
              >
                Entertainment
              </div>
            </li>
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
                style={{ zIndex: '100', maxHeight: '300px', overflowY: 'auto' }}
              >
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ae')}
                >
                  United Arab Emirates
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ar')}
                >
                  Argentina
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('at')}
                >
                  Austria
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('au')}
                >
                  Australia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('be')}
                >
                  Belgium
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('bg')}
                >
                  Bulgaria
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('br')}
                >
                  Brazil
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ca')}
                >
                  Canada
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ch')}
                >
                  Switzerland
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('cn')}
                >
                  China
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('co')}
                >
                  Colombia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('cu')}
                >
                  Cuba
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('cz')}
                >
                  Czech Republic
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('de')}
                >
                  Germany
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('eg')}
                >
                  Egypt
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('fr')}
                >
                  France
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('gb')}
                >
                  United Kingdom
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('gr')}
                >
                  Greece
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('hk')}
                >
                  Hong Kong
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('hu')}
                >
                  Hungary
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('id')}
                >
                  Indonesia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ie')}
                >
                  Ireland
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('il')}
                >
                  Israel
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('in')}
                >
                  India
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('it')}
                >
                  Italy
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('jp')}
                >
                  Japan
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('kr')}
                >
                  South Korea
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('lt')}
                >
                  Lithuania
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('lv')}
                >
                  Latvia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ma')}
                >
                  Morocco
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('mx')}
                >
                  Mexico
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('my')}
                >
                  Malaysia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ng')}
                >
                  Nigeria
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('nl')}
                >
                  Netherlands
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('no')}
                >
                  Norway
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('nz')}
                >
                  New Zealand
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ph')}
                >
                  Philippines
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('pl')}
                >
                  Poland
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('pt')}
                >
                  Portugal
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ro')}
                >
                  Romania
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('rs')}
                >
                  Serbia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ru')}
                >
                  Russia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('sa')}
                >
                  Saudi Arabia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('se')}
                >
                  Sweden
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('sg')}
                >
                  Singapore
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('si')}
                >
                  Slovenia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('sk')}
                >
                  Slovakia
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('th')}
                >
                  Thailand
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('tr')}
                >
                  Turkey
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('tw')}
                >
                  Taiwan
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ua')}
                >
                  Ukraine
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('us')}
                >
                  United States
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('ve')}
                >
                  Venezuela
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleCountryChange('za')}
                >
                  South Africa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;