import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CartIcon({ cartCount }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/shopcart")}>
      <Badge
        badgeContent={cartCount}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "#FF8000",
            color: "white",
          },
        }}
      >
        <ShoppingCartIcon />
      </Badge>
    </Box>
  );
}
