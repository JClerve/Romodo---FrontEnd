import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
   
    <Box
      sx={{
        flexGrow: 1,
        Height: "50vh",
        width: "100vw",
        backgroundImage: `url("")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(237, 232, 245, 0.9)",
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#007BFF",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            Romodo
          </Typography>
          <Button
            color="inherit"
            onClick={() => navigate("/login")}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 8, mb: 4 }}>
        <Box
          sx={{
            textAlign: "center",
            my: 8,
            animation: "fadeIn 1s ease-in",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: "linear-gradient(45deg, #007BFF, #00A3FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome to Romodo
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: "#555" }}
          >
            Your ultimate fleet management solution.
          </Typography>
          <Button
            variant="contained"
            startIcon={<RocketLaunchIcon />}
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              color: "white",
              backgroundColor: "#007BFF",
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#0056b3",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              },
            }}
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
        </Box>

        <Box sx={{ textAlign: "center", my: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            What Our Customers Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="p"
                    gutterBottom
                    sx={{ color: "#007BFF", fontWeight: 600 }}
                  >
                    Joeson Clerve
                  </Typography>
                  <Typography sx={{ color: "#555" }}>
                    "Outstanding fleet management platform. The real-time
                    tracking and analytics have improved our efficiency by 40%."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="p"
                    gutterBottom
                    sx={{ color: "#007BFF", fontWeight: 600 }}
                  >
                    Piranaavei
                  </Typography>
                  <Typography sx={{ color: "#555" }}>
                    "Romodo simplified our complex logistics operations. Their
                    customer support is exceptional and the interface is
                    intuitive."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="p"
                    gutterBottom
                    sx={{ color: "#007BFF", fontWeight: 600 }}
                  >
                    Bremkumar Nandha
                  </Typography>
                  <Typography sx={{ color: "#555" }}>
                    "Romodo's intuitive interface and reporting features
                    revolutionized our fleet management operations"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: "#007BFF",
          py: 3,
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="body2" component="p">
          &copy; {new Date().getFullYear()} Romodo. All rights reserved.
        </Typography>
        <Button
          color="inherit"
          onClick={() => navigate("/about")}
          sx={{ mx: 1 }}
        >
          About Us
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate("/contact")}
          sx={{ mx: 1 }}
        >
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
