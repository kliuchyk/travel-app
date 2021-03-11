import AppFooter from "components/AppFooter";
import AppHeader from "components/AppHeader";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const AppRoot = (): ReactElement => {
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/countries/all")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <BrowserRouter>
      <AppHeader />
      <AppRoutes />
      <AppFooter />
    </BrowserRouter>
  );
};

export default AppRoot;
