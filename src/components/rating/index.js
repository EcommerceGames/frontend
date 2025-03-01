import { Rating } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
const CustomRating = styled(Rating)({
  "& .MuiRating-icon": {
    fontSize: "20px",
  },
  "& .MuiRating-iconFilled": {
    color: "#ffab18",
  },
  "& .MuiRating-iconEmpty": {
    color: "#ffab18",
  },
});
export default function StarRating({ value }) {
  return (
    <CustomRating name="custom-rating" value={value} precision={0.5} readOnly />
  );
}
