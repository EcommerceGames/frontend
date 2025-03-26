import React, { useState } from "react";
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

const initialCart = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 200000,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 150000,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 300000,
    image: "https://via.placeholder.com/100",
  },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState(initialCart);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <Box sx={{ backgroundColor: "#191a1a" }}>
      <Container disableGutters maxWidth="lg" sx={{ padding: "80px 15px" }}>
        <Grid container spacing={3}>
          {/* Phần giỏ hàng */}
          <Grid item xs={8}>
            {cart.map((item) => (
              <Card
                key={item.id}
                sx={{ display: "flex", mb: 2, alignItems: "center" }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 100 }}
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="text.secondary">
                    {item.price.toLocaleString()} VND
                  </Typography>
                </CardContent>
                <IconButton onClick={() => handleRemove(item.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Card>
            ))}
          </Grid>

          {/* Phần tính toán */}
          <Grid item xs={4}>
            <Box p={3} sx={{ border: "1px solid #ddd", borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Tổng tiền:
              </Typography>
              <Typography variant="h5" color="primary">
                {totalPrice.toLocaleString()} VND
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Thanh toán
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
