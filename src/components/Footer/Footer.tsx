import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: {
          xs: "6rem",
        },
        width: "100%",
        backgroundColor: "#1A2533",
        px: { xs: 2, sm: 4, md: 8, lg: 12, xl: 20 },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "0.8rem",
            md: "1rem",
          },
        }}
      >
        © 2025 Biotrans LLC. All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
