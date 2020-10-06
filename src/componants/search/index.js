import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Autocomplete } from "./autocomplete";

const Searchbar = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Lyric Search or something...
          </Typography>
          <Autocomplete />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Searchbar;
