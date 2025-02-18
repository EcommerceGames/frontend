import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "../components/header";
import Footer from "../components/footer";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Slider from "../components/slider";

const AppLayout = ({ children }) => {
  return (
    <>
      <>{children}</>
    </>
  );
};
export default function DefaultLayout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 64; // Độ cao của header (có thể thay đổi nếu cần)
      if (window.scrollY > headerHeight) {
        setBgColor("black"); // Header đen khi kéo xuống qua chiều cao của nó
      } else {
        setBgColor("transparent"); // Header trong suốt khi ở trên
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          transition: "background-color 0.3s ease-in-out",
          backgroundColor: bgColor,
        }}
      >
        <Container disableGutters maxWidth="lg">
          <Header />
        </Container>
      </Box>
      <Box sx={{ display: isHomePage ? "block" : "none" }}>
        <Slider />
      </Box>
      <AppLayout>{children}</AppLayout>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
