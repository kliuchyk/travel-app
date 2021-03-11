import { useState } from "react";
import sm from "./styles.module.scss";

const SearchInput = () => {
  const [value, setValue] = useState("");

  // TODO: add searching-glass icon
  return (
    <input
      type="text"
      className={sm.SearchInput}
      placeholder="Find a country..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
