'use client'
import Rating from '@mui/material/Rating';
import * as React from 'react';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(5);

  return (
    <div className='text-center'>
      <Rating sx={{color:"#c084fc",fontSize:"40px", "& .MuiRating-iconEmpty": {
      color: "#a78bfa", // Set empty stars to white
    },
  }}
        precision ={0.1}
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