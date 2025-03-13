import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailGame } from "../../redux/slide/apiRequest";
import { Box, Container } from "@mui/material";

export default function GameItem() {
  const { id } = useParams();
  //   console.log("id", id);
  const dispatch = useDispatch();
  const { selectedGame } = useSelector((state) => state.game.gameDetail);
  console.log("gamesitem", selectedGame);
  useEffect(() => {
    dispatch(getDetailGame(id, dispatch));
  }, [dispatch, id]);
  return (
    <Box>
      <Container>haha</Container>
    </Box>
  );
}
