import { Box } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <Box
      id="header"
      sx={{
        width: "100%",
        margin: 0,
        paddingY: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: {
          xs: "4rem",
          sm: "5rem",
          md: "6rem",
          lg: "7rem",
        },
        backgroundColor: "white",
      }}
    >
      This is header
    </Box>
  );
};

export default Header;
