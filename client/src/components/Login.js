import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

function Login() {
  return (
    <Link className='nav-link' to='login'>
    <Button
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      LOGIN
    </Button>
    </Link>
  )
}

export default Login
