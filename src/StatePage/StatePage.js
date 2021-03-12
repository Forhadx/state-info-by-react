import React, { useCallback, useState } from "react";
import Details from "./components/Details";
import Search from './components/Search';
import Spinner from "./components/Spinner";

import "./StatePage.css";

const StatePage = () => {
  const [courtryData, setCountryData] = useState([]);
  const [singleCountry, setSingleCountry] = useState("");

  const filterCountryHandler = useCallback(country =>{
    setSingleCountry(country[0])
    setCountryData(country)
  },[]);

  const countryDataHandler = useCallback((country) => {
    setSingleCountry(country);
  }, []);

  return (
    <div className="state-page">
      <header>
        <div>STATE INFO</div>
      </header>

      <aside>
        <Search onLoadCountry = {filterCountryHandler} />
        <div className="all-C-name">
          {courtryData
            ? courtryData.map((data) => (
                <button
                  className="C-name"
                  key={data.id}
                  onClick={() => countryDataHandler(data)}
                >
                  {data.name}
                </button>
              ))
            : null}
        </div>
      </aside>

      <main>
        {singleCountry ? <Details singleCountryData={singleCountry} /> : <Spinner />}
      </main>
    </div>
  );
};

export default StatePage;
