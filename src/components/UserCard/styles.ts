import { styled } from "../../styles";

export const UserCardContainer = styled("div", {
  backgroundColor: "$primaryShape",
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",

  padding: "32px 40px",
  width: "100%",
  gap: "32px",
  marginTop: "-10%",

  img: {
    width: "9.25rem",
    height: "9.25rem",
    borderRadius: "8px",
  },
});

export const UserCardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
  flex: 1,
});

export const UserCardNameContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",

  a: {
    textDecoration: "none",
    color: "$brand",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "0.75rem",

    svg: {
      marginLeft: "8px",
    },
  },
});

export const UserCardInformation = styled("div", {
  display: "flex",
  alignItems: "center",
  paddingTop: "16px",
  gap: "24px",

  span: {
    display: "flex",
    alignItems: "center",
    gap: "8px",

    svg: {
      color: "$label",
    },
  },
});
