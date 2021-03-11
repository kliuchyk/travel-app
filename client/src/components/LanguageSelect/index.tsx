import sm from './styles.module.scss';

const LanguageSelect = ({ options }: { options: string[] }) => {
  return (
    <select className={sm.Select}>
      {options.map((value: string, idx: number) => (
        <option key={idx}>{value}</option>
      ))}
    </select>
  );
};

export default LanguageSelect;
