import sm from "./styles.module.scss";
import GithubIcon from "../../assets/icons/github.png";

const AppFooter = () => {
  return (
    <div className={sm.AppFooter}>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <div className={sm.withBG}></div>
      </a>
      <div className={sm.Year}>2021</div>
      <a href="https://github.com/kliuchyk" target="_blank" rel="noreferrer">
        <img src={GithubIcon} alt="github icon" className={sm.GithubIcon} />
      </a>
    </div>
  );
};

export default AppFooter;
