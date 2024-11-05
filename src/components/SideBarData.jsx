import React from "react";
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';







export const SidebarData = [
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