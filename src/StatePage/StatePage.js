import React, { useState, useEffect } from "react";

import Details from "./components/Details";
import Spinner from "./components/Spinner";
import axios from "axios";

import "./StatePage.css";

const StatePage = () => {
  const [courtryData, setCountryData] = useState([]);
  const [singleCountry, setSingleCountry] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let sidebarClasses = ["sidebar"];

  if (sidebarOpen) {
    sidebarClasses = ["sidebar", "Open"];
  }

  useEffect(() => {
    axios
      .get("https://state-info-by-react-default-rtdb.firebaseio.com/items.json")
      .then((res) => {
        const fetchData = [];
        for (let key in res.data) {
          fetchData.push({
            ...res.data[key],
            id: key,
          });
        }
        const SortingData = [...fetchData].sort(function (a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        setSingleCountry(SortingData[0]);
        setCountryData(SortingData);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleButtonHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const countryDataHandler = (country) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setSingleCountry(country);
    setSidebarOpen(!sidebarOpen);
  };

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

      <aside className={sidebarClasses.join(" ")}>
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

      <main className="main">
        {singleCountry ? (
          <Details singleCountryData={singleCountry} />
        ) : (
          <Spinner />
        )}
        <div className="admin">
          Go to admin Panel https://unruffled-hugle-819064.netlify.app/admin
          (turn off Add data)
        </div>
      </main>
    </div>
  );
};

export default StatePage;
