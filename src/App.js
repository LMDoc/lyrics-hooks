import React, { useEffect } from "react";
import { API } from "./api/index";
import "./App.css";
import "fontsource-roboto";

import Button from "@material-ui/core/Button";

function App() {
  useEffect(() => {
    const list = API.getArtist("cardi");
    console.log(list);
  });

  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
