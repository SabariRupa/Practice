import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from '@mui/material/Link'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="secondary" sx={{height: '70px',color:'yellow'}}>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
      <MenuIcon />
      <IconButton aria-label="delete" disabled color="inherit">
      <DeleteIcon />
    </IconButton>
    </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Home
      <Link href="login">Login</Link>
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Link style= {{textDecoration:'none'}} href="/login">Login</Link>
      </Typography>
      <IconButton color="inherit" aria-label="add to shopping cart">
      <AddShoppingCartIcon />
      </IconButton>
      <Button color="inherit">Login</Button>
      </Toolbar>
      </AppBar>
    </Box>
  );
}
 