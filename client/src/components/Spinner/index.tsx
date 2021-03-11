import sm from "./styles.module.scss";

const Spinner = () => {
  return (
    <div className={sm.skChase}>
      <div className={sm.skChaseDot}></div>
      <div className={sm.skChaseDot}></div>
      <div className={sm.skChaseDot}></div>
      <div className={sm.skChaseDot}></div>
      <div className={sm.skChaseDot}></div>
      <div className={sm.skChaseDot}></div>
    </div>
  );
};

export default Spinner;
