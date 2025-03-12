import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Container,
  Avatar,
} from "@mui/material";
import { Email, Person, Phone } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slide/apiRequest";

export default function InfoAccount() {
  const user = useSelector((state) => state.user.user.currentUser);
  const dispatch = useDispatch();
  // console.log("user", user);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username,
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
    image: user?.image,
  });

  useEffect(() => {
    setFormData({
      username: user?.username,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
      image: user?.image,
    });
  }, [user]);

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateUser({ ...user, ...formData }, dispatch);
    setIsEditing(false);
  };

  return (
    <Box sx={{ backgroundColor: "#121212", py: 10 }}>
      <Container
        disableGutters
        maxWidth="md"
        sx={{
          color: "#fff",
          p: 5,
          maxWidth: "400px",
          mx: "auto",
          borderRadius: 2,
          backgroundColor: "#1e1e1e",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{
            marginBottom: "50px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Information Account
        </Typography>
        <form>
          <Grid container spacing={3} justifyContent="center">
            {/* Avatar */}
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Avatar
                  src={formData?.image || "/default-avatar.png"}
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    mb: 1,
                    cursor: isEditing ? "pointer" : "default",
                  }}
                  onClick={() =>
                    isEditing && document.getElementById("avatar-input").click()
                  }
                />
                <input
                  id="avatar-input"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: "none" }}
                />
              </Box>
            </Grid>

            {[
              { label: "User Name", name: "username", icon: <Person /> },
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
                  disabled={field.label !== "Your Email" ? !isEditing : true}
                  InputProps={{
                    startAdornment: (
                      <Box sx={{ color: "gray", mr: 1 }}>{field.icon}</Box>
                    ),
                  }}
                  sx={{
                    bgcolor: "#292929",
                    borderRadius: 1,
                    "& .MuiInputBase-input.Mui-disabled": {
                      color: "gray",
                      WebkitTextFillColor: "gray",
                    },
                    "& label.Mui-disabled": {
                      color: "#FF8000",
                    },
                    "& label.Mui-focused": {
                      color: "#FF8000",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": { borderColor: "white" },
                      "&:hover fieldset": { borderColor: "white" },
                      "&.Mui-error fieldset": { borderColor: "red !important" },
                    },
                  }}
                />
              </Grid>
            ))}

            {/* Buttons */}
            <Grid
              item
              xs={12}
              sx={{ textAlign: "center", display: "flex", gap: "10px" }}
            >
              {isEditing ? (
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Button
                    onClick={handleSave}
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
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="contained"
                    sx={{
                      width: "140px",
                      height: "48px",
                      bgcolor: "#FF8000",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Cancle
                  </Button>
                </Box>
              ) : (
                <Button
                  onClick={handleEdit}
                  variant="contained"
                  sx={{
                    width: "140px",
                    height: "48px",
                    bgcolor: "#FF8000",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
