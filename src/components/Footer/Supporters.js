import { Grid, Typography } from '@mui/material';
import React from 'react';

import InstitutionCard from './InstitutionCard';

const Supporters = ({ Institutions }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Grid item style={{ marginBottom: '15px' }}>
        <Typography component="h2" variant="h2" align="center">
          دوستان
        </Typography>
      </Grid>
      <Grid container item direction="row" justifyContent="center" xs={10} md={8}>
        {Institutions.map((institution, index) => {
          return (
            <InstitutionCard
              key={index}
              img_src={institution.img_src}
              name={institution.name}
              site_url={institution.site_url}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Supporters;
