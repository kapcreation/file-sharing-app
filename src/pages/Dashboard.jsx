import React from 'react'
import { Container, Grid, Button, Divider, Stack } from '@mui/material'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useParams } from 'react-router-dom';
import File from '../components/File';
import RoomInput from '../components/RoomInput';

const Dashboard = () => {
  const posts = [1,2,3,4,5]
  
  let { roomId } = useParams()

  return (
    <>
      <Stack direction='row' spacing={2}>
        <RoomInput />
        <Button variant='contained' color='primary' startIcon={<UploadFileIcon />}>
          Upload
        </Button>
      </Stack>

      <Divider sx={{ m: 1 }} />

      <Grid container spacing={1}>
        {posts.map(item => (
          <Grid item xs={4} sm={3} md={2} key={item}>
            <File />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Dashboard