import React from 'react'
import Menuitem from '../menuitem/Menuitem';

import "./Directory.scss"

class Directory extends React.Component{
    constructor(){
        super();
        this.state ={
            sections:[{
                title:'Sneakers',
                imageUrl:"https://images.pexels.com/photos/2065695/pexels-photo-2065695.jpeg"
            },
            {
                title:'Running Shoes',
                imageUrl:"https://sneakernews.com/wp-content/uploads/2017/12/adidas-ultra-boost-lux-release-reminder-3.gif",
                id:2
            },
            {
                title:'Football Shoes',
                imageUrl:"https://images.pexels.com/photos/3621497/pexels-photo-3621497.jpeg",
                id:3
            },
            {
                title:'Men',
                imageUrl:"https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg",
                id:4,
                size:"large"
            },
            {
                title:'Women',
                imageUrl:"https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg",
                id:5,
                size:"large"
            }]
        }
    }

    render(){
        return(
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id,size})=>(
                        <Menuitem key = {id} title = {title} imageUrl = {imageUrl} size={size}/>

                    ))
                }
            </div>
        )
    }
}

export default Directory
