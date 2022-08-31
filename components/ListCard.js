import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import Slide from "@mui/material/Slide";

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { red, grey } from "@mui/material/colors";
import RenameList from "./RenameList"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const gridPadding = {
  paddingBlockStart: "10px",
  paddingInline: "10px",
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ListCard = ({ name, deleteFunc, serialNumber, updateFunc, navigateToListDetails }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDelete = async (id) => {
    await deleteFunc(id);
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="rename" disablePadding>
          <ListItemButton onClick={handleClickOpen}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>ПРЕИМЕНУВАЙ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="share" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonAddAlt1Icon />
            </ListItemIcon>
            <ListItemText>
              <strong>СПОДЕЛИ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="copy" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ContentCopyIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>КОПИЕ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="delete" disablePadding>
          <ListItemButton onClick={() => handleDelete(serialNumber)} >
            <ListItemIcon>
              <DeleteIcon sx={{ color: red[500] }} />
            </ListItemIcon>
            <ListItemText sx={{ color: red[500] }}>
              <strong>ИЗТРИЙ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Paper
        style={{ marginInline: "10px", marginBlockStart: "20px" }}
        elevation={3}
      >
        <Grid style={gridPadding} container>
          <Grid xs={10}>
            <Typography sx={{ cursor: "pointer" }} onClick={() => navigateToListDetails(serialNumber)} variant="h6">{name}</Typography>
          </Grid> 
          <Grid display="flex" justifyContent="end" xs={2}>
            <MoreVertIcon
              onClick={toggleDrawer("bottom", true)}
              style={{ cursor: "pointer" }}
            />
          </Grid>
        </Grid>
        <Grid style={gridPadding} container>
          <Grid xs={10}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Grid>
          <Grid xs={2}>
            <Typography style={{ paddingBlockEnd: "10px" }} align="right">
              <strong>{1}/{2}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        {list("bottom")}
      </Drawer>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent sx={{ backgroundColor: grey[50] }}>
          <RenameList handleClose={handleClose} serialNumber={serialNumber} name={name} updateFunc={updateFunc} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ListCard;
