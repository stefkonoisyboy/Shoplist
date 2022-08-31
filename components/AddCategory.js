import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import EmojiPicker from "emoji-picker-react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { grey } from "@mui/material/colors";

const AddCategory = ({ navigateBack }) => {
  const [chosenEmoji, setChosenEmoji] = React.useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

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
            <strong>Създай нова категория</strong>
          </Typography>
        </Grid>
      </Grid>

      <Grid sx={{ marginBlockStart: "2em" }} container>
        <Grid display="flex" justifyContent="center" xs={12}>
          <TextField
            id="outlined-basic"
            placeholder="Име"
            sx={{
              borderRadius: "10px",
              padding: "15px",
              margin: "10px",
              backgroundColor: grey[300],
              inlineSize: "100%",
            }}
            variant="standard"
            InputProps={{
              endAdornment: (
                chosenEmoji ? <InputAdornment position="end">{chosenEmoji.emoji}</InputAdornment> : "none"
              ),
              disableUnderline: true,
            }}
          />
        </Grid>
      </Grid>

      <Grid sx={{ marginBlockStart: "2em" }} container>
        <Grid display="flex" justifyContent="center" xs={12}>
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            native
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddCategory;
