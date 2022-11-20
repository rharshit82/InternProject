import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { isUsable } from "../../helpers/functions";
import "./Home.css";
const Home = () => {
  const [wordArray, setWordArray] = useState([]);
  const history = useHistory();

  const filterArray = (arr) => {
    let textArray = arr
      .split(" ")
      .join(",")
      .split("\n")
      .join(",")
      .split(".")
      .join(",")
      .split("\t")
      .join(",")
      .split(",");
    textArray = textArray.filter((text) => {
      return text !== "" && text !== "/";
    });
    return textArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://www.terriblytinytales.com/test.txt")
      .then((res) => {
        let textArray = filterArray(res.data);
        setWordArray(textArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  useEffect(() => {
    if (isUsable(wordArray)) {
      const wordMap = new Map();
      for (let i = 0; i < wordArray.length; i++) {
        if (wordMap.get(wordArray[i]))
          wordMap.set(wordArray[i], wordMap.get(wordArray[i]) + 1);
        else wordMap.set(wordArray[i], 1);
      }
      let mapAsc = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));
      let histogramDataRows = [];
      let histogramDataCols = [];
      let words = 0;
      for (let [key, value] of mapAsc) {
        histogramDataRows.push(key)
        histogramDataCols.push(value)
        if (words++ === 20) break;
      }
      history.push('/data', {histogramDataRows, histogramDataCols})
    }
  }, [wordArray]);
  return (
    <div className="HomeDiv">
      <button onClick={handleSubmit} className="HomeButton" type="button">
        <h2>Submit</h2>{" "}
      </button>
    </div>
  );
};

export default Home;
