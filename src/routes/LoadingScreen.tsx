import { Box, CircularProgress, Fade, Typography } from "@mui/material";

function LoadingScreen() {
  return (
    // Fade in the loading screen for a smoother effect
    <Fade in={true} timeout={500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // This ensures it takes up the available space within your layout
          // You might need to adjust minHeight based on your Header/Footer height
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
