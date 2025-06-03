import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";

const Homepage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Header />
      <Introduction />
    </Box>
  );
};

export default Homepage;
