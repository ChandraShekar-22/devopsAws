import {
  FeaturedProjectCard,
  PropertiesCard,
  PropertySlider,
  Heading,
} from "components";
import React from 'react';
import Grid from '@mui/material/Grid';

export const FeatureHome = () => {
  const featuredProjectData = [
    {
      price: '94.00 L - 1.2 CR',
      title: 'Kolte Patil I TOWERS Exente',
      address: 'Kolte Patil Developers Ltd in Electronic City Phase I',
      flats: '2, 2.5, 3, 4 BHK',
      developerName: 'Kolte Patil Developers Ltd',
    },
    {
      price: '94.00 L - 1.2 CR',
      title: 'Kolte Patil I TOWERS Exente',
      address: 'Kolte Patil Developers Ltd in Electronic City Phase I',
      flats: '2, 2.5, 3, 4 BHK',
      developerName: 'Kolte Patil Developers Ltd',
    },
    {
      price: '94.00 L - 1.2 CR',
      title: 'Kolte Patil I TOWERS Exente',
      address: 'Kolte Patil Developers Ltd in Electronic City Phase I',
      flats: '2, 2.5, 3, 4 BHK',
      developerName: 'Kolte Patil Developers Ltd',
    },
  ];
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <PropertySlider items={items} />
        <Heading text="Properties for you" />
        <Grid
          container
          style={{ justifyContent: "space-between", backgroundColor: "#fff" }}
        >
          {featuredProjectData.map((props, index) => (
            <Grid item key={index}>
              <FeaturedProjectCard {...props} />
            </Grid>
          ))}
        </Grid>
        <Heading text="Recent properties" />
        <Grid
          container
          style={{ justifyContent: "space-between", backgroundColor: "#fff" }}
        >
          <Grid item>
            <PropertiesCard
              title='Kolte Patil I TOWERS Exente'
              plotName='3BHK, 4BHK, Villa'
              price='94.00 L - 1.2 CR'
              navigateTo='#'
              plotPlace=''
              onClick={() => {}}
              tagName=''
              builderName='Kolte Patil Developers Ltd'
            />
          </Grid>
          <Grid item>
            <PropertiesCard
              title='Kolte Patil I TOWERS Exente'
              plotName='3BHK, 4BHK, Villa'
              price='94.00 L - 1.2 CR'
              navigateTo='#'
              plotPlace=''
              onClick={() => {}}
              tagName=''
              builderName='Kolte Patil Developers Ltd'
            />
          </Grid>
          <Grid item>
            <PropertiesCard
              title='Kolte Patil I TOWERS Exente'
              plotName='3BHK, 4BHK, Villa'
              price='94.00 L - 1.2 CR'
              navigateTo='#'
              plotPlace=''
              onClick={() => {}}
              tagName=''
              builderName='Kolte Patil Developers Ltd'
            />
          </Grid>
          <Grid item>
            <PropertiesCard
              title='Kolte Patil I TOWERS Exente'
              plotName='3BHK, 4BHK, Villa'
              price='94.00 L - 1.2 CR'
              navigateTo='#'
              plotPlace=''
              onClick={() => {}}
              tagName=''
              builderName='Kolte Patil Developers Ltd'
            />
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <PropertiesCard
              title='Kolte Patil I TOWERS Exente'
              plotName='3BHK, 4BHK, Villa'
              price='94.00 L - 1.2 CR'
              navigateTo='#'
              plotPlace=''
              onClick={() => {}}
              tagName=''
              builderName='Kolte Patil Developers Ltd'
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
