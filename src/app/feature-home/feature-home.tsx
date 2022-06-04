import { FeaturedProjectCard, LocationBox, BrowserCard, PropertiesCard, CallBackCard, PropertySlider } from 'components';
import React from 'react';
import logo from "libs/shared/assets/my_new_logo.jpg";
import Grid from "@mui/material/Grid";

export const FeatureHome = () => {
const featuredProjectData = [
  {
    imgageSrc: logo,
    price: "94.00 L - 1.2 CR",
    title: "Kolte Patil I TOWERS Exente",
    address: "Kolte Patil Developers Ltd in Electronic City Phase I",
    flats: "2, 2.5, 3, 4 BHK",
    developerName: "Kolte Patil Developers Ltd",
  },
  {
    imgageSrc: logo,
    price: "94.00 L - 1.2 CR",
    title: "Kolte Patil I TOWERS Exente",
    address: "Kolte Patil Developers Ltd in Electronic City Phase I",
    flats: "2, 2.5, 3, 4 BHK",
    developerName: "Kolte Patil Developers Ltd",
  },
  {
    imgageSrc: logo,
    price: "94.00 L - 1.2 CR",
    title: "Kolte Patil I TOWERS Exente",
    address: "Kolte Patil Developers Ltd in Electronic City Phase I",
    flats: "2, 2.5, 3, 4 BHK",
    developerName: "Kolte Patil Developers Ltd",
  },
];
const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];



  return (
    <div style={{ marginTop: "20px" }}>
      <PropertySlider items={items} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 12 }}
      >
        {Array.from(Array(5)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <FeaturedProjectCard
              imageSrc={logo}
              price=""
              title="Kolte Patil I TOWERS Exente"
              address="Kolte Patil Developers Ltd in Electronic City Phase I"
              flats="2, 2.5, 3, 4 BHK"
              developerName="Kolte Patil Developers Ltd"
            />
          </Grid>
        ))}
      </Grid>

      <CallBackCard />

      <FeaturedProjectCard
        imageSrc={logo}
        price=""
        title="Kolte Patil I TOWERS Exente"
        address="Kolte Patil Developers Ltd in Electronic City Phase I"
        flats="2, 2.5, 3, 4 BHK"
        developerName="Kolte Patil Developers Ltd"
      />
      <LocationBox title="bangalore" saleTag="villas" rentTag="villas" />
      <BrowserCard
        priceList={["1cr", "2cr", "3cr"]}
        imageSrc={logo}
        title="Kolte Patil I TOWERS Exente"
      />
      <PropertiesCard
        imageSrc={logo}
        title="Kolte Patil I TOWERS Exente"
        plotName="3BHK, 4BHK, Villa"
        price="94.00 L - 1.2 CR"
        navigateTo="#"
        plotPlace=""
        onClick={() => {}}
        tagName=""
        builderName="Kolte Patil Developers Ltd"
      />
    </div>
  );
};
