import {
  Box,
  Container,
  Typography,
  Grid
} from "@mui/material"

import ShieldIcon from "@mui/icons-material/Shield"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import GroupsIcon from "@mui/icons-material/Groups"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

import peopleImg from "../assets/photos/people.jpg"
import niceBuilding from "../assets/photos/nicebuilding.jpg"

export default function About() {
  return (
    <>

      {/* === HERO SECTION === */}

        <Box
        sx={{
          height: "60vh",
          backgroundImage: `url(${niceBuilding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff"
        }}
      >
      

        {/* Overlay */}

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.55)"
          }}
        />


        {/* Content */}

        <Box sx={{ position: "relative", textAlign: "center" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ fontSize: { xs: "32px", md: "48px" } }}
          >
            ABOUT NOVACITY
          </Typography>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Home &gt; About Us
          </Typography>
        </Box>
      </Box>



      {/* === CORE VALUES === */}

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f5f5f5" }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mb={8}
          >
            Our Core Values
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Trust",
                text: "Building lasting relationships through transparency and integrity in every transaction.",
                icon: <ShieldIcon sx={{ fontSize: 45, color: "#2f7f77" }} />,
                bg: "#e7f2ef"
              },
              {
                title: "Excellence",
                text: "Delivering exceptional service and quality properties that exceed expectations.",
                icon: <EmojiEventsIcon sx={{ fontSize: 45, color: "#e8742b" }} />,
                bg: "#f4eae1"
              },
              {
                title: "Community",
                text: "Connecting people with homes and building stronger communities across Yangon.",
                icon: <GroupsIcon sx={{ fontSize: 45, color: "#3f6fd8" }} />,
                bg: "#e8eef7"
              }
            ].map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                textAlign="center"
                sx={{
                  opacity: 0,
                  animation: `fadeUp 0.8s ease forwards`,
                  animationDelay: `${index * 0.3}s`,

                  "@keyframes fadeUp": {
                    "0%": {
                      opacity: 0,
                      transform: "translateY(30px)"
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateY(0)"
                    }
                  }
                }}
              >


                {/* ICON CIRCLE */}

                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    backgroundColor: item.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    mb: 3,

                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",

                    "&:hover": {
                      transform: "scale(1.12)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                    }
                  }}
                >
                  {item.icon}
                </Box>

      <Typography variant="h6" fontWeight="bold" mb={2}>
        {item.title}
      </Typography>

      <Typography color="text.secondary">
        {item.text}
      </Typography>
    </Box>
  </Grid>
))}
          </Grid>
        </Container>
      </Box>




      {/* ==== WHY CHOOSE === */}

      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* LEFT TEXT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
              Why Choose NovaCity?
            </Typography>

            <Typography color="text.secondary" mb={4}>
              With years of experience in the Yangon real estate market,
              we understand the unique needs of our clients.
            </Typography>

            {[
              "Local Expertise",
              "Personalized Service",
              "Trusted Network"
            ].map((text, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <CheckCircleIcon sx={{ color: "#2f7f77", mr: 2 }} />
                <Typography>{text}</Typography>
              </Box>
            ))}
          </Grid>


          {/* RIGHT IMAGE */}

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={peopleImg}
              alt="people"
              width={688}
              height={800}
              loading="lazy"
              decoding="async"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                borderRadius: 4,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>




     {/* ==== ACHIEVEMENTS ==== */}

<Box component="section" id="our-achievements" sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
  <Container>
    <Typography
      variant="h4"
      fontWeight="bold"
      textAlign="center"
      mb={8}
    >
      Our Achievements
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {[
        { number: "500+", label: "Properties Sold", color: "#2f7f77" },   
        { number: "1,200+", label: "Happy Clients", color: "#e8742b" },  
        { number: "15+", label: "Townships Covered", color: "#3f6fd8" },
        { number: "5+", label: "Years Experience", color: "#3c8c40" }    
      ].map((item, index) => (
        <Grid key={index} size={{ xs: 6, md: 3 }}>
          <Box textAlign="center">
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: item.color }}
            >
              {item.number}
            </Typography>

            <Typography color="text.secondary">
              {item.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
    </>
  )
}
