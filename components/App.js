import * as React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Header from "./Header";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import Slide from "@mui/material/Slide";
import ListCollection from "./ListCollection";
import AddList from "./AddList";

import { blue } from "@mui/material/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <ListCollection navigateToListDetails={props.navigateToListDetails} updateFunc={props.updateFunc} deleteFunc={props.deleteFunc} lists={props.lists} />
      <Button
        onClick={handleClickOpen}
        style={{
          position: "absolute",
          insetBlockEnd: "0",
          insetInlineEnd: "0",
          margin: "20px",
          borderRadius: "20px",
        }}
        color="primary"
        variant="contained"
        aria-label="add"
      >
        <AddIcon />
        СЪЗДАЙ
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent sx={{ backgroundColor: blue[500] }}>
          <AddList lists={props.lists} handleClose={handleClose} add={props.add} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
