import { Box } from "@mui/material";
import ServicesIntroduction from "../components/Services/ServicesIntroduction";
import ServiceTemperature from "../components/Services/ServiceTemperature";
import ServiceFlammable from "../components/Services/ServiceFlammable";

const Services = () => {
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
    </Box>
  );
};

export default Services;
