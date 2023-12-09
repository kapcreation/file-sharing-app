import React from 'react'
import { AppBar, Box, Toolbar, Button, Container, IconButton, useTheme, Stack, Divider, Avatar } from '@mui/material'
import logo from '../assets/logo.png'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { Link as RouterLink } from 'react-router-dom'
import { deepPurple } from '@mui/material/colors';

const Navbar = () => {

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton component={RouterLink} to='/' color='inherit'>
            <Box component='img' alt='' src={logo} sx={{ width: '32px' }} />
          </IconButton>
          <Stack direction='row' alignItems='center' spacing={2}>
            <Button variant='text' sx={{ ml: 1, gap: '5px' }} color='inherit'>
              <Brightness4Icon />
            </Button>
            <Divider orientation='vertical' variant='middle' flexItem />
            <Button variant='text' color='inherit' sx={{ gap: '5px' }}>
              Log out
              <Avatar sx={{ bgcolor: deepPurple[500] }}>K</Avatar>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>  
  )
}

export default Navbar