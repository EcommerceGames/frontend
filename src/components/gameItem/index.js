import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailGame } from "../../redux/slide/apiRequest";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  Rating,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import product from "../../assets/images/games/games.png";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const game = {
  name: "Epic Game",
  price: "$49.99",
  rating: 4.5,
  images: [
    "/images/game1.png",
    "/images/game2.png",
    "/images/game3.png",
    "/images/game4.png",
  ],
  video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  description:
    "A thrilling adventure game with amazing graphics and storyline.",
};
const images = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
  "https://swiperjs.com/demos/images/nature-10.jpg",
];
export default function GameItem() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  //   console.log("id", id);
  const dispatch = useDispatch();
  const { selectedGame } = useSelector((state) => state.game.gameDetail);
  console.log("gamesitem", selectedGame);
  useEffect(() => {
    dispatch(getDetailGame(id, dispatch));
  }, [dispatch, id]);
  return (
    <Box sx={{ backgroundColor: "#191a1a" }}>
      <Container disableGutters maxWidth="lg" sx={{ padding: "80px 15px" }}>
        {/* Game Details */}
        <Grid
          container
          spacing={4}
          
        >
          <Grid item xs={12} md={7}>
            <Box sx={{ backgroundColor: "#000", padding: 2 }}>
              {/* Swiper chính */}
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      component="img"
                      src={img}
                      sx={{ width: "100%", objectFit: "cover" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper thumbnails */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                sx={{ marginTop: 2 }}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      component="img"
                      src={img}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.4,
                        "&.swiper-slide-thumb-active": { opacity: 1 },
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h4">{selectedGame.title}</Typography>
            <Typography variant="h6" color="primary">
              ${selectedGame.price}
            </Typography>
            <Rating value={selectedGame.rating} readOnly />
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Buy Now
              </Button>
              <Button variant="outlined" sx={{ mr: 2 }}>
                Add to Cart
              </Button>
              <Button variant="outlined">Add to Wishlist</Button>
            </Box>
          </Grid>
        </Grid>

        {/* Game Video Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5">Game Trailer</Typography>
          <iframe
            width="100%"
            height="400"
            src={game.video}
            title="Game Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        {/* Reviews & Comments */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5">Reviews & Comments</Typography>
          <TextField
            fullWidth
            label="Write a comment..."
            multiline
            rows={3}
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <Button variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
