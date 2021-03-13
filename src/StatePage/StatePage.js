import React, { useCallback, useState } from "react";
import Details from "./components/Details";
import Search from "./components/Search";
import Spinner from "./components/Spinner";

import "./StatePage.css";

const StatePage = () => {
  const [courtryData, setCountryData] = useState([]);
  const [singleCountry, setSingleCountry] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let sidebarClasses = ['sidebar'];
  let mainClasses = ['main']
  if (sidebarOpen) {
    sidebarClasses = ['sidebar', 'Open'];
    mainClasses = ['main', 'Close']
  }

  const toggleButtonHandler = () =>{
    setSidebarOpen(!sidebarOpen);
  }

  const filterCountryHandler = useCallback((country) => {
    setSingleCountry(country[0]);
    setCountryData(country);
  }, []);

  const countryDataHandler = useCallback((country) => {
    // this two lines scroll the page to top.
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setSingleCountry(country);
  }, []);

  return (
    <div className="state-page">
      <header>
        <div className="container" onClick={toggleButtonHandler}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className="state-info">STATE INFO</div>
      </header>

      <aside className={sidebarClasses.join(' ')} >
        <Search onLoadCountry={filterCountryHandler} />
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

      <main className={mainClasses.join(' ')}>
        {singleCountry ? (
          <Details singleCountryData={singleCountry} />
        ) : (
          <Spinner />
        )}
        <div className="admin">Go to admin Panel http://localhost:3000/admin (turn off Add data)</div>
      </main>
    </div>
  );
};

export default StatePage;
