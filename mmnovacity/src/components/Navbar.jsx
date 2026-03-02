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
import logo from "../assets/Novacity_logo.png"

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null)

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ]
const handleAppRedirect = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  const playStoreUrl = "https://play.google.com/store/apps"
  const appStoreUrl = "https://apps.apple.com"

  if (/android/i.test(userAgent)) {
    window.open(playStoreUrl, "_blank")
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    window.open(appStoreUrl, "_blank")
  } else {
    // Desktop fallback
    window.open(playStoreUrl, "_blank")
  }
}
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
            alt="NovaCity Logo"
            sx={{
              height: { xs: 32, md: 40 },
              width: "auto",
              objectFit: "contain",
            }}
          />
          {/* <Typography
            variant="h5"
            sx={{
                color: "#0f172a",
                fontWeight: 800,
                // letterSpacing: "-0.02em",
                fontSize: { xs: 20, md: 24 },
            }}
          >
            NovaCity
          </Typography> */}
        </Box>

        {/* ===== DESKTOP MENU ===== */}
        <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.2, md: 2 },
              flexWrap: "nowrap",          //  no wrapping
              overflowX: "auto",           // scroll if very small screen
              whiteSpace: "nowrap",  // prevent text break
              // pr: 4,  
              // minWidth: "max-content",      
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
                whiteSpace: "nowrap",
                fontSize: { xs: 13, md: 15 },
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
            onClick={handleAppRedirect}
            sx={{
              bgcolor: "#ff7a00",
              borderRadius: 999,
              px: { xs: 2, md: 3.2 },
              py: { xs: 0.6, md: 0.9 },
              fontSize: { xs: 13, md: 15 },
              minWidth: "auto",           // important
              whiteSpace: "nowrap",
              mr: 2,
              boxShadow: "0 3px 5px rgba(255,122,0,0.35)",
              "&:hover": {
                bgcolor: "#e96f00",
              },
            }}
          >
            Get App
          </Button>
        </Box>

        {/* ===== MOBILE MENU ICON ===== */}
        {/* <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <MenuIcon />
        </IconButton> */}

        {/* ===== MOBILE DROPDOWN ===== */}
        {/* <Menu
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
        </Menu> */}
      </Toolbar>
    </AppBar>
  )
}