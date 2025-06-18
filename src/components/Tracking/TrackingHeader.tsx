import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { sectionHeadingOffset } from "../../assets/styles/layout";
import SearchIcon from "@mui/icons-material/Search";

const TrackingHeader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        ...sectionHeadingOffset,
        backgroundColor: "#F9FAFB",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
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
      }}
    >
      {/* Search box */}
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "70%",
          },
          height: {
            xs: "20rem",
            sm: "17rem",
          },
          backgroundColor: "white",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          boxShadow: 1,
          p: 4,
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
              md: "2.5rem",
            },
          }}
        >
          Track Your Shipment
        </Typography>
        <Typography
          sx={{
            color: "#A0A0A0",
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.3rem",
            },
            textAlign: "center",
          }}
        >
          Enter your AWB number to get real-time tracking updates
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Enter AWB Number..."
          sx={{
            width: {
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
            },
            "& .MuiOutlinedInput-root": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 0, 0, 0.23)",
              },
              borderRadius: "1rem",
            },
            "& .MuiOutlinedInput-input": {
              color: "#203477",
              transition:
                "background-color 0s ease-out 999999s, color 0s ease-out 999999s !important",
              "&:-webkit-autofill": {
                boxShadow: "0 0 0 100px white inset !important",
                WebkitTextFillColor: "#203477 !important",
                backgroundColor: "white !important",
                transition:
                  "background-color 0s ease-out 999999s, color 0s ease-out 999999s !important",
              },
              "&:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":
                {
                  boxShadow: "0 0 0 100px white inset !important",
                  WebkitTextFillColor: "#203477 !important",
                  backgroundColor: "white !important",
                  transition:
                    "background-color 0s ease-out 999999s, color 0s ease-out 999999s !important",
                },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  startIcon={<SearchIcon />}
                  sx={{
                    height: "3.5rem",
                    borderRadius: 4,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    marginRight: "-0.8rem",
                    background: "#203477",
                    textTransform: "none",
                    fontSize: "1rem",
                    boxShadow: 0,
                    "&:hover": {
                      boxShadow: 0,
                      backgroundColor: "#004E78",
                    },
                    "&:focus": {
                      outline: 0,
                    },
                    width: { xs: "3rem", sm: "auto" },
                    minWidth: { xs: "3rem", sm: "4rem" },
                    paddingLeft: { xs: 0, sm: "1rem" },
                    paddingRight: { xs: 0, sm: "2rem" },
                    justifyContent: { xs: "center", sm: "flex-start" },

                    "& .MuiButton-startIcon": {
                      marginRight: { xs: 0, sm: "0.5rem" },
                    },
                  }}
                >
                  {!isSmallScreen && "Track"}
                </Button>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "1rem",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TrackingHeader;
