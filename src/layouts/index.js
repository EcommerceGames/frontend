import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Header from "../components/header";
import Footer from "../components/footer";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Slider from "../components/slider";
import SliderOther from "../components/slider/sliderOther";

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
  const headerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.clientHeight;
        window.scrollY > headerHeight
          ? setBgColor("black")
          : setBgColor("transparent");
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
        ref={headerRef}
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
      {isHomePage ? <Slider /> : <SliderOther />}

      <AppLayout>{children}</AppLayout>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
