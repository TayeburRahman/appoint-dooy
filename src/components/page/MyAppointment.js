import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function MyAppointment() {
    return (
        <div>
             <Container>
             <Grid container className='mt-5'>
                <Grid item xs={12} md={6} lg={4} className='p-3 position-a' >
                    <Divider />
                    <Link className="df-sb mt-3" to="/user_appoint">
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
                </Grid>
                </Container>
        </div>
    )
}

export default MyAppointment
