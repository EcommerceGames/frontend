import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/header";
import Footer from "../components/footer";
import { Container } from "@mui/material";
import BackgroundBanner from "../assets/images/banner/background.png";
const AppLayout = ({ children }) => {
  return (
    <>
      <>{children}</>
    </>
  );
};
export default function DefaultLayout({ children }) {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${BackgroundBanner})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      >
        <Container disableGutters maxWidth="lg">
          <Header />
        </Container>
      </Box>
      <Container disableGutters maxWidth="lg">
        <AppLayout>{children}</AppLayout>
        <Box>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
}
