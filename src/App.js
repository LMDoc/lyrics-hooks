import React, { useEffect } from "react";
import { API } from "./api/index";
import "./App.css";
import "fontsource-roboto";

import SearchBar from "./componants/search";

function App() {
  useEffect(() => {
    const list = API.getArtist("cardi");
    console.log(list);
  });

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
