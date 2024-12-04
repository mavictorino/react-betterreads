import React from "react";
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import CottageIcon from '@mui/icons-material/Cottage';







export const NavbarData = [
    {
        title: "Home",
        icon: <CottageIcon />,
        link: "/home",
    },
    
    {
        title: "My Library",
        icon: <CollectionsBookmarkIcon />,
        link: "/library"
        
    },
   
    {
        title: "About",
        icon: <LightbulbCircleIcon />,
        link: "/about"
        
    }
]