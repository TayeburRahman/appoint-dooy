import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import React from 'react';
import { Link } from 'react-router-dom';

function MyAccount() {
    return (
        <div>
            <Container>
            <Grid container className='mt-5'>
                <Grid item xs={12} md={6} lg={4} className='p-3 position-a' >
                    <Divider />
                    <Link className="df-sb mt-3" to='/my_appointment'>
                        <Typography className='text-left text-bold-18'>
                            Book appointment
                        </Typography>
                        <ArrowForwardIosIcon className='text-bold-18' />
                    </Link>
                    <Typography variant='body1' className='text-left mt-2'>
                        Book an appointment,time and date for adults and children
                    </Typography>
                    <Divider className='position-r mt-4'/>
                </Grid>

                <Grid item xs={12} md={6} lg={4} className='p-3 position-a' >
                    <Divider className='display-cus-2'/>
                    <Link className="df-sb mt-3">
                        <Typography className='text-left text-bold-18'>
                        View appointment
                        </Typography>
                        <ArrowForwardIosIcon className='text-bold-18' />
                    </Link>
                    <Typography variant='body1' className='text-left mt-2'>
                    Includes booked appointment and cancel an appointment
                    </Typography>
                    <Divider className='position-r mt-4'/>
                </Grid>

                <Grid item xs={12} md={6} lg={4} className='p-3 position-a'  >
                    <Divider className='display-cus-3'/>
                    <Link className="df-sb mt-3" >
                        <Typography className='text-left text-bold-18'>
                        Medical records
                        </Typography>
                        <ArrowForwardIosIcon className='text-bold-18' />
                    </Link>
                    <Typography variant='body1' className='text-left mt-2'>
                    View your medical records
                    </Typography>
                    <Divider className='position-r mt-5'/>
                </Grid>

                <Grid item xs={12} md={6} lg={4} className='p-3 position-a' >
                    <Divider className='display-cus-4'/>
                    <Link className="df-sb mt-3">
                        <Typography className='text-left text-bold-18'>
                        GP records
                        </Typography>
                        <ArrowForwardIosIcon className='text-bold-18' />
                    </Link>
                    <Typography variant='body1' className='text-left mt-2'>
                    View and update your GP records  
                    </Typography>
                    <Divider className='position-r mt-5'/>
                </Grid>
 
              
               

            </Grid>
            </Container>
        </div>
    )
}

export default MyAccount
