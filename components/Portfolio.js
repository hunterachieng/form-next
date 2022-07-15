import React from "react";
import {Box} from '@mui/material';
import Image from "next/image";
import profile from '../public/profile.jpg';



const Portfolio= ()=>{
    return(
        <Box 
        sx={{
            width: '50%',
            margin: '5% auto',
            display:'flex',
            justifyContent: 'space-between'
        }}
        >            
                <div style={{lineHeight:'30px'}}>
                    <h1>Wie Gehts?</h1>
                
                <div>
                    <p>
                        I am Hunter Achieng, a Junior Software Engineer at iPay. My journey into tech started early
                    last year when I got a schorlarship to study Software Development at AkiraChix. Six months down 
                    the line after graduating, I am now a Junior Software Engineer!!. The journey ahead is long
                    but I am more than exited to start exploring it and see what lies beyond my capabilities.
                    
                    
                        Whenever I am not coding, I am either practicing Data Structure questions or watching K-Dramas.
                        I also volunteer by conducting nightly tuitions for the current AkiraChix students.
                    </p>
                </div>
                <b>Cheers!!</b>
                
                </div>
                {/* image */}
                <div>
                    <Image
                    src={profile}
                    alt="profile image"
                    placeholder="blur"
                    priority={true}
                    width={1100}
                    height={1400}
                    style={{borderRadius:'100%'}}                  
                    
                    />
                </div>
        </Box>
    )


}
export default Portfolio




