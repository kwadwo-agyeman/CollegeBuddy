import { Box } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div>
      <Box sx={{bgcolor: "#FF6392", p:2, display:{xs:"block",sm:"flex"},textAlign:"center", alignItems:"center", justifyContent:"center"}}>
       <a href="#" style={{textDecoration:"none"}}><p style={{padding: "15px",color:"white"}}>&copy; <span className='year'></span>College Bud</p></a>
       <a href="#" style={{textDecoration:"none"}}><p style={{padding: "15px",color:"white"}}>Terms</p></a>
       <a href="#" style={{textDecoration:"none"}}><p style={{padding: "15px",color:"white"}}>Privacy</p></a>
       <a href="#" style={{textDecoration:"none"}}><p style={{padding: "15px",color:"white"}}>Security</p></a>
       <a href="#" style={{textDecoration:"none"}}><p style={{padding: "15px",color:"white"}}>Contact</p></a>
      </Box>
    </div>
  )
}

export default Footer
