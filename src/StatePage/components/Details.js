import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = React.memo((props) => {
  const c = props.singleCountryData;
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="main_details">
      <div className="coutry-name">
        <div className="name" data-aos="slide-right">
          <h1>{c.name}</h1>
        </div>
        <img src={c.flag} alt={c.name} data-aos="slide-left" />
      </div>
      <div className="description" data-aos="zoom-out-up" data-aos-delay="1500">
        {c.description}
      </div>
      <div className="details">
        <div className="detail-row" data-aos="slide-up">
          <h2>Capital</h2>
          <h2>{c.capital}</h2>
        </div>
        <div className="detail-row" data-aos="slide-up">
          <h2>Language</h2>
          <h2>{c.language}</h2>
        </div>
        <div className="religion-row" data-aos="slide-up">
          <h2>Religion</h2>
          <div>
            {c.religions ? c.religions.map((p) => <h2 key={p}>{p}</h2>) : null}
          </div>
        </div>
        <div className="detail-row" data-aos="slide-up">
          <h2>Area</h2>
          <h2>{c.area}</h2>
        </div>
        <div className="detail-row" data-aos="slide-up">
          <h2>Currency</h2>
          <h2>{c.currency}</h2>
        </div>
      </div>
      <div className="images">
        {c.images
          ? c.images.map((i) => (
              <img
                key={i}
                src={i}
                alt={c.name}
                data-aos="zoom-in"
                data-aos-delay="800"
              />
            ))
          : null}
      </div>

      <div className="map" data-aos="flip-down" data-aos-delay="800">
        <iframe title={c.name + " map"} src={c.map}></iframe>
      </div>
    </div>
  );
});

export default Details;
