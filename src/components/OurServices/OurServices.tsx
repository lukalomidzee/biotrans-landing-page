import { Box, Typography } from "@mui/material";
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
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: 3,
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
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default OurServices;
