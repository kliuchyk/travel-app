import { Link } from "react-router-dom";
import sm from "./styles.module.scss";

const AppLogo = () => {
  return (
    <Link to="/" className={sm.AppLogo}>
      TravelGuide
    </Link>
  );
};

export default AppLogo;
