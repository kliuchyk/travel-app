import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/countries/all")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div className="App"></div>;
}

export default App;
