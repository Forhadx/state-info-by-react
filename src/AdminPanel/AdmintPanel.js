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
        setName('');
        setFlag('');
        setDescription('');
        setCapital('');
        setLanguage('');
        setArea('');
        setPopulation('');
        setGdp('');
        setCurrency('');
        setMap('');
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
    <div>
      <header className="form-header">
        <div>STATE INFO</div>
      </header>
      <form className="form" onSubmit={submitHandler}>
        <label>Country Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Country Flag Url Link</label>
        <input
          type="text"
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
        />

        <label>Describe the Country</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label> Capital</label>
        <input
          type="text"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />

        <label>Official language</label>
        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />

        <label>Religion 4/5 </label>
        <input
          type="text"
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
        />
        <div>
          <div onClick={religion ? allReligionHandler : null}>ADD</div>
          <div>{religionArr.length}</div>
        </div>

        <label>Area (Km)</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />

        <label>Population</label>
        <input
          type="number"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
        />

        <label>GDP (PPP)</label>
        <input
          type="number"
          value={gdp}
          onChange={(e) => setGdp(e.target.value)}
        />

        <label>Currency</label>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />

        <label>Map iframe src link</label>
        <input
          type="text"
          value={map}
          onChange={(e) => setMap(e.target.value)}
        />

        <label>Add Pictures</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div>
         <div onClick={image ? allImagesHandler : null}>ADD</div>
          <div>{imgArr.length}</div>
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AdminPanel;
