import { Box } from "@mui/material";
import ServicesIntroduction from "../components/Services/ServicesIntroduction";
import ServiceTemperature from "../components/Services/ServiceTemperature";

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
    </Box>
  );
};

export default Services;
