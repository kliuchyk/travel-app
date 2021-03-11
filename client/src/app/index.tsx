import AppFooter from "components/AppFooter";
import AppHeader from "components/AppHeader";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const AppRoot = (): ReactElement => {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppRoutes />
      <AppFooter />
    </BrowserRouter>
  );
};

export default AppRoot;
