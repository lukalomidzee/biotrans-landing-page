import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import boxesImage from "../../assets/background-images/boxesImage.jpg";

const PackagingBoxes = () => {
  return (
    <Box
      sx={{
        width: "100%",
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
      {/* Heading box */}
      <Box>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
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
                xs: 3,
                md: 4,
              },
            }}
          >
            Shipping boxes
          </Typography>
        </motion.div>
      </Box>

      {/* Image + Text box */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
              xs: 3,
              md: 5,
            },
          }}
        >
          {/* Image box */}
          <Box
            sx={{
              flex: 1,
              height: {
                xs: "15rem",
                sm: "20rem",
                // md: "25rem",
              },
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <Box
              component="img"
              src={boxesImage}
              alt="Loggers"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>

          {/* Text box */}
          <Box
            sx={{
              flex: 1,
              maxWidth: "600px",
              textAlign: {
                xs: "center",
                md: "left",
              },
              color: "#5A5A5A",
            }}
          >
            <Box
              mt={1}
              sx={{
                textAlign: "start",
              }}
            >
              <Typography mb={1}>
                We use certified shipment boxes that meet EU qualification
                requirements for transporting shipments at any required
                temperature range. Each type of packing material used for
                transporting dangerous goods is UN certified and complies with
                IATA regulations. Our shipping boxes are sourced from the
                leading transportation material providers on the market.
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default PackagingBoxes;
