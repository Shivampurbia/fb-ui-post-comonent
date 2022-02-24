import React from 'react'
import './header.css';
import create_post from './create_post.png';
import photos from './photos.png';
import live_video from './live-video.png';
function Header() {
  return (
    <div className='top' >
        <div className='header'>
            <div className='headerElement'>
                <img style={{marginRight:"2px"}} src={create_post} alt="" width={12} height={12}></img>
                <div>Compose Post</div>
            </div>
            <div className='headerElement'>
                <img style={{marginRight:"2px"}} src={photos} alt="" width={12} height={12}></img>

                <div>Photo/Video Album</div>
            </div>    
            <div className='headerElement'>
                <img src={live_video} alt="" width={12} height={12} style={{marginRight:"2px"}}></img>

                <div>Live Video</div>
            </div>
        </div>
        <div className='cross'>x</div>
            
    </div>
  )
}

export default Header