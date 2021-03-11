import { Link } from 'react-router-dom';
import sm from "./styles.module.scss";

const AppLogo = () => {
  return <Link to="/" className={sm.AppLogo}>TravelGuid</Link>;
};

export default AppLogo;
