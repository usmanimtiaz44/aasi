const listItemStyle = {
  color: "inherit",
  "&.active": {
    backgroundColor: "#ac9b43",
    color: "red",
    "& .myIconClass, & .MuiTypography-root": {
      color: "white",
    },
  },
  "&.active:hover": {
    backgroundColor: "#ac9b43",
    color: "red",
    "& .myIconClass, & .MuiTypography-root": {
      color: "white",
    },
  },
};
const buttonStyle = {
  "&:hover": {
    color: "black",
    "& .myIconClass & .MuiTypography-root": {
      color: "white",
    },
  },
};

export { listItemStyle, buttonStyle };
