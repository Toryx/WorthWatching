'use client'
import Rating from '@mui/material/Rating';
import * as React from 'react';

interface Rating {
  rate: number | 0;
}
export default function BasicStaticRating({ rate }: Rating) {
 const rating =rate/2
 console.log(rating)
  return (
    <div className='text-center'>
    <Rating sx={{color:"#c084fc",fontSize:"40px", "& .MuiRating-iconEmpty": {
    color: "#a78bfa", // Set empty stars to white
  },
}}
        precision ={0.1}
        readOnly 
        size="large"
        value={rating}
      />
    </div>

  );
}