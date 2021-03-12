import EmbeddedVideo from "components/EmbeddedVideo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sm from "./styles.module.scss";

const CountryDetailsPage = () => {
  const [details, setDetails] = useState<Country | null>(null);

  const [loading, setLoading] = useState(false);

  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadDetails = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_COUNTRIES}/country/${id}`
      );
      const details: Country = await response.json();
      setDetails(details);
      setLoading(false);
    };

    loadDetails();
  }, [id]);

  if (loading) {
    <h1>Loading....</h1>;
  }

  return (
    <div>
      {details && (
        <>
          <h1 className={sm.Header}>
            {details.capital}, {details.countryName}
          </h1>
          <div className={sm.ImageContainer}>
            <img src={details.imageUrl} alt={details.countryName} />
          </div>
          <div className={sm.About}>{details.about}</div>
          {details?.videoId && <EmbeddedVideo embedId={details.videoId} />} 
        </>
      )}
    </div>
  );
};

export default CountryDetailsPage;
