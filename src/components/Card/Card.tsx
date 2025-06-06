import { Box, Typography } from "@mui/material";

interface CardProps {
  iconUrl?: string;
  width?: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  height?: string;
  background?: string;
  backgroundColor?: string;
  hoverBackground?: string;
  hoverBackgroundColor?: string;
  heading: string;
  paragraph: string;
}

const Card = ({
  iconUrl,
  width = { xs: "100%" },
  height = "100%",
  background,
  backgroundColor,
  hoverBackground,
  hoverBackgroundColor,
  heading,
  paragraph,
}: CardProps) => {
  const cardStyles: any = {
    width,
    height,
    minHeight: 150,
    borderRadius: 4,
    p: 2.5,
    boxShadow:
      "0 4px 12px rgba(40,80,220,0.08), 0 1.5px 4px rgba(40,80,220,0.12)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 1.5,
    transition: "box-shadow 0.25s, transform 0.2s, background 0.18s",
    cursor: "pointer",
  };

  if (background) cardStyles.background = background;
  else if (backgroundColor) cardStyles.backgroundColor = backgroundColor;
  else
    cardStyles.background =
      "linear-gradient(135deg, #f0f7ff 85%, #e1eaff 100%)";

  cardStyles["&:hover"] = {
    boxShadow:
      "0 8px 20px rgba(40,80,220,0.16), 0 3px 8px rgba(40,80,220,0.18)",
    transform: "translateY(-2px) scale(1.03)",
    ...(hoverBackground
      ? { background: hoverBackground }
      : hoverBackgroundColor
      ? { backgroundColor: hoverBackgroundColor }
      : { background: "linear-gradient(135deg, #e9f1fd 90%, #d7eaff 100%)" }),
  };

  return (
    <Box sx={cardStyles}>
      {iconUrl && (
        <Box
          component="img"
          src={iconUrl}
          alt="icon"
          sx={{
            width: 48,
            height: 48,
            mb: 1,
            filter: "drop-shadow(0 2px 6px rgba(40,80,220,0.08))",
          }}
        />
      )}

      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1rem", md: "1.12rem" },
          color: "#1d3360",
          textAlign: "center",
          mb: 0.3,
          letterSpacing: "0.01em",
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          textAlign: "center",
          lineHeight: 1.4,
          fontSize: { xs: "0.9rem", md: "0.98rem" },
        }}
      >
        {paragraph}
      </Typography>
    </Box>
  );
};

export default Card;
