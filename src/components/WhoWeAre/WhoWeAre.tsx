import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Card from "../Card/Card";
import { sectionSizing } from "../../assets/styles/layout";
import sheildSvg from "../../assets/icons/sheildSvg.svg";
import badgeSvg from "../../assets/icons/badgeSvg.svg";
import globeSvg from "../../assets/icons/globeSvg.svg";
import partnerSvg from "../../assets/icons/partnerSvg.svg";
import { motion } from "framer-motion";

const cardData = [
  {
    iconUrl: sheildSvg,
    heading: "Reliability",
    paragraph:
      "We understand that lives depend on our services, and we deliver with unwavering precision",
  },
  {
    iconUrl: badgeSvg,
    heading: "Excellence",
    paragraph:
      "We continuously innovate and improve our services to exceed industry standards",
  },
  {
    iconUrl: globeSvg,
    heading: "Global Mindset",
    paragraph:
      "We bridge geographical gaps to connect research efforts worldwide",
  },
  {
    iconUrl: partnerSvg,
    heading: "Partnership",
    paragraph:
      "We build lasting relationships with our clients based on trust and shared goals",
  },
];

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        // ...sectionSizing,
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
        Who we are
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          alignItems: {
            xs: "center",
            lg: "flex-start",
          },
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Left content */}
        <Box
          sx={{
            width: { xs: "100%", lg: "55%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 2,
            color: "#203477",
          }}
        >
          <Typography sx={{ fontSize: "1rem" }}>
            Biotrans delivers pharmaceutical products and biological samples to
            30 countries and more than 45 laboratories around the globe. Our
            effective, timely, and safe world class service delivers your cold
            chain shipments from 24 to 48 hours to the final destination. We
            operate in accordance with EU Good Distribution Practice (GDP), IATA
            regulations, international and national regulations and standards.
          </Typography>
          <List
            dense
            sx={{
              listStyleType: "disc",
              pl: 3,
              fontSize: "1rem",
            }}
          >
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText primary="Specialized in Health Care and Life Science and Transportation Logistics" />
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText primary="Guaranteed international and domestic shipping of patient biological samples, research materials, pharmaceutical products, clinical trial supplies, personalized kits and cold supply chain logistics" />
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText primary="Safe transportation of shipments at any temperature range via UN certified packaging and qualified transportation fleet, including a temperature controlled vehicle (TCV)" />
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText primary="Services for Gas and Oil shipments" />
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText primary="Customs brokerage service for import and export shipments" />
            </ListItem>
          </List>
        </Box>

        {/* Cards: Responsive and Flexible */}
        <Box
          sx={{
            width: { xs: "100%", lg: "45%" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: { xs: 2, md: 3 }, // reduced gap
            mt: { xs: 4, lg: 0 }, // slightly reduced margin-top
            alignItems: "stretch",
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
                height: "100%", // let grid control card height!
                display: "flex",
              }}
            >
              <Card
                iconUrl={card.iconUrl}
                heading={card.heading}
                paragraph={card.paragraph}
                // You can pass a fixed height if you want
                // height="100%"
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
