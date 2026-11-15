import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country);
    const [visited,setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited&&'visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h5>name: {country.name.common}</h5>
            <p>Area: {country.area.area}</p>
            <p>{country.area.area>200000? "Big Country": "Small Country"}</p>
            <button onClick={handleVisited}>{visited?"Visited":"Not Visited"}</button>
        </div>
    );
};

export default Country;