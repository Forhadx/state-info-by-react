import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Search = (props) => {
  const { onLoadCountry } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
        if(enteredFilter === inputRef.current.value){
            const query = enteredFilter.length ===0 ? "" : `?orderBy="name"&equalTo="${enteredFilter}"`;
            axios
            .get("https://state-info-by-react-default-rtdb.firebaseio.com/items.json" + query)
            .then((res) => {
              //console.log(res.data);
              const fetchData = [];
              for (let key in res.data) {
                fetchData.push({
                  ...res.data[key],
                  id: key,
                });
              }
              const SortingData = [...fetchData].sort(function(a, b) {
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
              
              onLoadCountry(SortingData);
            });
        }
    }, 1000);

    return ()=>{
        clearTimeout(timer);
      }

  }, [onLoadCountry, inputRef, enteredFilter]);

  return (
    <input
      ref={inputRef}
      value={enteredFilter}
      onChange={(e) => setEnteredFilter(e.target.value)}
      type="text"
      placeholder="search"
    />
  );
};

export default Search;
