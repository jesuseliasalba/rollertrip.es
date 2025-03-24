import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
};

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            height: "70px",
            bgcolor: "var(--jea-color-primary)",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "transparent",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <NavLink
                  to="/"
                  style={{
                    width: "70px",
                    height: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "80%",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    src="/icons/logo.png"
                    alt="logo rollertrip"
                  />
                </NavLink>
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon
                    sx={{
                      fontSize: "30px",
                      color: "var(--jea-color-secondary)",
                    }}
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                  className="menu-navBar"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to="/" className={"navBar"}>
                      Inicio
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to="/events" className={"navBar"}>
                      Eventos
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to="/about" className={"navBar"}>
                      ¿Que es RollerTrip?
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to="/contact" className={"navBar"}>
                      Contacto
                    </NavLink>
                  </MenuItem>
                </Menu>
              </Box>
              <Typography
                noWrap
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  paddingRight: "30px",
                }}
              >
                <NavLink
                  className="logo"
                  to="/"
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "80%",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    src="/icons/logo.png"
                    alt="logo rollertrip"
                  />
                </NavLink>
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: "var(--jea-color-secondary)",
                    display: "block",
                  }}
                >
                  <NavLink to="/" className={"navBar"}>
                    Inicio
                  </NavLink>
                </Button>
                <Button
                  sx={{
                    my: 2,
                    color: "var(--jea-color-secondary)",
                    display: "block",
                  }}
                >
                  <NavLink to="/events" className={"navBar"}>
                    Eventos
                  </NavLink>
                </Button>
                <Button
                  sx={{
                    my: 2,
                    color: "var(--jea-color-secondary)",
                    display: "block",
                  }}
                >
                  <NavLink to="/about" className={"navBar"}>
                    ¿Que es RollerTrip?
                  </NavLink>
                </Button>
                <Button
                  sx={{
                    my: 2,
                    color: "var(--jea-color-secondary)",
                    display: "block",
                  }}
                >
                  <NavLink to="/contact" className={"navBar"}>
                    Contacto
                  </NavLink>
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default NavBar;
