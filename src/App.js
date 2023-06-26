import { React, useState } from "react";
import './App.css';
import { Search } from "./Components/Search";

function App() {

  const [search, setSearch] = useState("");  //search term
  const [Selected, setSelected] = useState(""); //shows the popup if true otherwise closes it
  const [apiResults, setApiResults] = useState([]); //results from the api

  const handleInput = (e) => {
    console.log("handleInput event", e.target.value);
    setSearch(e.target.value);
    return { search };
  }


  return (

    <div>

      <header>
        <h1>The Movie database</h1>
        <h4>Search, and then click on a movie to see the plot.</h4>
      </header>

      <main>
        <Search handleInput={handleInput} search={search} />

      </main>


    </div>

  );
}

export default App;
