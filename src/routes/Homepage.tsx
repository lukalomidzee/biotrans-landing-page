import { Box } from "@mui/material";
import Introduction from "../components/Introduction/Introduction";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import OurServicesSection from "../components/OurServicesSection/OurServicesSection";
import GlobalPresenceSection from "../components/GlobalPresenceSection/GlobalPresenceSection";
import ContactSection from "../components/ContactSection/ContactSection";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Introduction />
      <WhoWeAre />
      <OurServicesSection />
      <GlobalPresenceSection />
      <ContactSection />
    </Box>
  );
};

export default Homepage;
