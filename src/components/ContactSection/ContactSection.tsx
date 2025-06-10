import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import mapIcon from "../../assets/icons/mapIcon.svg";
import phoneIcon from "../../assets/icons/phoneIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";

const infoItems = [
  {
    icon: mapIcon,
    label: "Location",
    lines: ["42, Kurashvili str", "Tbilisi, Georgia"],
  },
  {
    icon: phoneIcon,
    label: "Phone",
    lines: ["+995 32 2446688", "Mon-Fri / 10:00 - 18:00"],
  },
  {
    icon: emailIcon,
    label: "Email",
    lines: ["Info@Biotrans.ge"],
  },
];

const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minWidth: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#F9FAFB",
        px: { xs: 2, sm: 4, md: 8, lg: 12, xl: 20 },
        py: { xs: 6, md: 10 },
        boxSizing: "border-box",
        boxShadow: { xs: "none", sm: theme.shadows[2] },
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        style={{ width: "100%", textAlign: "center", marginBottom: 24 }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#203477",
            fontWeight: 700,
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3.5rem",
            },
            mb: 1,
            lineHeight: 1.2,
            letterSpacing: "-1px",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            color: "#A0A0A0",
            fontSize: { xs: "1.05rem", md: "1.25rem", lg: "1.35rem" },
            mb: 2,
            // maxWidth: 520,
            mx: "auto",
          }}
        >
          Have any questions? Contact our team for personalized logistics
          solutions.
        </Typography>
      </motion.div>

      {/* Map and Info */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        style={{ width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "center",
            gap: { xs: 4, md: 6 },
            width: "100%",
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          {/* Map */}
          <Box
            sx={{
              flex: 1,
              minWidth: { xs: "100%", md: 350 },
              maxWidth: { xs: "100%", md: 520 },
              height: { xs: 220, sm: 320, md: 380, lg: 400 },
              overflow: "hidden",
              borderRadius: 4,
              boxShadow: theme.shadows[2],
              mb: { xs: 3, md: 0 },
            }}
          >
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.047363265404!2d44.77654009999999!3d41.8057401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446e879e58bd2d%3A0xdb2c3deab731204d!2sBiotrans%20LLC!5e0!3m2!1sen!2sge!4v1749554912268!5m2!1sen!2sge"
              sx={{
                width: "100%",
                height: "100%",
                border: 0,
                display: "block",
              }}
              loading="eager"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>

          {/* Info */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 1,
              width: "100%",
              maxWidth: 500,
              mx: "auto",
              background: { xs: "transparent", md: "#fff" },
              borderRadius: { xs: 0, md: 4 },
              boxShadow: { xs: "none", md: theme.shadows[1] },
              p: { xs: 0, md: 4 },
              boxSizing: "border-box",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#203477",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                mb: 1,
                fontWeight: 600,
                alignSelf: { xs: "center", md: "flex-start" },
              }}
            >
              Contact Information
            </Typography>
            {infoItems.map((item, i) => (
              <Box
                key={item.label}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2.5,
                  width: "100%",
                  py: 1.2,
                  px: 1,
                  background: "#F3F5F7",
                  borderRadius: 2,
                  boxShadow: theme.shadows[0],
                  mb: i !== infoItems.length - 1 ? 1 : 0,
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.label}
                  sx={{
                    width: 25,
                    height: 25,
                    flexShrink: 0,
                    mr: 1,
                    mt: 0.5,
                  }}
                />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.1 }}
                >
                  <Typography
                    sx={{
                      color: "#656C76",
                      fontWeight: 500,
                      fontSize: "1rem",
                    }}
                  >
                    {item.label}
                  </Typography>
                  {item.lines.map((line) => (
                    <Typography
                      key={line}
                      sx={{
                        color: "#8D949D",
                        fontSize: "1rem",
                        wordBreak: "break-word",
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactSection;
