import { Box } from "@mui/material";
import ServicesIntroduction from "../components/Services/ServicesIntroduction";
import ServiceTemperature from "../components/Services/ServiceTemperature";
import ServiceFlammable from "../components/Services/ServiceFlammable";
import ServiceBrokerage from "../components/Services/ServiceBrokerage";
import { useEffect } from "react";

const Services = () => {
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
      <ServicesIntroduction />
      <ServiceTemperature />
      <ServiceFlammable />
      <ServiceBrokerage />
    </Box>
  );
};

export default Services;
