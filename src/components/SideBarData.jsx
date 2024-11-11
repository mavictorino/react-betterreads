import React from "react";
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import CottageIcon from '@mui/icons-material/Cottage';







export const SidebarData = [
    {
        title: "Homepage",
        icon: <CottageIcon />,
        link: "/",
    },
    
    {
        title: "My Library",
        icon: <CollectionsBookmarkIcon />,
        link: "/Library"
        
    },
   
    {
        title: "About",
        icon: <LightbulbCircleIcon />,
        link: "/About"
        
    }
]