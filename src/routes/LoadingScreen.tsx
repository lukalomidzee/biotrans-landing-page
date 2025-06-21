import { Box, CircularProgress, Fade, Typography } from "@mui/material";

function LoadingScreen() {
  return (
    <Fade in={true} timeout={500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress size={60} />
        <Typography variant="h6" sx={{ marginTop: 3, color: "text.secondary" }}>
          Loading Content...
        </Typography>
      </Box>
    </Fade>
  );
}

export default LoadingScreen;
