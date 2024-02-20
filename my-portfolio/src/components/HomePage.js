import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import profilePic from "../data/images/IMG_4709.jpg"; // Ensure the path to your profile image is correct
import techPattern from "../data/images/Background1.webp"; // Ensure the path to your background image is correct
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArticleIcon from "@mui/icons-material/Article"; // Assuming this is for Medium
import IconButton from "@mui/material/IconButton";

const HomePage = () => {
  // URLs for your social media profiles
  const socialLinks = {
    github: "https://github.com/egorchet",
    linkedin: "https://www.linkedin.com/in/egorchet",
    medium: "https://medium.com/@egor.chetverikov.1997",
    facebook: "https://www.facebook.com/egorchetverikov",
  };

  // Assuming you have a gradient similar to the Download CV button
  const gradient = "linear-gradient(45deg, #FFC107, #FFEB3B, #FFC107)";

  return (
    <Box
      sx={{
        height: "110vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // Ensure positioning context for the overlay
      }}
    >
      {/* Background image with blur effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${techPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2.5px)", // Add blur effect to the background
          zIndex: -1, // Ensure the background is behind other content
        }}
      ></Box>
      {/* Content */}
      <Box
        sx={{
          zIndex: 1, // Ensure the content is above the background
          color: "#fff", // Set text color to white or any color that stands out on your background
          textAlign: "center", // Center the content horizontally
        }}
      >
        <Typography
          variant='h2'
          sx={{ marginTop: 5, fontWeight: "bold", textShadow: "2px 2px 4px #000000" }}
        >
          Welcome to My Portfolio
        </Typography>
        {/* Avatar component with adjusted size and position */}
        <Box sx={{ position: "relative", marginTop: 3, marginBottom: 2 }}>
          <Avatar
            src={profilePic}
            alt='Profile Picture'
            sx={{
              width: 350, // Adjust the size as needed
              height: 350,
              border: "4px solid #FFC107", // Optional: adds a white border around the avatar
              margin: "0 auto", // Center the avatar horizontally
            }}
          />
        </Box>
        {/* Typography components with adjusted color for visibility */}
        <Typography
          variant='h3'
          sx={{ marginTop: 4, fontWeight: "bold", textShadow: "2px 2px 4px #000000" }}
        >
          Egor Chetverikov
        </Typography>
        <Typography
          variant='h4'
          sx={{ marginTop: 1, fontWeight: "bold", textShadow: "2px 2px 4px #000000" }}
        >
          Full Stack Developer
        </Typography>
        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            "& > *": { margin: 1 },
          }}
        >
          {["github", "linkedin", "medium", "facebook"].map((network) => (
            <IconButton
              key={network}
              aria-label={network}
              onClick={() => window.open(socialLinks[network], "_blank")}
              sx={{
                margin: 2,
                fontSize: "3em",
                backgroundColor: "white",
                borderRadius: "50%",
                transition: "0.3s", // Smooth transition for hover effect
                "&:hover": {
                  backgroundImage: gradient,
                  color: "black", // Adjust text color as needed
                },
              }}
            >
              {network === "github" && <GitHubIcon sx={{ fontSize: "inherit" }} />}
              {network === "linkedin" && <LinkedInIcon sx={{ fontSize: "inherit" }} />}
              {network === "medium" && <ArticleIcon sx={{ fontSize: "inherit" }} />}
              {network === "facebook" && <FacebookIcon sx={{ fontSize: "inherit" }} />}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
