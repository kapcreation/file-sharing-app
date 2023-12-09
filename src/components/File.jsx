import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Typography, Button, Box, Stack, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import testImg from '../assets/test1.jpg'

const File = () => {
  const isImage = true
  const menuIsOpen = true

  return (
    <Box position='relative'>
      <Button variant='outlined' sx={{ width: '100%', flexDirection: 'column', p: 1, textTransform: 'none' }}>
        {isImage ? (
          <Box 
            component='img'
            sx={{
              width: '100%',
              height: '100px',
              objectFit: 'cover'
            }}
            src={testImg}
          />
        ) : (
          <Box 
            sx={{
              width: '100%',
              height: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <InsertDriveFileIcon />
          </Box>
        )}
        <Typography variant='subtitle2' noWrap align='center'>Filetest1</Typography>  
      </Button>

      {menuIsOpen && (
        <Stack direction='row' spacing='2px' sx={{ position: 'absolute', zIndex: 2, width: '100%', justifyContent: 'center', p: '2px' }}>
          <Button variant='contained'>
            <DownloadIcon />
          </Button>
          <Button variant='contained' color='error'>
            <DeleteIcon />
          </Button>
        </Stack>
      )}
    </Box>
  )
}

export default File