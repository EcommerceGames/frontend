import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/header";
import Footer from "../components/footer";
import { Container } from "@mui/material";

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
      <Container disableGutters maxWidth="lg">
        <Box
          sx={{
            height: (theme) => theme.GameZone.heightHeader,
            padding: (theme) => theme.GameZone.paddingHeader,
          }}
        >
          <Header />
        </Box>
        <AppLayout>{children}</AppLayout>
        <Box>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
}
