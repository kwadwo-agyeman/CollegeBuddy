import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  InputBase,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import View from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material";
import React from "react";
import { useEffect } from "react";
const StyledCardAction = styled(CardActions)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

function ActivityCards(props) {
  
  return (
    <Box flex={9} p={3} sx={{}}>
      <Grid container spacing={2}>
        {props.cardArr.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent
                sx={{
                  backgroundColor:
                    (index + 1) % 2 === 0 ? "#E85F99" : "#4BE88D",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white", fontWeight: "600" }}
                >
                  Activity {index + 1}
                </Typography>
              </CardContent>

              <CardMedia
                sx={{ height: 140 }}
                image="https://source.unsplash.com/random"
              />
              <CardContent>
                <StyledBox>
                  <InputBase
                    onChange={(e) => props.handleCardEdits(e, index)}
                    size="small"
                    name="title"
                    placeholder="Title..."
                    value={props.cardDetails[index].title}
                    sx={{
                      border: "2px solid skyblue",
                      p: 1,
                      display: props.title[index] ? "none" : "block",
                    }}
                  />

                  <Typography
                    color="primary"
                    variant="h5"
                    sx={{
                      display: props.title[index] ? "block" : "none",
                      fontWeight: 600,
                    }}
                  >
                    {props.cardDetails[index].title}
                  </Typography>

                  <CheckCircle
                    className={`check-${index}`}
                    onClick={() => props.handleTitleStatus(index)}
                    color="primary"
                    sx={{
                      ml: 2,
                      color: props.title[index] ? "green" : "",
                      "&:hover": { cursor: "pointer" },
                      fontSize: "20px",
                    }}
                  />
                </StyledBox>
              </CardContent>
              <CardContent>
                <StyledBox sx={{ mt: "-1rem" }}>
                  <Box>
                    <Typography color="primary" sx={{ fontWeight: 400 }}>
                      Description
                    </Typography>
                    <InputBase
                      fullWidth
                      onChange={(e) => props.handleCardEdits(e, index)}
                      name="description"
                      value={props.cardDetails[index].description}
                      sx={{
                        border: "2px solid skyblue",
                        p: 1,
                        display: props.description[index] ? "none" : "block",
                      }}
                    />
                  </Box>

                  <CheckCircle
                    className={`check-${index}`}
                    onClick={() => props.handleDescriptionStatus(index)}
                    color="primary"
                    sx={{
                      ml: 2,
                      color: props.description[index] ? "green" : "",
                      "&:hover": { cursor: "pointer" },
                      fontSize: "20px",
                    }}
                  />
                </StyledBox>
                <Typography
                  sx={{
                    display: props.description[index] ? "block" : "none",
                    fontWeight: 400,
                  }}
                >
                  {props.cardDetails[index].description}
                </Typography>
              </CardContent>

              <StyledCardAction>
                <Tooltip title="view">
                  <Button size="small">
                    <Typography>View</Typography>
                    <View sx={{ ml: 2 }} />
                  </Button>
                </Tooltip>

                <Tooltip title="delete card" onClick={()=>props.deleteCard(index)}>
                  <Button size="small">
                    <Typography>Delete</Typography>
                    <DeleteIcon sx={{ ml: 2 }} />
                  </Button>
                </Tooltip>

              </StyledCardAction>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ADD CARD BUTTON */}
      <Tooltip title="Add Activity">
        <Fab
          onClick={props.addCard}
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: "20px",
            left: "52%",
            backgroundColor: "#5FE88D",
            color: "white",
            "&:hover": {
              backgroundColor: "#4CD77E",
            },
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}

export default ActivityCards;

