import SignIn from "../pages/signin";
import AboutUs from "../pages/aboutUs";
import Blog from "../pages/blogs";
import ContactUs from "../pages/contactUs";
import Games from "../pages/games";
import HomePage from "../pages/homePage";

export const routes = [
  { path: "/login", page: SignIn, isShowHeader: false },
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/aboutUs",
    page: AboutUs,
    isShowHeader: true,
  },
  {
    path: "/games",
    page: Games,
    isShowHeader: true,
  },
  {
    path: "/blogs",
    page: Blog,
    isShowHeader: true,
  },
  {
    path: "/contactUs",
    page: ContactUs,
    isShowHeader: true,
  },
];
