import React from "react";

import "./Menuitem.scss"

const Menuitem = ({title,imageUrl,size})=>(
    
    <div 
    className = {`menu-item ${size}`}>
    <div className = 'background-image' style = {{backgroundImage:`url(${imageUrl})`}}/>
    <div className = 'content'>
        <h1 className = 'title'>{title}</h1>
        <h2 className = 'subtitle'>SHOP NOW</h2>
    </div>  
    </div>
)

export default Menuitem