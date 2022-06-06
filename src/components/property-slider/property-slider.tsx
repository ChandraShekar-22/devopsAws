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
import { Button } from "components/button/button";

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
          <ArrowLeftIcon
            onClick={previousSlide}
            sx={{ fontSize: 80, color: "#ffffff" }}
          />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <ArrowRightIcon
            onClick={nextSlide}
            sx={{ fontSize: 80, color: "#ffffff" }}
          />
        )}
        style={{ height: 350, marginBottom: 30 }}
        className={styles["sliderBorder"]}
        defaultControlsConfig={{
          prevButtonClassName: styles["prevButton"],
        }}
      >
        {items.map((item, i) => (
          <div className={styles["item"]}>
            <div className={styles["carousel-caption"]}>
              <div className={styles["offerbox"]}>
                <div className={styles["offertext"]}>
                  Brigade Northridge Neo, is a sprawling luxury enclave of
                  magnificent Apartment
                </div>
              </div>
              <div>Brigade Northridge Neo </div>
              <p>
                <span>by Brigade Group</span> <span>at Kogilu Main Road</span>
              </p>
              <div className={styles["ellipsis"]}>@ 93 L onwards</div>
              <a className={styles["btn"]} href="javascript:void(0);">
                Explore Now
              </a>
            </div>
            <div className={styles["itemimage"]}>
              <img
                alt="Brigade Northridge Neo"
                src="https://teja10.kuikr.com/restatic/1648719961.jpg"
              />
              <div className={styles["rerainfo"]}>
                <span>RERA ID:</span> PRM/KA/RERA/1251/309/PR/210824/004288
              </div>
            </div>
          </div>
          // <div className={styles["item"]} key={i}>
          //   <div className={styles["imgContainer"]}>
          //     <img
          //       src={"https://teja10.kuikr.com/restatic/1648719961.jpg"}
          //       alt="Brigade Northridge Neo offers"
          //       className={styles["sliderImage"]}
          //     />
          //   </div>
          //   <div className={styles["sliderContent"]}>
          //     <hr></hr>
          //     <div className={styles["usp"]}>
          //       Brigade Northridge Neo, is a sprawling luxury enclave of
          //       magnificent Apartment
          //     </div>

          //     <hr></hr>
          //     <div className={styles["project"]}>Brigade Northridge Neo</div>
          //     <div className={styles["builder"]}>
          //       By: Brigade Group in Kogilu Main Road
          //     </div>
          //     <div className={styles["startPrice"]}>@ 1.25 Cr onwards</div>
          //     <div className={styles["agentPhone"]}>+91 9916358180</div>
          //     <div className={styles["btn"]}>
          //       <Button>Request Now</Button>
          //     </div>
          //   </div>
          // </div>
        ))}
      </Carousel>
    );
};