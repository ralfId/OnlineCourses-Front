import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { theme } from './theme/theme'
import { Button } from '@material-ui/core'

export const OnlineCourses = () => {
    return (
        <MuiThemeProvider theme={ theme}>
            <Button variant='contained' color='primary'> Material UI Button</Button>
        </MuiThemeProvider>
    )
}
