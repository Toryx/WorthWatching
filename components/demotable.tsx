import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  role: string,
) {
  return { name, role};
}

const rows = [
  createData('Dicabrio', 'john'),
  createData('Steve Carell', 'mon'),
  createData('Jim Carrey', 'jack'),
  createData('Steve Carell', 'mon'),
  createData('Steve Carell', 'mon'),
];

export default function DenseTable() {
  return (
    <TableContainer sx={{borderRadius:3,backgroundColor:"transparent"}}  component={Paper}>
      <Table sx={{ backgroundColor: "rgba(30, 41, 59, 0.6)" }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
            <TableCell sx={{color:"white", }}>Real Name</TableCell>
            <TableCell sx={{color:"white", }} align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color:"white", }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{color:"white", }} align="right">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}