import { styled } from "..";

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginTop: "72px",

  input: {
    padding: "12px 16px ",
    borderRadius: "6px",
    border: "1px solid $border",
    backgroundColor: "$input",
    fontSize: "16px",
    color: "$label",

    outline: "0",

    "&:focus": {
      border: "1px solid $brand",
      boxShadow: "0 0 0 1px $colors$brand",
    },

    "&::placeholder": {
      color: "$label",
    },
  },
});

export const InputHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  h3: {
    fontSize: "18px",
    fontWeight: "700",
    color: "$subtitle",
  },
  span: {
    color: "$span",
    fontSize: "14px",
  },
});
