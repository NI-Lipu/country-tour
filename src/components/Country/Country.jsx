import './Country.css'

const Country = ({country}) => {
    console.log(country);
    return (
        <div className="country">
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h5>name: {country.name.common}</h5>
            <p>Area: {country.area.area}</p>
            <p>{country.area.area>200000? "Big Country": "Small Country"}</p>
        </div>
    );
};

export default Country;