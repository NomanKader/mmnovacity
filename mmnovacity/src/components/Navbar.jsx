import {
  AppBar,
  Toolbar,
  // Typography,
  Button,
  Box,
  // IconButton,
  // Menu,
  // MenuItem,
} from "@mui/material"
// import MenuIcon from "@mui/icons-material/Menu"
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
            width={1222}
            height={568}
            loading="eager"
            decoding="async"
            sx={{
              height: { xs: 28, md: 40 },
              width: "auto",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>



        {/* ===== Moblie MENU ===== */}

        <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.2, md: 2 },
              flexWrap: "nowrap",        
            //   overflowX: "auto",          
              whiteSpace: "nowrap", 
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
              display: { xs: "none", md: "inline-flex" },
              bgcolor: "#ff7a00",
              borderRadius: 999,
              px: { xs: 2, md: 3.2 },
              py: { xs: 0.6, md: 0.9 },
              fontSize: { xs: 12, md: 14 },
              minWidth: "auto",          
              whiteSpace: "nowrap",
              mr: 2,
              boxShadow: "1px 3px 5px rgba(255,122,0,0.35)",
              "&:hover": {
                bgcolor: "#e96f00",
              },
            }}
          >
            Get App
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
