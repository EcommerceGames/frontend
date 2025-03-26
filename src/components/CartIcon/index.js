import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartIcon({ cartCount }) {
  return (
    <Badge
      badgeContent={cartCount}
      sx={{
        "& .MuiBadge-badge": { backgroundColor: "#FF8000", color: "white" },
      }}
    >
      <ShoppingCartIcon />
    </Badge>
  );
}
