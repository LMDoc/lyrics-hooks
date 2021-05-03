import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { TextInput as SearchBarInput } from '../inputs/TextInput'  

const Searchbar = props => {
  return (
    <div>
      <>
        <Toolbar>
          <SearchBarInput
            placeholder='Search Artist, Song name, Lyrics and more...'
            type='search'
            fullWidth
            variant="filled"
          />
        </Toolbar>
      </>
    </div>
  );
};

export default Searchbar;
