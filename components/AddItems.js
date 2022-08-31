import React from "react";

import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Fab from '@mui/material/Fab';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from '@mui/icons-material/Check';

import { blue, grey, red } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const AddItems = ({ navigateBack }) => {
  return (
    <>
      <Fab
        onClick={navigateBack}
        style={{
          position: "absolute",
          insetBlockEnd: "0",
          insetInlineEnd: "0",
          margin: "20px",
        }}
        color="primary"
        aria-label="add"
      >
        <CheckIcon />
      </Fab>

      <Paper sx={{ padding: "10px", backgroundColor: blue[500] }}>
        <Grid container>
          <Grid display="flex" alignItems="center" xs={2}>
            <ArrowBackIcon onClick={navigateBack} sx={{ color: grey[50] }} />
          </Grid>
          <Grid display="flex" alignItems="center" xs={10}>
            <TextField
              id="outlined-basic"
              placeholder="Добавете нов елемент"
              sx={{
                borderRadius: "20px",
                padding: "5px",
                paddingInline: "10px",
                backgroundColor: grey[50],
                inlineSize: "100%",
              }}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={0} sx={{ maxBlockSize: "500px", overflowY: "scroll" }}>
        <List>
          <ListItem key="eggs" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  {...label}
                  icon={<AddCircleOutlineIcon />}
                  checkedIcon={<AddCircleOutlineIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText>
                <strong>яйца</strong>
              </ListItemText>
              <ListItemIcon>
                <CloseIcon sx={{ color: red[500] }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem key="chicken" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  {...label}
                  icon={<AddCircleOutlineIcon />}
                  checkedIcon={<AddCircleOutlineIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText>
                <strong>пиле</strong>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="butter" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  {...label}
                  icon={<AddCircleOutlineIcon />}
                  checkedIcon={<AddCircleOutlineIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText>
                <strong>масло</strong>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="paper" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  {...label}
                  icon={<AddCircleOutlineIcon />}
                  checkedIcon={<AddCircleOutlineIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText>
                <strong>тоалетна хартия</strong>
              </ListItemText>
              <ListItemIcon>
                <CloseIcon sx={{ color: red[500] }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem key="milk" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  {...label}
                  icon={<AddCircleOutlineIcon />}
                  checkedIcon={<AddCircleOutlineIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText>
                <strong>мляко</strong>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="tennis" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  {...label}
                  icon={<AddCircleOutlineIcon />}
                  checkedIcon={<AddCircleOutlineIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText>
                <strong>тенис</strong>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="potatoes" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  {...label}
                  icon={<AddCircleOutlineIcon />}
                  checkedIcon={<AddCircleOutlineIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText>
                <strong>картофи</strong>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="lettuce" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  {...label}
                  icon={<AddCircleOutlineIcon />}
                  checkedIcon={<AddCircleOutlineIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText>
                <strong>маруля</strong>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="juice" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  {...label}
                  icon={<AddCircleOutlineIcon />}
                  checkedIcon={<AddCircleOutlineIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText>
                <strong>сок</strong>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

export default AddItems;
