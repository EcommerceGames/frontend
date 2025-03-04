import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";
import {
  Email,
  Person,
  Phone,
  Message,
  ErrorOutline,
} from "@mui/icons-material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    issue: "",
    message: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );
    setError(isEmpty);
  };

  return (
    <Box sx={{ backgroundColor: "#121212" }}>
      <Container
        sx={{
          color: "#fff",
          p: 10,
          maxWidth: 600,
          mx: "auto",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ marginBottom: "50px" }}
        >
          SEND MESSAGE US
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <Person sx={{ color: "gray", mr: 1 }} />,
                }}
                sx={{ bgcolor: "#1e1e1e", borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Enter Your Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <Phone sx={{ color: "gray", mr: 1 }} />,
                }}
                sx={{ bgcolor: "#1e1e1e", borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <Email sx={{ color: "gray", mr: 1 }} />,
                }}
                sx={{ bgcolor: "#1e1e1e", borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Enter Your Issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                sx={{ bgcolor: "#1e1e1e", borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Enter Your Message..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <Message sx={{ color: "gray", mr: 1 }} />,
                }}
                sx={{ bgcolor: "#1e1e1e", borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "start" }}>
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
                Submit
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
      <Box>
        <iframe
          title="Google Map"
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          style={{ width: "100%", height: "500px" }}
          src="https://maps.google.com/maps?hl=en&q=Thăng long numberone Trung hòa cầu giấy hà nội&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactForm;
