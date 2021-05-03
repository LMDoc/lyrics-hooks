import React, { useEffect, useState } from "react";
import { API } from "./api/index";
import { MainContainer } from './componants/containers/MainContainer'
import "./App.css";
import "fontsource-roboto";

import SearchBar from "./componants/search";

function App() {
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    API.getArtist("cardi").then((res) => setSearchResults(res))
  }, []);

  console.log(searchResults)

  return (
    <>
      <SearchBar />
      <MainContainer maxWidth='100%' height='100%'>
      </MainContainer>
    </>
  );
}

export default App;
