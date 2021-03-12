import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../CountryCard";
import sm from "./styles.module.scss";

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_COUNTRIES}/all`)
      .then((response) => response.json())
      .then((data: Country[]) => setCountries(data));
  }, []);

  // TODO: improve flex-layout
  return (
    <ul className={sm.CountryList}>
      {countries.map(({ _id, countryName, capital, imageUrl }) => (
        <Link to={`/country/${_id}`} key={_id}>
          <CountryCard
            id={_id}
            name={countryName}
            capital={capital}
            imageUrl={imageUrl}
          />
        </Link>
      ))}
    </ul>
  );
};

export default CountryList;
