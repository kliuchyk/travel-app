import AppLogo from "../AppLogo";
import SearchInput from "../SearchInput";
import LanguageSelect from "../LanguageSelect";
import sm from './styles.module.scss';

const AppHeader = () => {
  return (
    <div className={sm.Container}>
      <AppLogo />
      <SearchInput />
      <LanguageSelect options={["Eng", "Rus", "Ukr"]} />
    </div>
  );
};

export default AppHeader;
