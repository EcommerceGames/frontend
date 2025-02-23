import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import LogoHeader from "../../assets/images/logo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Footer() {
  const Product = [
    {
      title: "Ancient Evil",
    },
    {
      title: "Fantasy & Game Control",
    },
    {
      title: "Horror & Mirror",
    },
    {
      title: "Gun Shooting",
    },
    {
      title: "MS-XBOX",
    },
    {
      title: "War Game",
    },
  ];
  const NeedHelp = [
    {
      title: "Company",
    },
    {
      title: "For the fans",
    },
    {
      title: "Press & See our rule policy",
    },
    {
      title: "Privacy",
    },
    {
      title: "Policy",
    },
  ];
  const Company = [{ title: "Help Center" }, { title: "Platform status" }];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ padding: "0 15px" }}>
          <Box
            component="img"
            src={LogoHeader}
            sx={{
              height: "72px",
            }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              padding: "21px 0 20px",
            }}
          >
            Consectetur adipiscing elit, 7sed deiusmod tempor incididunt ut
            labore et dolo agna aliqendisse ultrices gravida.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ padding: "0 15px" }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: "20px",
              padding: "25px 0px 17px",
            }}
          >
            Product
          </Typography>
          <List
            sx={{
              padding: "0",
            }}
          >
            {Product.map((item, index) => (
              <ListItem
                sx={{
                  padding: "0 0 13px 0",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: (theme) => theme.palette.ButtonColor.main,
                    cursor: "pointer",
                  },
                }}
                key={index}
              >
                <Box
                  component="span"
                  sx={{
                    width: "100%",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                  {item.title}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <Box sx={{ padding: "0 15px" }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: "20px",
              padding: "25px 0px 17px",
            }}
          >
            NEED HELP?
          </Typography>
          <List
            sx={{
              padding: "0",
            }}
          >
            {NeedHelp.map((item, index) => (
              <ListItem
                sx={{
                  padding: "0 0 13px 0",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: (theme) => theme.palette.ButtonColor.main,
                    cursor: "pointer",
                  },
                }}
                key={index}
              >
                <Box
                  component="span"
                  sx={{
                    width: "100%",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                  {item.title}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <Box sx={{ padding: "0 15px" }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: "20px",
              padding: "25px 0px 17px",
            }}
          >
            Company
          </Typography>
          <List
            sx={{
              padding: "0",
            }}
          >
            {Company.map((item, index) => (
              <ListItem
                sx={{
                  padding: "0 0 13px 0",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: (theme) => theme.palette.ButtonColor.main,
                    cursor: "pointer",
                  },
                }}
                key={index}
              >
                <Box
                  component="span"
                  sx={{
                    width: "100%",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                  {item.title}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ padding: "0 15px" }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: "20px",
              padding: "25px 0px 17px",
            }}
          >
            Join the community
          </Typography>
          <List
            sx={{
              padding: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ListItem sx={{ padding: "0 0 13px 0", transition: "all 0.3s" }}>
              <FacebookOutlinedIcon
                sx={{
                  fontSize: "30px",
                  transition: "all 0.3s",
                  borderRadius: "50%",
                  padding: "5px",
                  "&:hover": {
                    backgroundColor: "#1877F2",
                    color: "white",
                  },
                }}
              />
            </ListItem>
            <ListItem sx={{ padding: "0 0 13px 0", transition: "all 0.3s" }}>
              <TwitterIcon
                sx={{
                  fontSize: "30px",
                  transition: "all 0.3s",
                  borderRadius: "50%",
                  padding: "5px",
                  "&:hover": {
                    backgroundColor: "#1877F2",
                    color: "white",
                  },
                }}
              />
            </ListItem>
            <ListItem sx={{ padding: "0 0 13px 0", transition: "all 0.3s" }}>
              <YouTubeIcon
                sx={{
                  fontSize: "30px",
                  transition: "all 0.3s",
                  borderRadius: "50%",
                  padding: "5px",
                  "&:hover": {
                    backgroundColor: "#FF0000",
                    color: "white",
                  },
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
}
