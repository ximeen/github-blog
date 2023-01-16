import { keyframes } from "@stitches/react";
import { styled } from "../../styles";

export const PostListContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "32px",
  margin: "43px 0",
});
export const PostListItem = styled("article", {
  backgroundColor: "$secondaryShape",
  padding: "32px",
  borderRadius: "10px",
  maxHeight: "260px",
  maxWidth: "420px",
  width: "100%",
  height: "100%",
  transition: "all 150ms linear",

  "&:hover": {
    filter: "drop-shadow(4px 4px 3px #3294f8)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",

    h3: {
      fontSize: "20px",
      fontWeight: 700,
      maxWidth: "284px",
    },
    span: {
      fontSize: "14px",
      color: "$span",
    },
  },

  p: {
    color: "$text",
    marginTop: "20px",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 4,
  },
});
