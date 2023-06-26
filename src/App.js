import { React, useState } from "react";
import './App.css';
import { Search } from "./Components/Search";
import { apiSearch, apiOpenPopup } from "./Utilities/Api";
import { Results } from "./Components/Results";
import { Popup } from "./Components/Popup";


function App() {

  const [search, setSearch] = useState("");  //search term
  const [selected, setSelected] = useState(""); //shows the popup if true otherwise closes it
  const [apiResults, setApiResults] = useState([]); //results from the api

  const searchCall = async (event) => {
    console.log("handleInput event", event.target.value);
    setSearch(event.target.value);

    if (event.key === "Enter") {
      apiSearch(search) //run the search from api.js
        .then((result) => {
          console.log("Api Search  from Api.js ", result);
          setApiResults(result);
        })
        .catch((error) => {
          console.log("Api Search error ", error);
          return;
        });
      console.log("apiResults  ", apiResults);
    }
  };


  const openPopup = (id) => {
    console.log("openPopupid ", id);

    apiOpenPopup(id) //run the search from api.js
      .then((result) => {
        console.log("apiOpenPopup  from Api.js ", result);
        setSelected(result);
      })
      .catch((error) => {
        console.log("apiOpenPopup error ", error);
        return;
      });
    console.log("apiOpenPopup  ", selected);

    return { selected };
  };

  const closePopup = () => {
    setSelected("");
    return { selected };
  };





  return (

    <div>
      <header>
        <h1>The Movie database</h1>
        <h4>Search, and then click on a movie to see the plot.</h4>
      </header>

      <main>
        <Search searchCall={searchCall} />
        <Results resultData={apiResults} openPopup={openPopup} />

        {typeof selected.Title != "undefined" ? ( //if its not equal to undefined show popup
          <Popup selected={selected} closePopup={closePopup} /> //show popup
        ) : (
          false //otherwise show nothing
        )}


      </main>
    </div>

  );
}

export default App;
