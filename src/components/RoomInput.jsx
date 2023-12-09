import React from 'react'
import { Box, Button, Stack, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const RoomInput = () => {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    navigate(`/rooms/${data.get('room')}`)
  }

  return (
    <Box sx={{ display: 'inline-block' }}>
      <Stack component='form' onSubmit={handleSubmit} direction='row' alignItems='center' spacing={1}>
        <TextField
          required
          id='room'
          label='Room'
          name='room'
          size='small'
        />
        <Button type='submit' variant='contained'>
          Enter
        </Button>
      </Stack>
    </Box>
  )
}

export default RoomInput