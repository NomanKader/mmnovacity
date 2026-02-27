// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
// } from "@mui/material"
// import MenuIcon from "@mui/icons-material/Menu"
// import { NavLink } from "react-router"
// import { useState } from "react"
// import logo from "../assets/react.svg" // change to your real logo if needed

// export default function Navbar() {
//   const [anchorEl, setAnchorEl] = useState(null)

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },
//     { label: "Services", path: "/services" },
//     { label: "Contact", path: "/contact" },
//   ]

//   return (
//     <AppBar
//       position="sticky"
//       elevation={0}
//       sx={{
//         bgcolor: "white",
//         borderBottom: "1px solid #eee",
//       }}
//     >
//       <Toolbar sx={{ justifyContent: "space-between" }}>
//         {/* ===== LEFT LOGO ===== */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//           <Box
//             component="img"
//             src={logo}
//             alt="logo"
//             sx={{ width: 35 }}
//           />
//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             sx={{ color: "black" }}
//           >
//             NovaCity
//           </Typography>
//         </Box>

//         {/* ===== DESKTOP MENU ===== */}
//         <Box
//           sx={{
//             display: { xs: "none", md: "flex" },
//             alignItems: "center",
//             gap: 2,
//           }}
//         >
//           {navItems.map((item) => (
//             <Button
//               key={item.label}
//               component={NavLink}
//               to={item.path}
//               sx={{
//                 color: "black",
//                 fontWeight: 500,
//                 "&.active": {
//                   color: "primary.main",
//                 },
//               }}
//             >
//               {item.label}
//             </Button>
//           ))}

//           <Button
//             variant="contained"
//             sx={{
//               bgcolor: "primary.main",
//               borderRadius: 5,
//               px: 3,
//               textTransform: "none",
//             }}
//           >
//             Get Started
//           </Button>
//         </Box>

//         {/* ===== MOBILE MENU ICON ===== */}
//         <IconButton
//           sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
//           onClick={(e) => setAnchorEl(e.currentTarget)}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* ===== MOBILE DROPDOWN ===== */}
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={() => setAnchorEl(null)}
//         >
//           {navItems.map((item) => (
//             <MenuItem
//               key={item.label}
//               component={NavLink}
//               to={item.path}
//               onClick={() => setAnchorEl(null)}
//             >
//               {item.label}
//             </MenuItem>
//           ))}
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   )
// }