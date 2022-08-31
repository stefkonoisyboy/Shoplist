import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";

const AddList = ({ handleClose, add, lists }) => {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    lists.sort((a, b) => a.serialNumber - b.serialNumber);

    const list = {
        serialNumber: lists[lists.length - 1].serialNumber + 1,
        name,
    };
    
    if (!list.name) {
        list.name = `Нов списък (${list.serialNumber})`;
    }

    add(list);


    handleClose();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Grid sx={{ marginBlockStart: "2em" }} container>
        <Grid display="flex" justifyContent="center" xs={12}>
          <TextField
            id="outlined-basic"
            placeholder="Нов списък"
            sx={{
              borderRadius: "20px",
              padding: "10px",
              backgroundColor: grey[50],
              inlineSize: "100%",
            }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid sx={{ marginBlockStart: "2em" }} container>
        <Grid display="flex" justifyContent="center" xs={6}>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: grey[50],
              color: "#000",
              borderRadius: "20px",
              paddingInline: "30px",
            }}
            variant="contained"
          >
            ОТКАЗ
          </Button>
        </Grid>
        <Grid display="flex" justifyContent="center" xs={6}>
          <Button
            sx={{ borderRadius: "20px", paddingInline: "30px" }}
            variant="contained"
            color="success"
            type="submit"
          >
            СЪЗДАЙ
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddList;
