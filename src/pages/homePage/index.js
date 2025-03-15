import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import AboutGameZone from "../../components/about";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeadingBottom from "../../assets/images/homepage/heading-border.png";
import Games from "../../assets/images/homepage/games.png";
import StarRating from "../../components/rating";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Newsletter from "../../components/newsletter";

export default function HomePage() {
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
  const images = [Games, Games, Games, Games];
  const swiperRef = useRef(null);
  return (
    <Box>
      <Box sx={{ backgroundColor: "#1d1f1f" }}>
        <Container disableGutters maxWidth="lg">
          <Box sx={{ padding: "100px 15px" }}>
            <AboutGameZone />
          </Box>
        </Container>
      </Box>
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
            RECENT GAMES
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{ fontSize: "32px", textAlign: "center" }}
          >
            YOUR RECENT GAMES
          </Typography>
        </Box>
        <Swiper
          spaceBetween={50}
          slidesPerView={7}
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
      <Box
        sx={{
          backgroundColor: "#1d1f1f",
          position: "relative",
          width: "100%",
          padding: "71px 10px 72px",
        }}
      >
        <Box sx={{ marginBottom: "30px" }}>
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
            TRAILER
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{ fontSize: "32px", textAlign: "center" }}
          >
            OUR LATEST GAME TRAILER
          </Typography>
        </Box>
        <Box>
          <IconButton
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            sx={{
              width: "50px",
              height: "50px",
              position: "absolute",
              top: "50%",
              left: 175,
              zIndex: 10,
              transform: "translateY(-50%)",
              bgcolor: "#FF8C00",
              color: "#fff",
              "&:hover": { bgcolor: "#E67300" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Swiper */}
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            spaceBetween={10}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            style={{ width: "100%", maxWidth: "900px" }}
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width: "400px",
                  height: "250px",
                }}
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nút Next */}
          <IconButton
            onClick={() => swiperRef.current?.swiper.slideNext()}
            sx={{
              width: "50px",
              height: "50px",
              position: "absolute",
              top: "50%",
              right: 175,
              zIndex: 10,
              transform: "translateY(-50%)",
              bgcolor: "#FF8C00",
              color: "#fff",
              "&:hover": { bgcolor: "#E67300" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
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
          slidesPerView={7}
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
      <Box sx={{ backgroundColor: "#1d1f1f" }}>
        <Newsletter />
      </Box>
    </Box>
  );
}
