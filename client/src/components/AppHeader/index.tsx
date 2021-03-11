import AppLogo from "../AppLogo";
import SearchInput from "../SearchInput";
import LanguageSelect from "../LanguageSelect";
import sm from "./styles.module.scss";

const AppHeader = () => {
  return (
    <div className={sm.Container}>
      <div className={sm.LogoWrapper}>
        <AppLogo />
      </div>
      <div className={sm.SearchWrapper}>
        <SearchInput />
      </div>
      <div className={sm.RightSection}>
        <LanguageSelect options={["Eng", "Rus", "Ukr"]} />
      </div>
    </div>
  );
};

export default AppHeader;
