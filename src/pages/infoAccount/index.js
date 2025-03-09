import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Container,
  Avatar,
} from "@mui/material";
import { Email, Person, Phone, ErrorOutline } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";

export default function InfoAccount() {
  const user = useSelector((state) => state.user.user.currentUser);
  const [formData, setFormData] = useState({
    name: user.username,
    phone: user.phone,
    email: user.email,
    address: user.address,
    image: user.image,
  });

  const [error, setError] = useState(false);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some(
      (value) => typeof value === "string" && value.trim() === ""
    );
    setError(isEmpty);
  };

  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", py: 5 }}>
      <Container
        sx={{
          color: "#fff",
          p: 5,
          maxWidth: 600,
          mx: "auto",
          borderRadius: 2,
          backgroundColor: "#1e1e1e",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            {/* Avatar */}
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Avatar
                  src={formData.image || "/default-avatar.png"}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 1 }}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: "#FF8000", mt: 1 }}>
                Nhấp để chọn ảnh đại diện
              </Typography>
            </Grid>

            {/* Input Fields */}
            {[
              { label: "User Name", name: "name", icon: <Person /> },
              { label: "Your Phone", name: "phone", icon: <Phone /> },
              { label: "Your Email", name: "email", icon: <Email /> },
              { label: "Your Address", name: "address", icon: <HomeIcon /> },
            ].map((field, index) => (
              <Grid key={index} item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <Box sx={{ color: "gray", mr: 1 }}>{field.icon}</Box>
                    ),
                  }}
                  sx={{ bgcolor: "#292929", borderRadius: 1 }}
                />
              </Grid>
            ))}

            {/* Save Button */}
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "140px",
                  height: "48px",
                  bgcolor: "#FF8000",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Save
              </Button>

              {error && (
                <Typography
                  sx={{
                    color: "red",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ErrorOutline sx={{ mr: 1 }} /> You missed out some fields.
                </Typography>
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
