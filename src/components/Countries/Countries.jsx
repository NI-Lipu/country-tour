import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countries }) => {
  const countriesData = use(countries);
  const [visitedCount, setVisitedCount] = useState([]);

  const handleVisitedCount = (country) => {
    setVisitedCount([...visitedCount, country.name.common]);
  };

  return (
    <div>
      <h3>In the countries: {countriesData.length}</h3>
      <h4>Visited Countries: {visitedCount.length}</h4>
      <div className="countries">
        {countriesData.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCount={handleVisitedCount}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
