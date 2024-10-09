'use client'
import Rating from '@mui/material/Rating';
import * as React from 'react';

export default function BasicStaticRating() {
  const [value, setValue] = React.useState<number | null>(5);

  return (
    <div className='text-center'>
      <Rating sx={{color:"#4d7cbd",fontSize:"40px"}}
        precision ={0.5}
        readOnly 
        size="large"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>

  );
}