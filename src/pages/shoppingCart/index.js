import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import HeadingBottom from "../../assets/images/homepage/heading-border.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../../redux/slide/apiRequest";
import DialogClose from "../../components/dialogClose";
import toast from "react-hot-toast";
// const initialCart = [
//   {
//     id: 1,
//     name: "Sản phẩm 1",
//     price: 200000,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: 2,
//     name: "Sản phẩm 2",
//     price: 150000,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: 3,
//     name: "Sản phẩm 3",
//     price: 300000,
//     image: "https://via.placeholder.com/100",
//   },
// ];

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.currentUser);
  const [selectedWishlistId, setSelectedWishlistId] = useState(null);
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  //get CartUser
  useEffect(() => {
    dispatch(getCart(user?._id));
  }, [user?._id, dispatch, refresh]);
  const items = useSelector((state) => state.cart.shopCart.items.items);
  // console.log("tong tien", items);
  //Dialog
  const handleOpen = (wishlistId) => {
    setSelectedWishlistId(wishlistId);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  //DeleteShopCart
  const handleConfirm = () => {
    if (selectedWishlistId) {
      setOpen(false);
      dispatch(
        deleteCart({ user_id: user?._id, game_id: selectedWishlistId })
      ).then(() => {
        setRefresh((prev) => !prev);
      });
      toast.success("DeleteCart successfully");
    }
  };
  //total price
  const totalPrice = items.reduce((sum, item) => {
    return sum + Number(item.game_id.price) * item.quantity;
  }, 0);
  return (
    <Box sx={{ backgroundColor: "#191a1a" }}>
      <Container disableGutters maxWidth="lg" sx={{ padding: "80px 15px" }}>
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
            My ShopCart
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {/* Phần giỏ hàng */}
          <Grid item xs={8}>
            {items.map((item) => (
              <Card
                key={item.game_id._id}
                sx={{
                  display: "flex",
                  mb: 2,
                  alignItems: "center",
                  backgroundColor: "#1e1e1e",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 100, borderRadius: "10px" }}
                  image={item.game_id.image}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                    {item.game_id.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.game_id.price} $
                  </Typography>
                </CardContent>
                <IconButton
                  color="error"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen(item?.game_id?._id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <DialogClose
                  open={open}
                  onClose={handleClose}
                  onConfirm={handleConfirm}
                />
              </Card>
            ))}
          </Grid>

          {/* Phần tính toán */}
          <Grid item xs={4}>
            <Box p={3} sx={{ border: "1px solid #ddd", borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total amount:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {totalPrice} $
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: "#FF8000" }}
              >
                Product payment
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
