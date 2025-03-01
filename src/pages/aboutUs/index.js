import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import AboutGameZone from "../../components/about";
import HeadingBottom from "../../assets/images/homepage/heading-border.png";
import Games from "../../assets/images/homepage/games.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Newsletter from "../../components/newsletter";
export default function AboutUs() {
  const images = [Games, Games, Games, Games];
  const swiperRef = useRef(null);
  return (
    <Box>
      <Container disableGutters maxWidth="lg" sx={{ padding: "50px 0 50px" }}>
        <AboutGameZone />
      </Container>
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
              left: 100,
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
              right: 100,
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
      <Box sx={{ backgroundColor: "#1d1f1f" }}>
        <Newsletter />
      </Box>
    </Box>
  );
}
