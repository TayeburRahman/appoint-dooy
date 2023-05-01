import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Box, Button, Container, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
 
function UserAppointDetails() {
    const [rows, setData]=useState([])
    useEffect(()=>{
        fetch('appoinment.json')
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson)
        })
    })
    return (
        <div>
             <Container>
             <Box className="text-left mt-5">
             <Link to="/home" className='backToHome text-left'> <h6>Back to Home</h6> </Link>
            <Typography variant='h3' className='mt-3 text-left text-hed' sx={{fontWeight:"500"}}> Jon Doe's Appointments</Typography>
             </Box> 
            <Box className="mt-3">

            <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="caption table"> 
        <TableHead>
          <TableRow sx={{background:"#abbfbf2e"}}>
            <TableCell className='padding-cu '>Booking ID</TableCell>
            <TableCell className='padding-0' align="right">Date</TableCell>
            <TableCell className='padding-0' align="right">Time</TableCell>
            <TableCell className='padding-0' align="right">First Name</TableCell>
            <TableCell className='padding-0' align="right">Last Name</TableCell>
            <TableCell className='padding-0' align="right">GP Records</TableCell>
            <TableCell className='padding-0' align="right">Med Records</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ID}>
              <TableCell className='padding-cu ' align="right">
                {row.ID}
              </TableCell>
              <TableCell className='padding-0' align="right">{row.Date}</TableCell>
              <TableCell className='padding-0' align="right">{row.Time}</TableCell>
              <TableCell className='padding-0' align="right">{row.FirstName}</TableCell>
              <TableCell className='padding-0' align="right">{row.LastName}</TableCell>
              <TableCell className='padding-0' align="right"><Link to={`/record_details/${row.ID}`}>View</Link></TableCell>
              <TableCell className='padding-0' align="right"><Link>View</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  

    <Box className="d-flex pb-5 pt-4 flex-center">
    <Button size="small" className='button-next'><TrendingFlatIcon className='rotate'/>Previous</Button>
    <Button size="small" className='button-next'>Next <TrendingFlatIcon/></Button>
    </Box>  
            </Box>
             </Container>
        </div>
    )
}

export default UserAppointDetails
