import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import headerLogo from "../../assets/biotrans-logo.png";
import { useState } from "react";
import { headerLogoStyling } from "../../assets/styles/layout";

const Header = () => {
  const navLinks: string[] = [
    "Home",
    "Services",
    "Tracking",
    "Contact",
    "About us",
  ];

  // Menu state
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleMenuState = () => {
    setMobileOpen(!mobileOpen);
  };

  // Biotrans Logo
  const logo = (
    <Box
      component="img"
      src={headerLogo}
      alt="Biotrans"
      sx={{
        ...headerLogoStyling,
      }}
    ></Box>
  );

  // Mobile menu container
  const drawer = (
    <Box
      onClick={handleMenuState}
      sx={{
        textAlign: "center",
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={headerLogo}
          alt="Biotrans"
          sx={{
            ...headerLogoStyling,
            display: {
              xs: "none",
            },
            "@media (max-width:320px)": {
              display: "block",
            },
          }}
        ></Box>
        {navLinks.map((link) => (
          <Button
            key={link}
            sx={{
              color: "#004E78",
              fontWeight: 600,
              "&:focus": {
                outline: "none",
              },
              "&:focus-visible": {
                outline: "none",
              },
            }}
          >
            {link}
          </Button>
        ))}
      </List>
    </Box>
  );

  return (
    // Header
    <AppBar
      id="header"
      component="nav"
      sx={{
        width: "100%",
        margin: 0,
        py: 0,
        px: {
          xs: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "6rem",
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: {
          xs: "4rem",
          sm: "5rem",
          md: "6rem",
          lg: "6rem",
          xl: "7rem",
        },
        backgroundColor: "white",
      }}
    >
      {/* Toolbar */}
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Biotrans logo */}
        {logo}
        {/* Navlinks */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {navLinks.map((link) => (
            <Button
              key={link}
              sx={{
                color: "#004E78",
                fontWeight: 600,
                "&:focus": {
                  outline: "none",
                },
                "&:focus-visible": {
                  outline: "none",
                },
              }}
            >
              {link}
            </Button>
          ))}
        </Box>
        {/* Menu icon */}
        <IconButton
          aria-label="open drawer"
          edge="end"
          onClick={handleMenuState}
          sx={{
            display: { md: "none" },
            "&:focus": {
              outline: "none",
            },
            "&:focus-visible": {
              outline: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        {/* Mobile menu drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleMenuState}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
