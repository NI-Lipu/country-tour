import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countries }) => {
  const countriesData = use(countries);

  return (
    <div>
      <h3>In the countries: {countriesData.length}</h3>
      <div className="countries">
        {countriesData.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
