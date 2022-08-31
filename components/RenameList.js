import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import { green, grey } from "@mui/material/colors";
import Button from "@mui/material/Button";

const RenameList = ({ serialNumber, name, updateFunc, handleClose }) => {
  const [newName, setNewName] = useState(name);

  const onSubmit = async (e) => {
    e.preventDefault();

    const list = {
      serialNumber,
      name: newName,
    };

    if (!list.name) {
        list.name = `Нов списък (${serialNumber})`;
    }

    await updateFunc(list);

    setNewName("");
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
              backgroundColor: green[200],
              inlineSize: "100%",
              marginInline: "10px"
            }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
          />
        </Grid>
      </Grid>

      <Grid sx={{ marginBlockStart: "2em", paddingBlockEnd: "1em" }} container>
        <Grid display="flex" justifyContent="center" xs={6}>
          <Button onClick={handleClose}
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
            ЗАПАЗИ
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RenameList;
