import { styled } from "..";

export const PostContent = styled("div", {
  padding: "40px 32px",

  ".react-markdown": {
    whiteSpace: "pre-wrap",
  },

  img: {
    maxWidth: "100%",
  },

  ul: {
    marginLeft: "20px",
  },

  a: {
    color: "$brand",
  },
});
