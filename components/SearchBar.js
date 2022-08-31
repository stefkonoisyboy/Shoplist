import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { grey } from "@mui/material/colors";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ handleCloseSearchView }) => {
  return (
    <form>
      <Grid sx={{ marginBlockStart: "1em" }} container>
        <Grid display="flex" alignItems="center" xs={2}>
          <ArrowBackIcon
            onClick={handleCloseSearchView}
            style={{
              marginInlineStart: "10px",
              marginBlockStart: "5px",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid display="flex" alignItems="center" xs={10}>
          <TextField
            id="outlined-basic"
            placeholder="Търсете в списъка"
            sx={{
              borderRadius: "20px",
              padding: "5px",
              margin: "10px",
              backgroundColor: grey[300],
              inlineSize: "100%",
            }}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
