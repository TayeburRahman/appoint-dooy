import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../css/header.css'

function Header() {

    const {pathname} = useLocation()

    const path = "/" || "/login"


    return (
        <div className='navbar'>
            <Grid container sx={{height:"100%",justifyContent: "space-around", alignItems: "center"}}>
                <Grid item sm={4} lg={4}>
                    <Typography className='navtext'>
                        GOV.UK
                    </Typography>
                </Grid>
                <Grid item sm={4} lg={4}>
                    <Typography className='navtext'>
                        GP WESTMINSTER
                    </Typography>
                </Grid>
                <Grid item sm={4} lg={4}>
                    <Link className='navLink' to="/my_account">My Account</Link>
                    {
                        !path?(
                            <Link className='navLink'>Login</Link>
                        ):(
                            <Link className='navLink' to="/login">Logout</Link>
                        )
                    }
                    
                </Grid>

            </Grid>
        </div>
    )
}

export default Header
