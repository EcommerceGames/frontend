import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Wishlist() {
  const dispatch = useDispatch();
  const { currentWhiList } = useSelector((state) => state.wishlist.wishlist);
  console.log("danh sahc", currentWhiList);
  return <div>Wishlist</div>;
}
