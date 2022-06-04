import React, { CSSProperties } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./property-slider.module.scss";
import Carousel from "nuka-carousel";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Grid } from "@mui/material";
import logo from "libs/shared/assets/my_new_logo.jpg";

// import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@mui/icons-material";

interface DefaultControlsConfig {
  containerClassName?: string;
  nextButtonClassName?: string;
  nextButtonStyle?: CSSProperties;
  nextButtonText?: string;
  pagingDotsClassName?: string;
  pagingDotsContainerClassName?: string;
  pagingDotsStyle?: CSSProperties;
  prevButtonClassName?: string;
  prevButtonStyle?: CSSProperties;
  prevButtonText?: string;
}



type Property = {
  id?: string;
  name: string;
  description: string;
  usp?: string;
  builder?: string;
  location?: string;
  startPrice?: string;
};


interface PropertySliderProps {
  items: Property[];
  priceList?: string[];
  imageSrc?: string;
}

export const PropertySlider = ({
  items,
  priceList,
  imageSrc,
}: PropertySliderProps) => {
const theme = useTheme();
  return (
    <Carousel
      renderCenterLeftControls={({ previousSlide }) => (
        <ArrowLeftIcon onClick={previousSlide} sx={{ fontSize: 80 }} />
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <ArrowRightIcon onClick={nextSlide} sx={{ fontSize: 80 }} />
      )}
      style={{ height: 400 }}
      className={styles["sliderBorder"]}
      defaultControlsConfig={{
        prevButtonClassName:styles["prevButton"],
      }}
    >
      {items.map((item, i) => (
        <div className={styles["sliderContainer"]}>
          <div className={styles["sliderContent"]}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>

        // <Grid
        //   container
        //   spacing={{ xs: 2, md: 3 }}
        //   columns={{ xs: 2, sm: 12, md: 12 }}
        // >
        //   <Grid
        //     item
        //     xs={12}
        //     sm={12}
        //     md={4}
        //     className={styles["sliderDetailsContainer"]}
        //   >

        //   </Grid>
        //   <Grid item xs={12} sm={12} md={8}>
        //     <img src={logo} alt="logo" />
        //   </Grid>
        // </Grid>

        // <Card sx={{ display: "flex" }} elevation={0}>
        //   <Box
        //     sx={{ display: "flex", flexDirection: "column", height: "200px" }}
        //   >
        //     <CardContent
        //       sx={{ flex: "1 0 auto" }}
        //       style={{ backgroundColor: "#aaa" }}
        //     >
        //       <Typography component="div" variant="h5">
        //         Live From Space
        //       </Typography>
        //       <Typography
        //         variant="subtitle1"
        //         color="text.secondary"
        //         component="div"
        //       >
        //         Mac Miller
        //       </Typography>
        //     </CardContent>
        //   </Box>
        //   <CardMedia
        //     component="img"
        //     sx={{ width: 151 }}
        //     image="/static/images/cards/live-from-space.jpg"
        //     alt="Live from space album cover"
        //   />
        // </Card>
      ))}
    </Carousel>
  );
};