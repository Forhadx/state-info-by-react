import React, { useState } from "react";
import axios from "axios";

import "./AdminPanel.css";

const AdminPanel = () => {
  const [name, setName] = useState("");
  const [flag, setFlag] = useState("");
  const [description, setDescription] = useState("");
  const [capital, setCapital] = useState("");
  const [language, setLanguage] = useState("");
  const [area, setArea] = useState("");
  const [population, setPopulation] = useState("");
  const [gdp, setGdp] = useState("");
  const [currency, setCurrency] = useState("");
  const [map, setMap] = useState("");

  const [religion, setReligion] = useState("");
  const [religionArr, setReligionArr] = useState([]);

  const [image, setImage] = useState("");
  const [imgArr, setImgArr] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      flag: flag,
      description: description,
      capital: capital,
      language: language,
      area: area,
      population: population,
      gdp: gdp,
      currency: currency,
      map: map,
      religions: [...religionArr],
      images: [...imgArr],
    };

    console.log("data: ", data);
    axios
      .post(
        "https://state-info-by-react-default-rtdb.firebaseio.com/items.json",
        data
      )
      .then((res) => {
        console.log(res);
        setName("");
        setFlag("");
        setDescription("");
        setCapital("");
        setLanguage("");
        setArea("");
        setPopulation("");
        setGdp("");
        setCurrency("");
        setMap("");
        setReligionArr([]);
        setImgArr([]);
      });
  };

  const allImagesHandler = () => {
    console.log("img: ", image);
    setImgArr([...imgArr, image]);
    setImage("");
  };

  const allReligionHandler = () => {
    setReligionArr([...religionArr, religion]);
    setReligion("");
  };

  return (
    <div className="admin-panel">
      <header className="form-header">
        <div>STATE INFO</div>
      </header>
      <h1>Admin Panel (Input Country Data)</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-div">
          <label>Country Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            spellcheck="true"
            required
          />
        </div>

        <div className="input-div">
          <label>Country Flag Url Link</label>
          <input
            type="text"
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
            required
          />
        </div>

        <div className="input-div">
          <label>Describe the Country</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            spellcheck="true"
            required
          ></textarea>
        </div>

        <div className="input-div">
          <label>Capital</label>
          <input
            type="text"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            spellcheck="true"
            required
          />
        </div>

        <div className="input-div">
          <label>Language</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            spellcheck="true"
            required
          />
        </div>

        <div className="input-div">
          <label>Religion </label>
          <input
            type="text"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
            spellcheck="true"
          />
          <div className="input-amount">
            <div className="btn" onClick={religion ? allReligionHandler : null}>ADD</div>
            <div className="result">{religionArr.length}</div>
          </div>
        </div>

        <div className="input-div">
          <label>Area (Km)</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>

        <div className="input-div">
          <label>Population</label>
          <input
            type="text"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            required
          />
        </div>

        <div className="input-div">
          <label>GDP (PPP)</label>
          <input
            type="text"
            value={gdp}
            onChange={(e) => setGdp(e.target.value)}
            required
          />
        </div>

        <div className="input-div">
          <label>Currency</label>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
          />
        </div>

        <div className="input-div">
          <label>Map iframe src link</label>
          <input
            type="text"
            value={map}
            onChange={(e) => setMap(e.target.value)}
            required
          />
        </div>

        <div className="input-div">
          <label>Add Pictures</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <div className="input-amount">
            <div className="btn" onClick={image ? allImagesHandler : null}>ADD</div>
            <div className="result" >{imgArr.length}</div>
          </div>
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AdminPanel;
