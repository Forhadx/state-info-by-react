import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imgArr, setImgArr] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios
      .get("https://state-info-by-react-default-rtdb.firebaseio.com/items.json")
      .then((res) => {
        const fetchProducts = [];
        for (let key in res.data) {
          fetchProducts.push({
            ...res.data[key],
            id: key,
          });
        }
        console.log(fetchProducts);
        setAllData(fetchProducts);
      });
  }, [imgArr]);

  /** 
  
*/

  const submitHandler = (event) => {
    event.preventDefault();

    let arr = [...imgArr];
    console.log(arr);
    const data = {
      name: name,
      images: arr,
    };
    console.log("data: ", data);
    axios
      .post(
        "https://state-info-by-react-default-rtdb.firebaseio.com/items.json",
        data
      )
      .then((res) => {
        console.log(res);
        setImgArr([]);
      });
  };

  const addImageHandler = () => {
    setImgArr([...imgArr, image]);
    setImage("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <div onClick={addImageHandler}>ADD</div>
        {imgArr.map((i) => (
          <div key={i}>{i}</div>
        ))}
        <button type="submit">click</button>
      </form>

      {allData.map((p) => {
        return (
          <div key={p.id} style={{ border: "1px solid black" }}>
            <div>{p.id}</div>
            <div>{p.name}</div>
            {p.images.map((i) => (
              <div key={i}>{i}</div>
            ))}
          </div>
        );
      })}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746984.465708819!2d88.10026026270491!3d23.490583053663357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1615055471430!5m2!1sen!2sbd"
      ></iframe>
    </div>
  );
};

export default AdminPanel;
