import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import temperatureSvg from "../../assets/icons/temperatureSvg.svg";
import timeSvg from "../../assets/icons/timeSvg.svg";
import sampleSvg from "../../assets/icons/sampleSvg.svg";
import Card from "../Card/Card";

const OurServices = () => {
  const cardData = [
    {
      iconUrl: temperatureSvg,
      heading: "Temperature-Controlled Transport",
      paragraph:
        "Precision-monitored transport for temperature-sensitive materials. From frozen samples to ambient medications, we maintain exact conditions throughout transit.",
    },
    {
      iconUrl: timeSvg,
      heading: "Time-Critical Deliveries",
      paragraph:
        "When every minute counts, our expedited services ensure your clinical materials arrive exactly when needed, with real-time tracking and status updates",
    },
    {
      iconUrl: sampleSvg,
      heading: "Specimen Logistics",
      paragraph:
        "Specialized handling of blood samples, tissue specimens, and other biological materials with complete chain of custody documentation and regulatory compliance.",
    },
  ];

  return (
    // Outter box
    <Box
      sx={{
        width: "100%",
        minWidth: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#F9FAFB",
        px: {
          xs: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "6rem",
        },
        py: {
          xs: 6,
          md: 10,
        },
        gap: {
          xs: 1,
          md: 2,
        },
        boxSizing: "border-box",
      }}
    >
      {/* Heading box */}
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#203477",
              fontWeight: 600,
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "3rem",
              },
              mb: {
                xs: 5,
                md: 6,
              },
            }}
          >
            Our services
          </Typography>
          <Typography
            sx={{
              color: "#A0A0A0",
              fontSize: {
                xs: "1rem",
                md: "1.5rem",
              },
              textAlign: "center",
              mb: {
                xs: 5,
                md: 6,
              },
            }}
          >
            Specialized logistics solutions designed for the unique demands of
            clinical trials and medical research
          </Typography>
        </motion.div>
      </Box>
      {/* Cards box */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr 1fr",
          },
          gap: { xs: 2, md: 3 },
          alignItems: "stretch",
          mb: {
            xs: 5,
            md: 6,
          },
        }}
      >
        {cardData.map((card, i) => (
          <motion.div
            key={card.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            style={{
              height: "100%",
              display: "flex",
            }}
          >
            <Card
              iconUrl={card.iconUrl}
              heading={card.heading}
              paragraph={card.paragraph}
              backgroundColor="#FFFFFF"
              hoverBackground="linear-gradient(135deg, #e9f2fd 85%, #f4f8fb 100%)"
              height="100%" // This is KEY for grid alignment
            />
          </motion.div>
        ))}
      </Box>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
        <Box>
          <Button
            variant="contained"
            sx={{
              width: {
                xs: "8rem",
                sm: "9rem",
                md: "10rem",
              },
              height: {
                xs: "2.5rem",
                md: "3rem",
              },
              fontWeight: "bold",
              borderRadius: "8px",
              px: 3,
              py: 1.5,
              textTransform: "none",
              fontSize: {
                xs: "0.8rem",
                sm: "0.9rem",
                md: "1rem",
              },
              "&:focus": {
                outline: "none",
              },
              "&:focus-visible": {
                outline: "none",
              },
            }}
          >
            See more
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default OurServices;
