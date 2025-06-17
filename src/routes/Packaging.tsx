import { Box } from "@mui/material";
import { useEffect } from "react";
import PackagingIntrocution from "../components/Packaging/PackagingIntroduction";
import PackagingBoxes from "../components/Packaging/PackagingBoxes";
import PackagingLoggers from "../components/Packaging/PackagingLoggers";
import PackagingVehicles from "../components/Packaging/PackagingVehicles";
import PackagingGps from "../components/Packaging/PackagingGps";

const Packaging = () => {
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
      <PackagingIntrocution />
      <PackagingBoxes />
      <PackagingLoggers />
      <PackagingVehicles />
      <PackagingGps />
    </Box>
  );
};

export default Packaging;
