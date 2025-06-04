import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Card from "../Card/Card";
import { sectionSizing } from "../../assets/styles/layout";
import sheildSvg from "../../assets/icons/sheildSvg.svg";

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        ...sectionSizing,
        width: "100%",
        height: {
          xs: "auto",
          sm: "100svh",
        },
        minWidth: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#FFFFFF",
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
          color: "black",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* <Typography variant="h2">Biotrans</Typography> */}
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              // width: {
              //   xs: "100%",
              //   lg: "50%",
              // },
            }}
          >
            Biotrans delivers pharmaceutical products and biological samples to
            30 countries and more than 45 laboratories around the globe. Our
            Effective, timely and safe world class service delivers your cold
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
              // width: {
              //   xs: "100%",
              //   lg: "50%",
              // },
            }}
          >
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText primary="Specialized in Health Care and Life Science and Transportation Logistics" />
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText
                primary="Guaranteed international and domestic shipping of patient biological
            samples, research materials, pharmaceutical products, clinical trial
            supplies, personalized kits and cold supply chain logistics"
              />
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText
                primary="Safe transportation of shipments at any temperature range via UN
            certified packaging and qualified transportation fleet, including a
            temperature controlled vehicle (TCV)"
              />
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText primary="Services for Gas and Oil shipments" />
            </ListItem>
            <ListItem sx={{ display: "list-item", pl: 0 }}>
              <ListItemText primary="Customs brokerage service for import and export shipments" />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Card
            iconUrl={sheildSvg}
            heading="Reliability"
            paragraph="We understand that lives depend on our services, and we deliver with unwavering precision"
          />
          <Card
            heading="Reliability"
            paragraph="We understand that lives depend on our services, and we deliver with unwavering precision"
          />
          <Card
            heading="Reliability"
            paragraph="We understand that lives depend on our services, and we deliver with unwavering precision"
          />
          <Card
            heading="Reliability"
            paragraph="We understand that lives depend on our services, and we deliver with unwavering precision"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
