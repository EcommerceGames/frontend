import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarRating from "../../components/rating";
import { deleteWishList, getWishList } from "../../redux/slide/apiRequest";
import CloseIcon from "@mui/icons-material/Close";
import DialogClose from "../../components/dialogClose";
export default function Wishlist() {
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedWishlistId, setSelectedWishlistId] = useState(null);
  console.log("check", selectedWishlistId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.currentUser);
  const { currentWhiList } = useSelector((state) => state.wishlist.wishlist);
  console.log("danh sahc", currentWhiList);

  useEffect(() => {
    if (user?._id) {
      dispatch(getWishList(user?._id));
    }
  }, [user?._id, dispatch, refresh]);
  //Dialog
  const handleOpen = (wishlistId) => {
    setSelectedWishlistId(wishlistId);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  //DeleteWishlist
  const handleConfirm = () => {
    if (selectedWishlistId) {
      setOpen(false);
      dispatch(deleteWishList(selectedWishlistId)).then(() => {
        setRefresh((prev) => !prev);
      });
    }
  };
  return (
    <Box sx={{ backgroundColor: "#191a1a" }}>
      <Container disableGutters maxWidth="lg" sx={{ padding: "80px 15px" }}>
        <Grid item xs={12} container spacing={3}>
          {currentWhiList?.length > 0 ? (
            currentWhiList?.map((game) => (
              <Grid item xs={12} sm={6} md={3} key={game?.game_id?._id}>
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
                    src={game?.game_id?.image}
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
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpen(game?._id);
                    }}
                  >
                    <CloseIcon sx={{ fontSize: "15px" }} />
                  </IconButton>
                  <DialogClose
                    open={open}
                    onClose={handleClose}
                    onConfirm={handleConfirm}
                  />
                  <Typography
                    variant="h6"
                    onClick={() => navigate(`/games/${game?.game_id?._id}`)}
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
                    {game?.game_id?.title}
                  </Typography>

                  <Box
                    sx={{
                      marginTop: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <StarRating value={game?.game_id?.rating} readOnly />
                    <Typography variant="body2" sx={{ fontWeight: "600" }}>
                      ${game?.game_id?.price}
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
      </Container>
    </Box>
  );
}
