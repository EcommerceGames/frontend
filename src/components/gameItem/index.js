import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addWishList, getDetailGame } from "../../redux/slide/apiRequest";
import Games from "../../assets/images/homepage/games.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import product from "../../assets/images/games/games.png";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import StarRating from "../rating";
import HeadingBottom from "../../assets/images/homepage/heading-border.png";
import { FavoriteBorder } from "@mui/icons-material";
// const game = {
//   name: "Epic Game",
//   price: "$49.99",
//   rating: 4.5,
//   images: [
//     "/images/game1.png",
//     "/images/game2.png",
//     "/images/game3.png",
//     "/images/game4.png",
//   ],
//   video: "https://www.youtube.com/embed/5pL3joRyeGY",
//   description:
//     "A thrilling adventure game with amazing graphics and storyline.",
// };
const images = [product, product, product, product];

const comments = [
  {
    avatar: product,
    name: "Nam",
    text: "Game hay",
  },
];
const arr = [
  {
    img: Games,
    nameGames: "Experience a fresh take.",
    quantity: "3",
  },
  {
    img: Games,
    nameGames: "Experience a fresh take.",
    quantity: "3",
  },
  {
    img: Games,
    nameGames: "Experience a fresh take.",
    quantity: "3",
  },
  {
    img: Games,
    nameGames: "Experience a fresh take.",
    quantity: "3",
  },
  {
    img: Games,
    nameGames: "Experience a fresh take.",
    quantity: "3",
  },
  {
    img: Games,
    nameGames: "Experience a fresh take.",
    quantity: "3",
  },
  {
    img: Games,
    nameGames: "Experience a fresh take.",
    quantity: "3",
  },
  {
    img: Games,
    nameGames: "Experience a fresh take.",
    quantity: "3",
  },
  {
    img: Games,
    nameGames: "Experience a fresh take.",
    quantity: "3",
  },
];
export default function GameItem() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  //   console.log("id", id);
  const dispatch = useDispatch();
  const { selectedGame } = useSelector((state) => state.game.gameDetail);
  const user = useSelector((state) => state.user.user.currentUser);
  // console.log("gamesitem", selectedGame);
  // console.log("userid", user?._id);
  useEffect(() => {
    dispatch(getDetailGame(id, dispatch));
  }, [dispatch, id]);

  //addWishList
  const handleAddWishList = () => {
    dispatch(addWishList({ user_id: user?._id, game_id: id }));
  };
  return (
    <Box sx={{ backgroundColor: "#191a1a" }}>
      <Container disableGutters maxWidth="lg" sx={{ padding: "80px 15px" }}>
        {/* Game Details */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box sx={{ height: "500px" }}>
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
                      sx={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                      }}
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
                        height: "100px",
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
            <Typography variant="h4" sx={{ fontWeight: "600" }}>
              {selectedGame?.title}
            </Typography>

            <Typography variant="h6" sx={{ color: "#FF8000" }}>
              ${selectedGame?.price}
            </Typography>
            <StarRating value={selectedGame?.rating} readOnly />
            <Typography sx={{ fontSize: "14px", color: "#CCCC" }}>
              {selectedGame?.content}
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  border: "2px solid #FF8000",
                  mr: 1,
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#FF8000",
                  },
                }}
              >
                Buy Now
              </Button>
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid #FF8000",
                  mr: 1,
                  backgroundColor: "transparent",
                  color: "#FFF",
                  "&:hover": {
                    backgroundColor: "#FF8000",
                  },
                }}
              >
                <ShoppingCartIcon sx={{ marginRight: "5px" }} />
                Add to Cart
              </Button>
              <Button
                onClick={handleAddWishList}
                variant="outlined"
                sx={{
                  border: "2px solid #FF8000",
                  mr: 1,
                  backgroundColor: "transparent",
                  color: "#FFF",
                  "&:hover": {
                    backgroundColor: "#FF8000",
                  },
                }}
              >
                <FavoriteBorder sx={{ marginRight: "5px" }} />
                Add to Wishlist
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Game Video Section */}
        <Box sx={{ mt: 20 }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box component="img" src={HeadingBottom} />
            </Box>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: (theme) => theme.palette.text.secondary,
                letterSpacing: "2px",
                padding: "6px 0px 6px",
                textAlign: "center",
              }}
            >
              GAME TRAILER
            </Typography>
          </Box>
          <iframe
            width="100%"
            height="500"
            src={selectedGame?.video}
            title="Game Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        {/* Reviews & Comments */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" color="#FF8000">
            Reviews & Comments
          </Typography>

          {/* Hiển thị danh sách bình luận */}
          <Box sx={{ mt: 2 }}>
            {comments.map((comment) => (
              <Box
                key={comment.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  borderBottom: "1px solid #444",
                  paddingBottom: "10px",
                  mb: 2,
                }}
              >
                {/* Avatar người dùng */}
                <Box
                  component="img"
                  src={comment.avatar}
                  sx={{ width: 50, height: 50, borderRadius: "50%" }}
                />

                {/* Nội dung bình luận */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    color="#FF8000"
                    fontWeight="bold"
                  >
                    {comment.name}
                  </Typography>
                  <Typography variant="body1" color="#FFF">
                    {comment.text}
                  </Typography>
                  {/* Biểu tượng like và tim */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      mt: 1,
                    }}
                  ></Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Ô nhập bình luận */}
          <TextField
            fullWidth
            label="Write a comment..."
            multiline
            rows={3}
            variant="outlined"
            sx={{
              marginTop: "10px",
              input: { color: "#FF8000" },
              "& label.Mui-focused": { color: "#FF8000" },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": { borderColor: "#FF8000" },
                "&:hover fieldset": { borderColor: "#FF8000" },
              },
            }}
            // value={newComment}
            // onChange={(e) => setNewComment(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              border: "2px solid #FF8000",
              mr: 2,
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#FF8000",
              },
            }}
            // onClick={handleSubmitComment}
          >
            Submit
          </Button>
        </Box>

        {/* List Game */}
        <Box sx={{ padding: "71px 10px 72px", position: "relative" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box component="img" src={HeadingBottom} />
            </Box>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: (theme) => theme.palette.text.secondary,
                letterSpacing: "2px",
                padding: "6px 0px 6px",
                textAlign: "center",
              }}
            >
              TOP GAMES
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{ fontSize: "32px", textAlign: "center" }}
            >
              OUR LATEST GAMES
            </Typography>
          </Box>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            style={{ maxWidth: "100%", overflow: "hidden" }}
          >
            {arr.map((item, index) => (
              <SwiperSlide key={index}>
                <Box sx={{ maxWidth: "185px" }}>
                  <Box
                    sx={{
                      position: "relative",
                      "&:hover .hoverBox, &:hover .cartBox": { opacity: 1 },
                    }}
                  >
                    <Box component="img" src={Games} sx={{ width: "100%" }} />

                    <Box
                      className="hoverBox"
                      sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(180deg, rgba(255, 128, 0, 0) 0%, rgba(255, 128, 0, 0.90196) 100%)",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    />

                    <Box
                      className="cartBox"
                      sx={{
                        cursor: "pointer",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "20px",
                        maxWidth: "148px",
                        margin: "0 auto",
                        padding: "5px 0",
                        textAlign: "center",
                        border: "1px solid #FFFFFF",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      ADD TO CART
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      component="h4"
                      sx={{
                        fontSize: "16px",
                        padding: "23px 0px 6px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                        cursor: "pointer",
                        "&:hover": {
                          color: (theme) => theme.palette.text.secondary,
                          transition: "all 0.3s",
                        },
                      }}
                    >
                      {item.nameGames}
                    </Typography>
                    <StarRating value={item.quantity} />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
