import React from "react";

const Details = React.memo(props => {
  const c = props.singleCountryData;

  //console.log('data: ',props.singleCountryData.religions)
  
  //const arr = [...props.singleCountryData.religions];


  return (
    <React.Fragment>
      <div className="coutry-name">
        <div className="name">
          <h1>{c.name}</h1>
        </div>
        <img src={c.flag} alt={c.name} />
      </div>
      <div className="description">{c.description}</div>
      <div className="details">
        <div className="detail-row">
          <h2>Capital</h2>
          <h2>{c.capital}</h2>
        </div>
        <div className="detail-row">
          <h2>Language</h2>
          <h2>{c.language}</h2>
          
        </div>
        <div className="religion-row">
          <h2>Religion</h2>
          <div>
          {
            c.religions ? c.religions.map(p =>(
              <h2 key={p}>{p}</h2>
            )) : null
          }
          </div>
        </div>
        <div className="detail-row">
          <h2>Area</h2>
          <h2>{c.area}</h2>
        </div>
        <div className="detail-row">
          <h2>Currency</h2>
          <h2>{c.currency}</h2>
        </div>
      </div>
      <div className="images">
        {
          c.images ? c.images.map(i =>(
            <img key={i} src={i} alt={c.name} />
          )) : null
        }
      </div>

      <div className="map">
        <iframe title={c.name + ' map'} src={c.map}></iframe>
      </div>
    </React.Fragment>
  );
});

export default Details;
