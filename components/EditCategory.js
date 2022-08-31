import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { green, lime } from "@mui/material/colors";

const EditCategory = ({ navigateBack, navigateToAddNew }) => {
  return (
    <>
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
        <Grid xs={10}>
          <Typography variant="h6" gutterBottom>
            <strong>Промяна на категорията</strong>
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ marginBlockStart: "2em" }}>
        <Grid display="flex" justifyContent="center" xs={5}>
          <Typography gutterBottom>
            <strong>сирене</strong>
          </Typography>
        </Grid>
        <Grid display="flex" justifyContent="center" xs={2}></Grid>
        <Grid display="flex" justifyContent="center" xs={5}>
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
              🧀
            </span>
          </div>
        </Grid>
      </Grid>

      <Divider
        variant="middle"
        sx={{ backgroundColor: green[500], marginBlockStart: "1em" }}
      />

      <List sx={{ marginBlockStart: "1em" }}>
        <ListItem sx={{ borderRadius: "20px" }} key="share" disablePadding>
          <ListItemButton>
            <ListItemIcon>🍺</ListItemIcon>
            <ListItemText>
              <strong>БИРА, ВИНО И СПИРТНИ НАПИТКИ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ borderRadius: "20px" }} key="sort" disablePadding>
          <ListItemButton>
            <ListItemIcon>🍞</ListItemIcon>
            <ListItemText>
              <Typography>
                <strong>ВАРИВА И ПАСТА</strong>
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={{ backgroundColor: lime[100], borderRadius: "20px" }}
          key="show"
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>🍴</ListItemIcon>
            <ListItemText>
              <strong>ГОТОВИ ЯСТИЯ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ borderRadius: "20px" }} key="remove" disablePadding>
          <ListItemButton>
            <ListItemIcon>🏡</ListItemIcon>
            <ListItemText>
              <strong>ГРАДИНСКИ И НАПРАВИ СИ САМ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ borderRadius: "20px" }} key="delete" disablePadding>
          <ListItemButton>
            <ListItemIcon>🐾</ListItemIcon>
            <ListItemText>
              <strong>ДОМАШНИ ЛЮБИМЦИ</strong>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Grid sx={{ marginBlockStart: "2em" }}>
        <Grid display="flex" justifyContent="center" xs={12}>
          <Button
            onClick={navigateToAddNew}
            sx={{
              inlineSize: "100%",
              borderRadius: "20px",
              marginInline: "30px",
            }}
            color="primary"
            variant="contained"
            aria-label="add"
          >
            СЪЗДАЙ НОВА КАТЕГОРИЯ
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EditCategory;
