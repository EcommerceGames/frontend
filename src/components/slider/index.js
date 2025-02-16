import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Typography } from "@mui/material";
import Test from "../../assets/images/slider/slider.png";
import ButtonSlide from "../button/buttonSlide";
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
    <Swiper spaceBetween={50} slidesPerView={3}>
      {Slide.map((item, index) => (
        <SwiperSlide
          style={{ maxWidth: "483px", marginRight: "30px" }}
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
  );
}
