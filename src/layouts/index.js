import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/header";
import Footer from "../components/footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <>{children}</>
    </>
  );
};
export default function DefaultLayout({ children }) {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <AppLayout>{children}</AppLayout>
      <Box>
        <Footer />
      </Box>
    </>
  );
}
