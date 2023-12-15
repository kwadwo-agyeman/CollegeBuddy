import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div>
      <Box sx={{bgcolor: "#FF6392", p:2, display:{xs:"block",sm:"flex"},textAlign:"center", alignItems:"center", justifyContent:"center"}}>
       <a href="#" style={{textDecoration:"none",display:"block", padding: "15px",color:"white"}}>&copy;{currentYear} College Bud</a>
       <a href="#" style={{textDecoration:"none",display:"block", padding: "15px",color:"white"}}>Terms</a>
       <a href="#" style={{textDecoration:"none",display:"block", padding: "15px",color:"white"}}>Privacy</a>
       <a href="#" style={{textDecoration:"none",display:"block", padding: "15px",color:"white"}}>Security</a>
       <a href="#" style={{textDecoration:"none",display:"block", padding: "15px",color:"white"}}>Contact</a>
      </Box>
    </div>
  )
}

export default Footer
