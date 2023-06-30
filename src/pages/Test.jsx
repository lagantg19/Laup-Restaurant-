import axios from "axios";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    axios
      .get("https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",{
        headers:{
            "X-RapidAPI-Key":"1732f5ef33mshccc57f79a11e66ep154e66jsn42ed8b4c72a3",
            "X-RapidAPI-Host":"moviesdatabase.p.rapidapi.com"


        }
      })
      .then((response) => {
        console.log(response.data.results);
      }).catch((err) => console.log(err));
  }, []);
  return <div>Test</div>;
};

export default Test;
