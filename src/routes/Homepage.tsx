import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import OurServices from "../components/OurServices/OurServices";

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
      <WhoWeAre />
      <OurServices />
    </Box>
  );
};

export default Homepage;
