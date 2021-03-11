import { useEffect, useState } from "react";
import CountryCard from "../CountryCard";
import sm from "./styles.module.scss";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/countries/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  // TODO: improve flex-layout
  return (
    <ul className={sm.CountryList}>
      {countries.map(
        ({
          _id,
          countryName,
          capital,
          imageUrl,
        }) => (
          <CountryCard
            key={_id}
            id={_id}
            name={countryName}
            capital={capital}
            imageUrl={imageUrl}
          />
        )
      )}
    </ul>
  );
};

export default CountryList;
