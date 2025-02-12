import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import WatchIcon from "../icons/WatchIcon";


// const HeroImageURL = new URL("../images/HeroImage.png", import.meta.url);
// const HeroPortraitURL = new URL("../images/HeroPortrait.jpg", import.meta.url);
// const BingeLogoURL = new URL("../images/binge-logo.png", import.meta.url);

// const HeroImage = new URL(HeroImageURL.pathname, import.meta.url);
// const HeroPortrait = new URL(HeroPortraitURL.pathname, import.meta.url);
// const BingeLogo = new URL(BingeLogoURL.pathname, import.meta.url);

const HeroImage = "/binge-provider-images/HeroImage.png";
const HeroPortrait = "/binge-provider-images/HeroPortrait.jpg";
const BingeLogo = "/binge-provider-images/binge-logo.svg";


const Banner = () => {
  const isXs = useMediaQuery("(max-width:600px)");
  const isLg = useMediaQuery("(min-width:1200px)");
  const is1400px = useMediaQuery("(min-width:1400px)");

  let imageSrc = HeroImage;

  if (isXs) {
    imageSrc = HeroPortrait;
  } else if (isLg) {
    imageSrc = HeroImage;
  }

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <img
          src={imageSrc}
          alt="hero"
          style={{ width: "70%", maxWidth: "1003px", height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "100%", md: "80%" },
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: {
            xs: "linear-gradient(to right, #464A54 0%, #464A54 35%, rgba(255, 255, 255, 0.00))",
            md: "linear-gradient(to right, #464A54 0%, #464A54 47%, rgba(255, 255, 255, 0.00))",
          },
        }}
      >
        <Container
          sx={{
            zIndex: 1,
            paddingX: "0px !important",
            marginLeft: is1400px
              ? "150px"
              : isLg
              ? "80px"
              : { xs: "20px", sm: "50px", md: "100px" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: { xs: "400", md: "700" },
              fontSize: is1400px
                ? "48px"
                : isLg
                ? "38px"
                : { xs: "20px", sm: "25px", md: "30px" },
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              component="img"
              src={BingeLogo}
              alt="binge"
              sx={{
                width: is1400px
                  ? 165
                  : isLg
                  ? 150
                  : { xs: 80, sm: 100, md: 135 },
              }}
            />
            <span>is an online video</span>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: is1400px
                ? "48px"
                : isLg
                ? "38px"
                : { xs: "20px", sm: "25px", md: "30px" },
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                color: "#EEEFFC",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              streaming platform
            </span>
          </Typography>

          <Button
            sx={{
              background: "#FF4A50",
              borderRadius: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              padding: { xs: "8px 14px", lg: "12px 18px" },
              color: "#fff",
              textTransform: "none",
              fontSize: { xs: "15px", sm: "14px", lg: "16px" },
              fontWeight: { xs: "400", lg: "600" },
              marginTop: { xs: "15px", md: "30px" },
            }}
          >
            Watch Now
            <WatchIcon />
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
