import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  Box,
  IconButton,
} from "@mui/material";
import StarRating from "../../components/rating";
import product from "../../assets/images/games/games.png";
import { FavoriteBorder } from "@mui/icons-material";
const games = [
  {
    id: 1,
    title: "Black Myth Wukong",
    genre: "Action",
    rating: 5,
    price: 20,
    image: product,
  },
  {
    id: 2,
    title: "Black Myth Wukong",
    genre: "RPG",
    rating: 4,
    price: 40,
    image: product,
  },
  {
    id: 3,
    title: "Black Myth Wukong",
    genre: "Shooter",
    rating: 3,
    price: 30,
    image: product,
  },
  {
    id: 4,
    title: "Black Myth Wukong",
    genre: "Action",
    rating: 2,
    price: 10,
    image: product,
  },
];

const genres = ["Action", "RPG", "Shooter"];
const ratings = [1, 2, 3, 4, 5];

export default function Game() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  // const [isFavorite, setIsFavorite] = useState(false);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const handlePriceChange = (_, newValue) => {
    setPriceRange(newValue);
  };

  const filteredGames = games.filter(
    (game) =>
      (selectedGenres.length === 0 || selectedGenres.includes(game.genre)) &&
      (selectedRatings.length === 0 || selectedRatings.includes(game.rating)) &&
      game.price >= priceRange[0] &&
      game.price <= priceRange[1]
  );

  return (
    <Box sx={{ backgroundColor: "#191a1a" }}>
      <Container sx={{ padding: "100px 0" }}>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={3}>
            <Box
              sx={{
                marginBottom: "30px",
                borderRadius: "20px",
                padding: "20px",
                backgroundColor: "#232323",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  marginBottom: "5px",
                  fontWeight: "800",
                }}
              >
                Category
              </Typography>
              <FormGroup>
                {genres.map((genre) => (
                  <FormControlLabel
                    key={genre}
                    control={
                      <Checkbox
                        onChange={() => handleGenreChange(genre)}
                        sx={{
                          "&.Mui-checked": {
                            color: "#FF8000",
                          },
                        }}
                      />
                    }
                    label={genre}
                  />
                ))}
              </FormGroup>
            </Box>

            <Box
              sx={{
                marginBottom: "30px",
                borderRadius: "20px",
                padding: "20px",
                backgroundColor: "#232323",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  marginBottom: "5px",
                  fontWeight: "800",
                }}
              >
                Rating
              </Typography>
              <FormGroup>
                {ratings.map((rating) => (
                  <FormControlLabel
                    key={rating}
                    control={
                      <Checkbox
                        onChange={() => handleRatingChange(rating)}
                        sx={{
                          "&.Mui-checked": {
                            color: "#FF8000",
                          },
                        }}
                      />
                    }
                    label={<StarRating value={rating} readOnly />}
                  />
                ))}
              </FormGroup>
            </Box>

            <Box
              sx={{
                marginBottom: "30px",
                borderRadius: "20px",
                padding: "20px",
                backgroundColor: "#232323",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  marginBottom: "5px",
                  fontWeight: "800",
                }}
              >
                Price
              </Typography>

              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                min={0}
                max={500}
                valueLabelDisplay="auto"
                sx={{
                  color: "#FF8000",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <Typography variant="body2" color="white">
                  0
                </Typography>
                <Typography variant="body2" color="white">
                  500
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Game List */}
          <Grid item xs={9} container spacing={3}>
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <Grid item xs={4} key={game.id}>
                  <Box
                    sx={{
                      position: "relative",
                      marginBottom: "30px",
                      padding: "15px 15px 14px",
                      borderRadius: "20px",
                      backgroundColor: "#1e1e1e",
                      transition: "all 0.3s",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-10px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={game.image}
                      alt={game.title}
                      sx={{
                        borderRadius: "20px",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                    <IconButton
                      sx={{
                        width: "30px",
                        height: "30px",
                        position: "absolute",
                        top: 30,
                        right: 30,
                        backgroundColor: "#FFFFFF33",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                        },
                      }}
                      // onClick={(e) => {
                      //   e.stopPropagation(); // Ngăn chặn sự kiện click lan ra Box
                      //   setIsFavorite(!isFavorite);
                      // }}
                    >
                      <FavoriteBorder sx={{ fontSize: "15px" }} />
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: "5px",
                        fontSize: "18px",
                        fontWeight: "600",
                        "&:hover": {
                          color: "#FF8000",
                          transition: "all 0.3s",
                        },
                      }}
                    >
                      {game.title}
                    </Typography>
                    {/* <Typography variant="body2">
                    Thể loại: {game.genre}
                  </Typography> */}
                    <Box
                      sx={{
                        marginTop: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <StarRating value={game.rating} readOnly />
                      <Typography variant="body2" sx={{ fontWeight: "600" }}>
                        ${game.price}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "18px",
                  }}
                >
                  Không tìm thấy game{" "}
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
