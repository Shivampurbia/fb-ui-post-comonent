import React from 'react';
import './container.css';
import Header from './header/Header';
import Box from './header/box/Box';

function Container() {
  return (
    <div className='parentcontainer'>
    <div className='container'>
        <Header />
        <hr style={{margin:"0"}}></hr>
        <Box></Box>
        <hr style={{margin:"0"}}></hr>
        <div className='buttons'>
                <form className='extraButton'>
                    <select>
                        <option value="Only me">Only me</option>
                        <option value="Public">Public</option>
                    </select>
                </form>
                <button className='postButton'>Post</button>
        </div>
    </div>
    </div>
    
  )
}

export default Container
