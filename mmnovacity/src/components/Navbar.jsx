import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { NavLink } from "react-router"
import { useState } from "react"
import logo from "../assets/react.svg" // change to your real logo if needed

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null)

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ]

  return (

    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        // bgcolor: "white",
        // borderBottom: "1px solid #eee",
            bgcolor: "#fff",
            borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
            px: { xs: 1, md: 8 },
            
      }}
    >

      {/* <Toolbar sx={{ justifyContent: "space-between" }}> */}
        <Toolbar
            sx={{
            justifyContent: "space-between",
            minHeight: { xs: 52, md: 79 },
            gap: 2,
            }}
        >
        {/* ===== LEFT LOGO ===== */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ width: 38, height: 28, borderRadius: 2 }}
          />
          <Typography
            variant="h5"
            sx={{
                color: "#0f172a",
                fontWeight: 800,
                // letterSpacing: "-0.02em",
                fontSize: { xs: 20, md: 24 },
            }}
          >
            NovaCity
          </Typography>
        </Box>

        {/* ===== DESKTOP MENU ===== */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2.0,
            py: { xs: 1, md: 5 },
            py: { xs: 0, md: 0 },

          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={NavLink}
              to={item.path}
              sx={{
                color: "#334155",
                fontWeight: 500,
                textTransform: "none",
                fontSize: 15,
                px: 1,
                "&:hover": {
                    bgcolor: "transparent",
                    color: "#0f172a",
                },
                "&.active": {
                    color: "#ff7a00",
                },
              }}
            >
              {item.label}
            </Button>
          ))}

          <Button
            variant="contained"
            sx={{
                bgcolor: "#ff7a00",
                borderRadius: 999,
                px: 3.2,
                py: 0.9,
                textTransform: "none",
                
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* ===== MOBILE MENU ICON ===== */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <MenuIcon />
        </IconButton>

        {/* ===== MOBILE DROPDOWN ===== */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.label}
              component={NavLink}
              to={item.path}
              onClick={() => setAnchorEl(null)}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}