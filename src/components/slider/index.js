import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Typography } from "@mui/material";
import Test from "../../assets/images/slider/slider.png";
import ButtonSlide from "../button/buttonSlide";
import BackgroundBanner from "../../assets/images/banner/background.png";
import Border from "../../assets/images/banner/border.png";
export default function Slider() {
  const Slide = [
    {
      title: "EXPERIENCE A FRESH TAKE",
      image: "",
      content:
        "consectetur maiores impedit dolore accusamus, maxime enim iste eum corrupti quod temporibus earum, assumenda cupiditate cum. Earum ut est amet nobis eos. Sint eius vero placeat fuga vitae quis nihil aliquam quidem voluptate delectus aut, dolor eum voluptas?",
    },
    {
      title: "EXPERIENCE A FRESH TAKE",
      image: "",
      content:
        "consectetur maiores impedit dolore accusamus, maxime enim iste eum corrupti quod temporibus earum, assumenda cupiditate cum. Earum ut est amet nobis eos. Sint eius vero placeat fuga vitae quis nihil aliquam quidem voluptate delectus aut, dolor eum voluptas?",
    },
    {
      title: "EXPERIENCE A FRESH TAKE",
      image: "",
      content:
        "consectetur maiores impedit dolore accusamus, maxime enim iste eum corrupti quod temporibus earum, assumenda cupiditate cum. Earum ut est amet nobis eos. Sint eius vero placeat fuga vitae quis nihil aliquam quidem voluptate delectus aut, dolor eum voluptas?",
    },
    {
      title: "EXPERIENCE A FRESH TAKE",
      image: "",
      content:
        "consectetur maiores impedit dolore accusamus, maxime enim iste eum corrupti quod temporibus earum, assumenda cupiditate cum. Earum ut est amet nobis eos. Sint eius vero placeat fuga vitae quis nihil aliquam quidem voluptate delectus aut, dolor eum voluptas?",
    },
  ];
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundBanner})`,
        backgroundRepeat: "no-repeat",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "540px",
          paddingTop: "250px ",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            letterSpacing: "2px",
            color: (theme) => theme.palette.text.primary,
          }}
        >
          ARE YOU READY FOR NEW CHALLENGE?
        </Typography>
        <Box
          component="img"
          src={Border}
          sx={{
            maxWidth: "100%",
            height: "auto",
            width: "100%",
          }}
        />
        <Typography
          sx={{
            fontSize: "40px",
            paddingTop: "12px",
            lineHeight: "1.3",
            color: (theme) => theme.palette.text.primary,
            fontWeight: "800",
          }}
        >
          EXPERIENCE A{" "}
          <Typography
            component="span"
            sx={{
              backgroundColor: (theme) => theme.palette.ButtonColor.main,
              maxWidth: "250px",
              padding: "10px 5px",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: "800",
            }}
          >
            FRESH TAKE
          </Typography>
          <br />
          ON THE SURVIVAL
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: (theme) => theme.palette.text.hint }}
        >
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </Typography>
      </Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        style={{ maxWidth: "100%", overflow: "hidden" }}
      >
        {Slide.map((item, index) => (
          <SwiperSlide
            style={{ maxWidth: "470px", marginRight: "30px" }}
            key={index}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "10px",
                marginTop: "40px",
                backgroundColor: (theme) => theme.palette.background.primary,
                height: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={Test}
                sx={{
                  width: "200px",
                  marginTop: "30px",
                  borderRadius: "10px",
                  position: "absolute",
                  left: "25px",
                  top: "0",
                }}
              />
              <Box
                sx={{
                  padding: "30px 20px 30px 245px",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "16px",
                    paddingBottom: "7px",
                    color: "#FF8000",
                    fontWeight: "500",
                    letterSpacing: "0,5px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    paddingTop: "7px",
                    color: (theme) => theme.palette.text.primary,
                  }}
                >
                  {item.content}
                </Typography>
                <ButtonSlide />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
