import { Redirect, Route, Switch } from "react-router-dom";
import CountriesPage from "../../pages/CountriesPage";
import CountryDetailsPage from "../../pages/CountryDetailsPage";
import PATHS from "./paths";

// TODO: add import components as Lazy
const AppRoutes = () => {
  return (
    <main className="MainContent">
      <Switch>
        <Route exact path={PATHS.detailsPage} component={CountryDetailsPage} />
        <Route exact path={PATHS.home} component={CountriesPage} />
        <Redirect to={PATHS.home} />
      </Switch>
    </main>
  );
};

export default AppRoutes;
