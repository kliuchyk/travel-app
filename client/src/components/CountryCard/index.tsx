import sm from "./styles.module.scss";

interface Props {
  id: string;
  name: string;
  capital: string;
  imageUrl: string;
}

const CountryCard = ({ id, name, capital, imageUrl }: Props) => {
  return (
    <div className={sm.Card}>
      <div className={sm.ImgSection}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={sm.NameSection}>
        {capital}, {name}
      </div>
    </div>
  );
};

export default CountryCard;
