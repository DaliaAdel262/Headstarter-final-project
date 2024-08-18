import Image from "next/image";
import Container from '@mui/material/Container'
import { Box, Link, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Box>
      {/* NavBar */}
      <Box
      display="flex" justifyContent="space-between" alignItems="center"
      sx={{
        bgcolor:'#2a4c74',
      }}>
        <Link href="/" underline="none">
          <Typography sx={{fontSize:'40px', p:2, fontWeight:'bold', color:'white', fontFamily:'Lekton, monospace'}}>Logo</Typography>
        </Link>

        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Link href="/" underline="none">
            <Typography sx={{fontSize:'20px', p:2, color:'white', fontFamily:'Lekton, monospace'}}>Login</Typography>
          </Link>

          <Link href="/" underline="none">
            <Typography sx={{fontSize:'20px', p:2, color:'white', fontFamily:'Lekton, monospace'}}>SignUp</Typography>
          </Link>
        </Box>
      </Box>

      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width:'75%', margin:'0 auto', height:'864px'}}>
        <Box
        sx={{
          height:'45%',
          width:'55%',
        }}>
          <Typography sx={{fontSize:'80px',fontFamily:'Roboto', fontWeight: 100}}>ST3V3 is waiting for you!</Typography>
          <Button sx={{width:'50%', my:3, background:'linear-gradient(to right, #3f337b, #2a4c74, #5ce1e6)', borderRadius:'50px', p:2}}>
            <Typography sx={{fontSize:'20px',fontFamily:'Roboto', fontWeight: 500, color:'#fff'}}>Join now</Typography>
          </Button>
        </Box>

        <Box
        sx={{
          height:'65%',
          width:'38%'
        }}>
          <Box
          component='img'
          sx={{
            width:'100%',
            height:'100%',
            borderRadius:'2px'
          }}
          src='/images/St3v3.png'>
          </Box>
        </Box>
      </Box>

      {/* What we offer section */}
      <Box sx={{
        background:'linear-gradient(to right, #3f337b, #2a4c74, #5ce1e6)',
      }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="column" sx={{ width:'75%', margin:'0 auto', height:'864px', p:5}}>

          <Box sx={{textAlign:'center', width:'70%'}}>
            <Typography variant='h2' sx={{fontWeight:'bold', color:'#fff', py:2}}>Personalized Plan</Typography>
            <Typography sx={{color:'#fff', py:4, fontSize:'27px'}}>A fully customizable study plan from start to finish created just for you according to your needs with your own pace! Don’t worry pal, St3v3 has got you :D</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="column" sx={{width:'100%', py:4}}>

            <Box sx={{
              height:'500px',
              borderRadius:'50px',
              background:'#fff',
              width:'100%',
            }}>
              <video>

              </video>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
              <Box>
                <Typography>Resources</Typography>
                <Typography>Enjoy learning with some of the best resources out there on the internet</Typography>
              </Box>

              <Box variant='img'></Box>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
              <Box variant='img'></Box>
              <Box>
                <Typography>Resources</Typography>
                <Typography>Enjoy learning with some of the best resources out there on the internet</Typography>
              </Box>
              
            </Box>
          </Box>

        </Box>
      </Box>

      {/* Plans */}
      <Box>

      </Box>
    </Box>
    
  );
}
