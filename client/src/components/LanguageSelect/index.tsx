const LanguageSelect = ({ options }: { options: string[] }) => {
  return (
    <select>
      {options.map((value: string, idx: number) => (
        <option key={idx}>{value}</option>
      ))}
    </select>
  );
};

export default LanguageSelect;
