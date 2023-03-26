import { ArrowBack } from "@mui/icons-material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Skeleton,
  Button,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import "./Bundle.css";

const Bundle = () => {
  const [loading, setloading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [dishText, setDishText] = useState("");
  let [count, setcount] = useState(0);

  const handleOptionChange = (event) => {
    setcount(count < 1 ? count + 1 : count = 1);
    setSelectedOption(event.target.value);
    if (event.target.value === "Double Cheese Margharita") {
      setDishText(`Double Cheese Margharita [Regular 7"]`);
      setImageUrl(
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      );
    } else if (event.target.value === "Farmer's Market") {
      setDishText(`Farmers's Market [Regular 7"]`);
      setImageUrl(
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      );
    } else if (event.target.value === "Awesome Threesome") {
      setDishText(`Awesome Threesome [Regular 7"]`);
      setImageUrl(
        "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      );
    } else if (event.target.value === "Spicy Mexicano") {
      setDishText(`Spicy Mexicano [Regular 7"]`);
      setImageUrl(
        "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emElMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      );
    } else if (event.target.value === "Magic Mushrooms") {
      setDishText(`Magic Mushrooms [Regular 7"]`);
      setImageUrl(
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emElMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      );
    } else if (event.target.value === "Paneer Tikka") {
      setDishText(`Paneer Tikka [Regular 7"]`);
      setImageUrl(
        "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emElMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      );
    } else if (event.target.value === "Veggie Paradise") {
      setDishText(`Veggie Paradise [Regular 7"]`);
      setImageUrl(
        "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emElMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      );
    } else if (event.target.value === "Italian Garden") {
      setDishText(`Italian Garden [Regular 7"]`);
      setImageUrl(
        "https://images.unsplash.com/photo-1528830984461-4d5c3cc1abf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphJTIwYXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
      );
    }
  };

  const handleClick = () => {
    setloading(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              2 Regular 7" pizzas @ 199 each
            </Typography>
          </Toolbar>
          <Box className="flexbox">
            <Stack spacing={1}>
              {loading ? (
                <>
                  <Skeleton
                    variant="circular"
                    animation={false}
                    width={40}
                    height={40}
                  />
                </>
              ) : (
                <>
                  <img
                    src={imageUrl}
                    alt="Dish Avatar"
                    width={40}
                    height={40}
                  />
                </>
              )}
              {loading ? (
                <>
                  <Typography variant="body1">
                    <Skeleton
                      variant="text"
                      animation={false}
                      width={100}
                      height={100}
                    />
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="body1" width={100} height={100}>
                    {dishText}
                  </Typography>
                </>
              )}
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="circular"
                animation={false}
                width={40}
                height={40}
              />
              <Skeleton
                variant="text"
                animation={false}
                width={100}
                height={100}
              />
            </Stack>
          </Box>
        </AppBar>
      </Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">First Pizza [Regular 7'']</FormLabel>
        <RadioGroup
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="" //Keep default value blank if not required
        >
          <FormControlLabel
            value="Double Cheese Margharita"
            control={
              <Radio
                checked={selectedOption === "Double Cheese Margharita"}
                onClick={handleClick}
                onChange={handleOptionChange}
              />
            }
            label="Double Cheese Margharita [Regular 7'']"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Farmer's Market"
            control={
              <Radio
                checked={selectedOption === "Farmer's Market"}
                onClick={handleClick}
                onChange={handleOptionChange}
              />
            }
            label="Farmer's Market [Regular 7'']"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Awesome Threesome"
            control={
              <Radio
                checked={selectedOption === "Awesome Threesome"}
                onClick={handleClick}
                onChange={handleOptionChange}
              />
            }
            label="Awesome Threesome [Regular 7'']"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Spicy Mexicano"
            control={
              <Radio
                checked={selectedOption === "Spicy Mexicano"}
                onClick={handleClick}
                onChange={handleOptionChange}
              />
            }
            label="Spicy Mexicano [Regular 7'']"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Magic Mushrooms"
            control={
              <Radio
                checked={selectedOption === "Magic Mushrooms"}
                onClick={handleClick}
                onChange={handleOptionChange}
              />
            }
            label="Magic Mushrooms [Regular 7'']"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Paneer Tikka"
            control={
              <Radio
                checked={selectedOption === "Paneer Tikka"}
                onClick={handleClick}
                onChange={handleOptionChange}
              />
            }
            label="Paneer Tikka [Regular 7'']"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Veggie Paradise"
            control={
              <Radio
                checked={selectedOption === "Veggie Paradise"}
                onClick={handleClick}
                onChange={handleOptionChange}
              />
            }
            label="Veggie Paradise [Regular 7'']"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Italian Garden"
            control={
              <Radio
                checked={selectedOption === "Italian Garden"}
                onClick={handleClick}
                onChange={handleOptionChange}
              />
            }
            label="Italian Garden [Regular 7'']"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>

      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={8}
      >
        <Typography>Items Added {count}/2</Typography>
        <Button variant="contained" endIcon={<ArrowRightIcon />}>
          Next
        </Button>
      </Stack>
    </>
  );
};

export default Bundle;
