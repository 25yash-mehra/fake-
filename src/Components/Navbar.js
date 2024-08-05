import React from 'react'
import { AppBar,Box,InputBase,Toolbar,InputAdornment,Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Navbar() {

return (
<>
   <AppBar sx={{background:'white'}}>
    <Toolbar>
<Box>
    <h1 style={{color:"black", marginLeft:"60px",marginTop:"-4px"}}>flipkart</h1>
    <Box>
        <h5 style={{color:"black", marginTop:"-25px",marginLeft:"70px"}}>explore <span style={{color:"gold"}}>Plus +</span></h5>
    </Box>
</Box>

<Box>
<InputBase
     sx={{ ml: 1, flex: 1 }}
        placeholder="Search here"
        startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
        style={{border:"1px solid grey",width:"460px",marginLeft:"1rem", borderRadius:"5px", marginTop:"-390px"}}
/>
</Box>

<div style={{display:"flex",justifyContent:"space-around", width:"100%", marginTop:"-5px"}}>
    

<Box>

<Button
style={{marginLeft:"20px", backgroundColor:"white",color:"black"}}
  component="label"
  role={undefined}
//   sx={{background:"white"}}
  variant="contained"
  tabIndex={-1}
  startIcon={<PersonIcon />}
>
 login
</Button>
</Box>
<Box>
<Button
style={{marginLeft:"20px", backgroundColor:"white",color:"black"}}
  component="label"
  role={undefined}
//   sx={{background:"white"}}
  variant="contained"
  tabIndex={-1}
  startIcon={<ShoppingCartIcon />}
>
cart
</Button>
</Box>
<Box>
<Button
style={{marginLeft:"20px", backgroundColor:"white",color:"black"}}
  component="label"
  role={undefined}
//   sx={{background:"white"}}
  variant="contained"
  tabIndex={-1}
  startIcon={<StorefrontIcon />}
>
Become a seller
</Button>
</Box>
<box>
<MoreVertIcon style={{color:"black"}}/>
</box>
</div>
    </Toolbar> 
   </AppBar>
</>
  )
}

export default Navbar