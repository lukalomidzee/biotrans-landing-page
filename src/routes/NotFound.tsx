import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { sectionHeadingOffset } from "../assets/styles/layout";

function NotFound() {
  return (
    <Box
      sx={{
        ...sectionHeadingOffset,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        flexGrow: 1,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontWeight: "bold", color: "#203477" }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{ marginTop: 2, marginBottom: 3, color: "#203477" }}
      >
        Oops! Page Not Found.
      </Typography>
      <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          "&:hover": {
            color: "white",
          },
        }}
      >
        Go Back to Homepage
      </Button>
    </Box>
  );
}

export default NotFound;
