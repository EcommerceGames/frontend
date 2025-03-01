import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BannerAbout from "../../assets/images/abouts/slider.png";
import StarRating from "../rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ButtonSlide from "../button/buttonSlide";

export default function AboutGameZone() {
  return (
    <Grid container spacing={2} >
      <Grid item sm={12} md={12} lg={7} sx={{ padding: "0 15px" }}>
        <Box sx={{ position: "relative", zIndex: "1" }}>
          <Box
            component="img"
            src={BannerAbout}
            sx={{ maxWidth: " 100%", height: "auto", width: "100%" }}
          />
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.ButtonColor.main,
              width: "100%",
              maxWidth: "287px",
              height: "140px",
              padding: "40px 0px 40px 30px",
              position: "absolute",
              right: "-45px",
              bottom: "80px",
            }}
          >
            <Typography variant="h3" component="h3" sx={{ fontSize: "18px" }}>
              EXPERIENCE A FRESH TAKE.
            </Typography>
            <StarRating value={3.5} />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={12} md={12} lg={5} sx={{ padding: " 0 15px" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          style={{ maxWidth: "100%", overflow: "hidden" }}
        >
          <SwiperSlide style={{ maxWidth: "470px", marginRight: "30px" }}>
            <Box sx={{ padding: "140px 0px 0px 40px" }}>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  color: (theme) => theme.palette.ButtonColor.main,
                  fontSize: "18px",
                  letterSpacing: "2px",
                  textTransform: "capitalize",
                  paddingBottom: "15px",
                  fontWeight: "800",
                }}
              >
                {" "}
                ABOUT GAME ZONE
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  fontSize: "42px",
                  textTransform: "capitalize",
                  fontWeight: "500",
                }}
              >
                Lorem ipsum dolor sit consectetur.
              </Typography>
              <Typography
                sx={{
                  padding: "20px 0px 27px",
                  fontSize: "14px",
                  maxWidth: "445px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                vitae nam voluptates, harum, ipsam possimus fugit tempora at
                doloremque corrupti ut id qui consequuntur tempore facere quos
                commodi sed magni?
              </Typography>
              <Typography sx={{ fontSize: "14px", maxWidth: "445px" }}>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris
              </Typography>
              <ButtonSlide text={"View More"} />
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "470px", marginRight: "30px" }}>
            <Box sx={{ padding: "140px 0px 0px 40px" }}>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  color: (theme) => theme.palette.ButtonColor.main,
                  fontSize: "18px",
                  letterSpacing: "2px",
                  textTransform: "capitalize",
                  paddingBottom: "15px",
                  fontWeight: "800",
                }}
              >
                {" "}
                ABOUT GAME ZONE
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  fontSize: "42px",
                  textTransform: "capitalize",
                  fontWeight: "500",
                }}
              >
                consectetur adipisicing elit. Cum nobis
              </Typography>
              <Typography
                sx={{
                  padding: "20px 0px 27px",
                  fontSize: "14px",
                  maxWidth: "445px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                vitae nam voluptates, harum, ipsam possimus fugit tempora at
                doloremque corrupti ut id qui consequuntur tempore facere quos
                commodi sed magni?
              </Typography>

              <ButtonSlide text={"View More"} />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </Grid>
  );
}
