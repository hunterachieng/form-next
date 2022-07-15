import React from "react";
import { useState } from "react";
import { Tab, Tabs, Box} from "@mui/material";
import Link from "next/link";





const PortfolioTabs = () =>{
    const [value, setValue] =  useState("one");
    const handleChange = (e, newValue) =>{
        setValue(newValue)

    }


return(
    <Box sx={{width:'100%'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} aria-label='portfolio tabs'>
                <Link href='/' passHref>   
                <Tab value="one" label="Hunter"/>
                </Link> 
                <Link href='/form' passHref>
                <Tab value="two" label="Feedback"/>
                </Link>              
            </Tabs>
        </Box>
        
    </Box>
)
}
export default PortfolioTabs