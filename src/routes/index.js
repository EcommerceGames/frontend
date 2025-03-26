import SignIn from "../pages/signin";
import AboutUs from "../pages/aboutUs";
import Blog from "../pages/blogs";
import ContactUs from "../pages/contactUs";
import Games from "../pages/games";
import HomePage from "../pages/homePage";
import SignUp from "../pages/signup";
import InfoAccount from "../pages/infoAccount";
import Wishlist from "../pages/wishlist";
import GameItem from "../components/gameItem";
import ShopCart from "../pages/shoppingCart";
export const routes = [
  { path: "/signin", page: SignIn, isShowHeader: false },
  { path: "/signup", page: SignUp, isShowHeader: false },
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
    path: "/games/:id",
    page: GameItem,
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
  {
    path: "/infoAccount",
    page: InfoAccount,
    isShowHeader: true,
  },
  {
    path: "/wishlist",
    page: Wishlist,
    isShowHeader: true,
  },
  {
    path: "/shopcart",
    page: ShopCart,
    isShowHeader: true,
  },
];
