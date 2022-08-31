import React from "react";

import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from '@mui/icons-material/Delete';

import { lime, grey, red } from "@mui/material/colors";

const ItemDetails = ({ navigateBack, navigateToEditCategory }) => {
  return (
    <>
      <Paper elevation={0} sx={{ padding: "10px", backgroundColor: lime[100] }}>
        <Grid container>
          <Grid display="flex" justifyContent="start" xs={6}>
            <ArrowBackIcon onClick={navigateBack} />
          </Grid>
          <Grid display="flex" justifyContent="end" xs={6}>
            <CameraAltIcon />
          </Grid>
        </Grid>

        <Grid sx={{ marginBlockStart: "2em" }} container>
          <Grid display="flex" justifyContent="center" xs={12}>
            <TextField
              id="outlined-basic"
              placeholder="Име на продукт"
              sx={{
                borderRadius: "10px",
                padding: "5px",
                backgroundColor: grey[50],
                inlineSize: "100%",
                boxShadow: "5px 5px 15px 5px rgba(232,227,232,1)",
              }}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ marginBlockStart: "2em", paddingBlockEnd: "1em" }}
          onClick={navigateToEditCategory}
        >
          <Grid display="flex" alignItems="center" xs={2}>
            🧀
          </Grid>
          <Grid display="flex" alignItems="center" xs={9}>
            <strong>МЛЕЧНИ И ЯЙЦА</strong>
          </Grid>
          <Grid display="flex" alignItems="center" xs={1}>
            <ArrowForwardIosIcon />
          </Grid>
        </Grid>
      </Paper>

      <Grid sx={{ marginBlockStart: "1em" }} container>
        <Grid display="flex" justifyContent="center" xs={12}>
          <TextField
            id="outlined-basic"
            placeholder="Добавете бележка"
            sx={{
              borderRadius: "10px",
              padding: "5px",
              margin: "10px",
              backgroundColor: grey[300],
              inlineSize: "100%",
            }}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EditIcon />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </Grid>
      </Grid>

      <Grid sx={{ marginBlockStart: "1em" }} container>
        <Grid xs={3}>
          <TextField
            id="outlined-basic"
            placeholder="Количе..."
            sx={{
              borderRadius: "10px",
              padding: "5px",
              margin: "10px",
              backgroundColor: grey[300],
              inlineSize: "100%",
            }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid sx={{ marginInlineStart: "10px" }} xs={3}>
          <Select
            sx={{
              borderRadius: "10px",
              padding: "5px",
              margin: "10px",
              backgroundColor: grey[300],
              inlineSize: "100%",
            }}
            variant="standard"
            disableUnderline={true}
            value="kg"
          >
            <MenuItem value="l">l</MenuItem>
            <MenuItem value="kg">kg</MenuItem>
            <MenuItem value="ml">ml</MenuItem>
            <MenuItem value="g">g</MenuItem>
          </Select>
        </Grid>
        <Grid
          sx={{ marginInlineStart: "30px" }}
          display="flex"
          alignItems="center"
          xs={2}
        >
          <Fab color="primary" aria-label="add" size="small">
            <RemoveIcon />
          </Fab>
        </Grid>
        <Grid display="flex" alignItems="center" xs={2}>
          <Fab color="primary" aria-label="add" size="small">
            <AddIcon />
          </Fab>
        </Grid>
        <Grid xs={3}>
          <TextField
            id="outlined-basic"
            placeholder="Цена"
            sx={{
              borderRadius: "10px",
              padding: "5px",
              margin: "10px",
              backgroundColor: grey[300],
              inlineSize: "100%",
            }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid sx={{ marginBlockStart: "2em" }}>
        <Grid xs={3}>
        <Button
        style={{
          backgroundColor: "#F3F7F6",
          color: red[500],
          boxShadow: "none"
        }}
        variant="contained"
        aria-label="add"
      >
        <DeleteIcon />
        ИЗТРИЙ
      </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemDetails;
