import { AppBar } from '@material-ui/core'
import React from 'react'
import { NavBar } from './NavBar'

export const AppNavbar = () => {
    return (
        <AppBar position="static">
            <NavBar/>
        </AppBar>
    )
}
