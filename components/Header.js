import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Grid container>
      <Grid xs={2}>
        <MenuIcon style={{ marginInlineStart: "10px", marginBlockStart: "5px" }} />
      </Grid>
      <Grid xs={10}>
        <Typography variant="h6" gutterBottom>
          Моите списъци
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;