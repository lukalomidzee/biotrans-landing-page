import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import OurServicesSection from "../components/OurServicesSection/OurServicesSection";
import GlobalPresenceSection from "../components/GlobalPresenceSection/GlobalPresenceSection";

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
      <OurServicesSection />
      <GlobalPresenceSection />
    </Box>
  );
};

export default Homepage;
