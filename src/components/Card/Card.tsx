import { Box, Typography } from "@mui/material";

interface CardProps {
  iconUrl?: string;
  width?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  height?: string;
  heading: string;
  paragraph: string;
}

const Card = ({
  iconUrl,
  width = {
    xs: "12rem",
    md: "15rem",
    xl: "18rem",
  },
  height = "auto",
  heading,
  paragraph,
}: CardProps) => {
  return (
    <Box
      sx={{
        width,
        height,
        backgroundColor: "#f0f7ff", // soft blue background
        borderRadius: 3,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 2,
      }}
    >
      {iconUrl && (
        <Box
          component="img"
          src={iconUrl}
          alt="icon"
          sx={{ width: 24, height: 24 }}
        />
      )}

      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {heading}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {paragraph}
      </Typography>
    </Box>
  );
};

export default Card;
