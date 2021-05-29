import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState("");
  const [cities, setCities] = useState(null);
  const [singleCity, setSingleCity] = useState("");
  const [submit, setSubmit] = useState(false);
  const countryDataApi = async () => {
    try {
      const countryData = await axios.get(
        `https://countriesnow.space/api/v0.1/countries`
      );
      setCountries(countryData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const citiesData = (cou) => {
    setSubmit(false);
    setSingleCity(null);
    setSingleCountry(cou);
    const citiesName = countries.find((c) => c.country === cou);
    setCities(citiesName.cities);
    // console.log(citiesName.cities);
  };
  const handleSubmit = () => {
    if (singleCountry && singleCity) {
      setSubmit(true);
    }
  };
  useEffect(() => {
    countryDataApi();
  }, []);

  return (
    <div className="">
      <div className="App-header">
        <h1>Select your hometown</h1>
        <div>
          {countries && (
            <select
              onChange={(e) => {
                citiesData(e.target.value);
              }}
              value={singleCountry}
            >
              <option disabled selected hidden>
                Select Country
              </option>
              {countries.map((item) => (
                <option
                  key={`${item.country}-${Date.now()}`}
                  value={item.country}
                >
                  {item.country}
                </option>
              ))}
            </select>
          )}
          {cities && (
            <select
              onChange={(e) => {
                setSingleCity(e.target.value);
              }}
              value={singleCity}
            >
              <option disabled selected hidden>
                Select City
              </option>

              {cities.map((city) => (
                <option key={`${city}-${Date.now()}`} value={city}>
                  {city}
                </option>
              ))}
            </select>
          )}
          <button onClick={handleSubmit}>Go</button>
        </div>
        {submit && (
          <h3>
            Your country is {singleCountry} and your city is {singleCity}.
          </h3>
        )}
      </div>
    </div>
  );
}

export default App;
