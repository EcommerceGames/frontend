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
  const [boxShadow, setBoxShadow] = useState("none");
  const headerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.clientHeight;
        const scrolled = window.scrollY > headerHeight;
        if (isHomePage) {
          setBgColor(scrolled ? "#1d1f1f" : "transparent");
          setBoxShadow(
            scrolled ? "1.5px 3.99px 27px 0px rgb(255 255 255 / 10%)" : "none"
          );
        }
        if (!isHomePage) {
          setBgColor("#1d1f1f");
          setBoxShadow(
            scrolled ? "1.5px 3.99px 27px 0px rgb(255 255 255 / 10%)" : "none"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);
  useEffect(() => {
    setBgColor(isHomePage ? "transparent" : "#1d1f1f");
    setBoxShadow("none");
    window.scrollTo(0, 0);
  }, [location.pathname, isHomePage]);
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
          transition: "background-color 0.2s ease-in-out",
          backgroundColor: bgColor,
          boxShadow: boxShadow,
        }}
      >
        <Container disableGutters maxWidth="lg">
          <Header />
        </Container>
      </Box>
      {isHomePage ? <Slider /> : <SliderOther />}

      <AppLayout>{children}</AppLayout>
      <Box
        sx={{
          padding: "71px 0px 59px ",
          backgroundColor: "#1d1f1f",
        }}
      >
        <Container disableGutters maxWidth="lg">
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}
