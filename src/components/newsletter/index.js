import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import GamepadIcon from "@mui/icons-material/Gamepad";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import FileDownloadOffIcon from "@mui/icons-material/FileDownloadOff";
import NewsLetterBorder from "../../assets/images/homepage/newsletter-border.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Newsletter() {
  return (
    <Container
      disableGutters
      maxWidth="lg"
      sx={{ padding: "73px 0px 75px", maxWidth: "1170px" }}
    >
      <Grid container spacing={2}>
        <Grid item lg={4} md={4}>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.secondary,
              fontSize: "18px",
              letterSpacing: "2px",
            }}
          >
            DOWNLOAD
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              letterSpacing: "-0.5px",
            }}
          >
            DOWNLOAD OUR LATEST GAME
          </Typography>
          <Typography
            sx={{
              color: "#cdcdcd",
              fontSize: "16px",
              letterSpacing: "0px",
              padding: "13px 0px 9px",
            }}
          >
            Available on
          </Typography>
          <List sx={{ display: "flex", alignItems: "center" }}>
            <ListItem
              sx={{
                marginRight: "7px",
                backgroundColor: "#2b2d2d",
                transition: "all 0.3s",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "#FF8000",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <GamepadIcon />
            </ListItem>
            <ListItem
              sx={{
                marginRight: "7px",
                backgroundColor: "#2b2d2d",
                transition: "all 0.3s",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "#FF8000",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <WindowRoundedIcon />
            </ListItem>
            <ListItem
              sx={{
                marginRight: "7px",
                backgroundColor: "#2b2d2d",
                transition: "all 0.3s",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "#FF8000",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <FileDownloadOffIcon />
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={1} md={4}>
          <Box
            sx={{ padding: "0 50px" }}
            component="img"
            src={NewsLetterBorder}
          />
        </Grid>
        <Grid item lg={7} md={8}>
          <Box sx={{ paddingLeft: "90px" }}>
            <Typography
              sx={{
                fontSize: "18px",
                letterSpacing: "2px",
                color: "#FF8000",
              }}
            >
              LETS STAY IN TOUCH
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              Subscribe to our Newsletter
            </Typography>
            <Box sx={{ padding: "40px 0px 0px ", position: "relative" }}>
              <Input
                type="email"
                placeholder="Enter email..."
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutlineIcon
                      sx={{ color: "#FFFFFF", marginRight: "15px" }}
                    />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      sx={{
                        backgroundColor: "#FF8000",
                        color: "#FFFFFF",
                        borderRadius: "0px",
                        width: "140px",
                        height: "48px",
                      }}
                    >
                      Subscribe
                    </Button>
                  </InputAdornment>
                }
                sx={{
                  width: "100%",
                  maxWidth: "570px",
                  height: "70px",
                  padding: "0 60px 0 30px",
                  backgroundColor: "#212323",
                  border: "none",
                  "&:after": { borderBottom: "solid #FF8000" },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
