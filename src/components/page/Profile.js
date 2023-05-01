import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className='ps-3 pe-3'>
            <Container className="text-left mt-5  ">
            <Link to="/home" className='backToHome'> Back to Home </Link>
            <Typography variant='h4' className='mt-2' sx={{fontWeight:"500"}}> My account </Typography>
            <Typography className='mt-3'>The details below are used in order to log in to your account and access our services.</Typography>
             <Box className="profile-change">
             <Box className="driver">
                <Box className="profile-change-flex mt-4">
                    <Typography className=''>
                        Email address
                    </Typography>
                    <Link to='/change_email'>Change</Link>
                </Box>
                <Typography> gpsignup@gmail.com </Typography>
            </Box>
            <Box className='mt-3 driver'>
                <Box className="profile-change-flex">
                    <Typography>
                        Password
                    </Typography>
                    <Link to='/change_password'>Change</Link>
                </Box>
                <Typography className="password"> gpsignup </Typography>
            </Box>
             </Box>
             <Typography variant='h6' className='mt-4'>Deregister My Account </Typography>
            <Typography className='mt-3'>This will delete your account, however will not affect any medical records.</Typography>
            <Button variant="contained" className='mt-2 deregister'>Deregister</Button>
            </Container>

        </div>
    )
}

export default Profile
