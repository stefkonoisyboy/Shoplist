import React from "react";

import SearchBar from "./SearchBar";

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Switch from "@mui/material/Switch";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import Slide from "@mui/material/Slide";
import Radio from "@mui/material/Radio";

import { red, green, grey } from "@mui/material/colors";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SortIcon from "@mui/icons-material/Sort";
import SellIcon from "@mui/icons-material/Sell";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CategoryIcon from "@mui/icons-material/Category";
import AbcIcon from "@mui/icons-material/Abc";
import CloseIcon from "@mui/icons-material/Close";

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ListDetails = ({
  items,
  navigateBack,
  navigateToAddItems,
  navigateToItem,
  updateItemStatusHandler,
}) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    handleClose();
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const [searchView, setSearchView] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatusChange = async (itemId, status) => {
    await updateItemStatusHandler(itemId, status);
  };

  const [openShare, setOpenShare] = React.useState(false);

  const handleClickOpenShare = () => {
    setOpenShare(true);
  };

  const handleCloseShare = () => {
    setOpenShare(false);
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

  const header = () => {
    return (
      <Grid container>
        <Grid xs={2}>
          <ArrowBackIcon
            onClick={navigateBack}
            style={{
              marginInlineStart: "10px",
              marginBlockStart: "5px",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid xs={6}>
          <Typography variant="h6" gutterBottom>
            {items[0].listName}
          </Typography>
        </Grid>
        <Grid xs={2}>
          <PersonAddAlt1Icon
            onClick={handleClickOpenShare}
            style={{
              marginInlineStart: "10px",
              marginBlockStart: "5px",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid xs={2}>
          <MoreVertIcon
            onClick={toggleDrawer("bottom", true)}
            style={{
              marginInlineStart: "10px",
              marginBlockStart: "5px",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid sx={{ marginBlockStart: "15px" }} xs={12}>
          <BorderLinearProgress
            variant="determinate"
            value={
              (items.filter((item) => item.isBought === "true").length / items.length) *
              100
            }
          />
        </Grid>
      </Grid>
    );
  };

  const renderItems = (items) => {
    return items.map((item) => (
      <>
        <Grid display="flex" alignItems="center" xs={2}>
          {item.isBought === "true" ? (
            <Button
              onClick={() => handleStatusChange(item.serialNumber, "false")}
            >
              <CheckOutlinedIcon color="success" />
            </Button>
          ) : (
            <Button onClick={() => handleStatusChange(item.serialNumber, "true")}>
              <CircleOutlinedIcon color="primary" />
            </Button>
          )}
        </Grid>
        <Grid
          onClick={navigateToItem}
          display="flex"
          alignItems="center"
          xs={8}
        >
          <strong>{item.name}</strong>
        </Grid>
        <Grid display="flex" alignItems="center" xs={2}>
          <div
            style={{
              backgroundColor: "lightgray",
              borderRadius: "50%",
              blockSize: "30px",
              inlineSize: "30px",
            }}
          >
            <span
              style={{
                position: "relative",
                insetBlockStart: "10%",
                insetInlineStart: "10%",
              }}
            >
              {item.categoryIcon}
            </span>
          </div>
        </Grid>

        <Grid xs={12}>
          <Divider />
        </Grid>
      </>
    ));
  };

  const isSearchView = (state) => {
    return state ? (
      <SearchBar handleCloseSearchView={handleCloseSearchView} />
    ) : (
      header()
    );
  };

  const handleCloseSearchView = () => {
    setSearchView(false);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography align="center" variant="h6">
          <strong>Управление на списъка</strong>
        </Typography>

        <Grid sx={{ marginBlockStart: "1em" }} container>
          <Grid display="flex" justifyContent="center" xs={12}>
            <TextField
              id="outlined-basic"
              placeholder="Търсете в списъка"
              sx={{
                borderRadius: "20px",
                padding: "10px",
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
              onClick={() => setSearchView(true)}
            />
          </Grid>
        </Grid>

        <ListItem key="share" disablePadding>
          <ListItemButton onClick={handleClickOpenShare}>
            <ListItemIcon>
              <PersonAddAlt1Icon />
            </ListItemIcon>
            <ListItemText>
              <strong>СПОДЕЛИ СПИСЪКА</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="sort" disablePadding>
          <ListItemButton onClick={handleClickOpen}>
            <ListItemIcon>
              <SortIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography>
                <strong>СОРТИРАЙ ПО:</strong>
                <strong style={{ color: green[500] }}>КАТЕГОРИИ</strong>
              </Typography>
            </ListItemText>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem key="show" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SellIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>ПОКАЗВАНЕ НА ЦЕНИТЕ</strong>
            </ListItemText>
            <ListItemIcon>
              <Switch {...label} color="success" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem key="remove" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RestartAltIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>МАХНЕТЕ ОТМЕТКИТЕ ОТ ВСИЧКИ ЕЛЕМЕНТИ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="delete" disablePadding>
          <ListItemButton onClick={() => handleDelete(serialNumber)}>
            <ListItemIcon>
              <DeleteIcon sx={{ color: red[500] }} />
            </ListItemIcon>
            <ListItemText sx={{ color: red[500] }}>
              <strong>ИЗТРИВАНЕ НА ЗАКУПЕНИТЕ ПРОДУКТИ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Paper sx={{ padding: "10px", maxBlockSize: "500px" }}>
      <Button
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
        onClick={navigateToAddItems}
      >
        <AddIcon />
        ДОБАВИ
      </Button>

      {isSearchView(searchView)}

      <Grid sx={{ marginBlockStart: "15px" }} container>
        {renderItems(items)}
      </Grid>

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
          <Typography align="center" variant="h6">
            <strong>Сортирай по:</strong>
          </Typography>
          <List>
            <ListItem key="categories" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText>
                  {selectedValue === "a" ? (
                    <strong style={{ color: green[500] }}>КАТЕГОРИИ</strong>
                  ) : (
                    <strong>КАТЕГОРИИ</strong>
                  )}
                </ListItemText>
                <ListItemIcon>
                  <Radio {...controlProps("a")} color="success" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem key="abc" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AbcIcon />
                </ListItemIcon>
                <ListItemText>
                  {selectedValue === "b" ? (
                    <strong style={{ color: green[500] }}>
                      ПО АЗБУЧЕН РЕД
                    </strong>
                  ) : (
                    <strong>ПО АЗБУЧЕН РЕД</strong>
                  )}
                </ListItemText>
                <ListItemIcon>
                  <Radio {...controlProps("b")} color="success" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>

      <Dialog
        fullScreen
        open={openShare}
        onClose={handleCloseShare}
        TransitionComponent={Transition}
      >
        <DialogContent sx={{ backgroundColor: grey[50] }}>
          <Paper sx={{ padding: "10px", margin: "-25px" }}>
            <Grid container>
              <Grid display="flex" alignItems="center" xs={2}>
                <CloseIcon onClick={handleCloseShare} />
              </Grid>
              <Grid display="flex" alignItems="center" xs={10}>
                <Typography>
                  <strong>Сподели този списък:</strong>
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <form>
            <Grid sx={{ marginBlockStart: "4em" }} container>
              <Grid display="flex" alignItems="center" xs={12}>
                <TextField
                  id="outlined-basic"
                  placeholder="Въведи лице или имейл"
                  sx={{
                    borderRadius: "10px",
                    padding: "5px",
                    backgroundColor: grey[50],
                    inlineSize: "100%",
                    boxShadow: "5px 5px 15px 5px rgba(232,227,232,1)",
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

          <img
            style={{
              marginBlockStart: "1em",
              maxWidth: "100%",
              height: "auto",
            }}
            src={`https://freesvg.org/img/1536017106.png`}
            alt="food"
            loading="lazy"
          />

          <Typography align="center">
            <strong>Пазаруването заедно е по-лесно</strong>
          </Typography>
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default ListDetails;
