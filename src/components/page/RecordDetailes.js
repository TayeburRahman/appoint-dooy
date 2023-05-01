import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function RecordDetails() {

    const {recordID} = useParams()

    const [recordData, setData]=useState()

    useEffect(()=>{

        fetch('/appoinment.json')
        .then((response) => response.json())
        .then((responseJson) => { 
          const data = responseJson.filter((data)=> data.ID === recordID)
          setData(data[0]) 
        }) 
    }, [recordID])

    console.log('recordData', recordData)
    return (
        <div>
            <Container>
             <Box className="text-left mt-5">
             <Link to="/user_appoint" className='backToHome text-left'> <h6>Back to: Appointments</h6> </Link>
            <Typography variant='h3' className='mt-3 text-left text-hed' sx={{fontWeight:"500"}}> GP Record</Typography>
             </Box> 
             <Box className="text-left p-3 background-box mt-3">  
                <Typography className='ms-1'>First Name</Typography>
                <Typography className='mb-1 ms-1 text-cu'>{recordData?.FirstName}</Typography>
                <Divider/>
                <Typography className='mt-1 ms-1'>Last Name</Typography>
                <Typography className='mb-1 ms-1 text-cu'>{recordData?.LastName}</Typography>
                <Divider/>
                <Typography className='mt-1 ms-1'>NHS Number</Typography>
                <Typography className='mb-1 ms-1 text-cu'>{recordData?.NHSNumber}</Typography>
                <Divider/>
                <Typography className='mt-1 ms-1'>Postcode </Typography>
                <Typography className='mb-1 ms-1 text-cu'>{recordData?.Postcode}</Typography>
                <Divider/>
                <Typography className='mt-1 ms-1'>Date of birth</Typography>
                <Typography className='mb-1 ms-1 text-cu'>{recordData?.Date}</Typography>
                <Divider/>
                <Typography className='mt-1 ms-1'>Gender</Typography>
                <Typography className=' ms-1 text-cu'>{recordData?.Gender}</Typography> 
             </Box>

             <Box>
             <Typography variant='h5' className='mt-4 mb-3 text-left text-hed' sx={{fontWeight:"500"}}> Appointments History</Typography>

             <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="caption table"> 
        <TableHead>
          <TableRow sx={{background:"#abbfbf2e"}}>
 
            <TableCell className='padding-cu' align="right">Date</TableCell>
            <TableCell className='padding-0' align="right">Time</TableCell>
            <TableCell className='padding-0' align="right">Doctor</TableCell>
            <TableCell className='padding-0' align="right">Location</TableCell> 
            <TableCell className='padding-0' align="right">Appointments Type</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody> 
            <TableRow > 
              <TableCell className='padding-cu' align="right">03/02/2023</TableCell>
              <TableCell className='padding-0' align="right">8:35 AM</TableCell>
              <TableCell className='padding-0' align="right">Jane Doe</TableCell>
              <TableCell className='padding-0' align="right">GP Westminster Surgery</TableCell> 
              <TableCell className='padding-0' align="right">Vaccination</TableCell> 
            </TableRow>
            <TableRow > 
              <TableCell className='padding-cu' align="right">03/02/2023</TableCell>
              <TableCell className='padding-0' align="right">8:35 AM</TableCell>
              <TableCell className='padding-0' align="right">Jane Doe</TableCell>
              <TableCell className='padding-0' align="right">GP Westminster Surgery</TableCell> 
              <TableCell className='padding-0' align="right">Vaccination</TableCell> 
            </TableRow>
            <TableRow > 
              <TableCell className='padding-cu' align="right">03/02/2023</TableCell>
              <TableCell className='padding-0' align="right">8:35 AM</TableCell>
              <TableCell className='padding-0' align="right">Jane Doe</TableCell>
              <TableCell className='padding-0' align="right">GP Westminster Surgery</TableCell> 
              <TableCell className='padding-0' align="right">Vaccination</TableCell> 
            </TableRow>
            <TableRow > 
              <TableCell className='padding-cu' align="right">03/02/2023</TableCell>
              <TableCell className='padding-0' align="right">8:35 AM</TableCell>
              <TableCell className='padding-0' align="right">Jane Doe</TableCell>
              <TableCell className='padding-0' align="right">GP Westminster Surgery</TableCell> 
              <TableCell className='padding-0' align="right">Vaccination</TableCell> 
            </TableRow> 
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

export default RecordDetails
