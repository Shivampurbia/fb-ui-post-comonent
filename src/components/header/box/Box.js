import React from 'react'
import { useContextData } from '../../../contexts/Context';
import './box.css';
import Gifuploader from './Gifuploader';
function Box() {
  const {gifClicked,hideGifPopup,selectedGif,setSelectedGifHandler} = useContextData();

  const gifClickHandler = (event) =>{
      console.log("UI done..");

      if(gifClicked === false){
          hideGifPopup(true)
      }else{
          hideGifPopup(false)
      }
  }
  console.log(gifClicked);
    
  const colors = ['linear-gradient(15deg, #13547a 0%, #80d0c7 100%)','blue',"black","red",'#9322', 'pink', "linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)", 'violet', '#865' , 'rgb(158, 12, 184)', 'green' ,'rgb(184, 95, 12)', 'indigo', 'linear-gradient(109.6deg, rgb(17, 151, 147) 11.2%, rgb(154, 214, 212) 55.4%, rgb(255, 233, 171) 100.2%)','rgb(12, 78, 184)','rgb(3, 130, 180)','rgb(83, 128, 2)','linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2rgb(255, 233, 171) 100.2%)','rgb(12, 78, 184)','rgb(3, 130, 180)','rgb(83, 128, 2)','linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)','linear-gradient(15deg, #13547a 0%, #80d0c7 100%)','blue',"black","red",'#9322', 'pink', "linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)", 'violet']
  
  return (
    <div className='box'>
        <div className='firstbox'>
            <img className='pp' src='https://i.pinimg.com/200x/3c/63/1a/3c631aab6d165c9abafa4e387ebf6936.jpg' alt="pp"></img>
            <textarea placeholder="What's on your mind?" className='input'></textarea>
                
            {selectedGif &&
            <div style={{marginLeft:"3rem",display:"flex",marginTop:'1rem'}}>
                <img src={selectedGif} alt="gif" width={280} height={240}></img>
                <img onClick={(e)=>(setSelectedGifHandler(""))} src="https://img.icons8.com/material-two-tone/344/cancel--v1.png" width={18} height={18} alt="gif" className='canclebtn'></img>
            </div>

            }
 
        </div>
      

        <div className='colorpalletes'>
            {colors.map(color=>(
                <div className='colorpallete' style={{background:color}}>
                    
                </div>
            ))}
        </div>
        <div className='tagboxes'>
                <div className='tagbox'>
                    <div className='tag'>
                        <img src="https://cdn-icons-png.flaticon.com/512/760/760737.png" alt="" width={12} height={12}></img>
                        <div style={{marginLeft:"3px"}}>Tag friends</div>
                    </div>
                    <div className='tag'>
                    <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png" alt="" width={16} height={16}></img>

                        <div style={{marginLeft:"3px"}}>Check in</div>
                    </div>
                </div>
                <div className='tagbox'>
                    <div onClick={gifClickHandler} className='tag'>
                        <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzEgMTcxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzEuOTk2NTJ2LTE3MS45OTY1MmgxNzEuOTk2NTJ2MTcxLjk5NjUyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiM0YTNjODgiPjxwYXRoIGQ9Ik0zNC4yLDI4LjVjLTEyLjUyMDE4LDAgLTIyLjgsMTAuMjc5ODIgLTIyLjgsMjIuOHY2OC40YzAsMTIuNTIwMTggMTAuMjc5ODIsMjIuOCAyMi44LDIyLjhoMTAyLjZjMTIuNTIwMTgsMCAyMi44LC0xMC4yNzk4MiAyMi44LC0yMi44di02OC40YzAsLTEyLjUyMDE4IC0xMC4yNzk4MiwtMjIuOCAtMjIuOCwtMjIuOHpNNTYuMzU0Myw2Mi45NjcxOWMxMC4xNDYsMCAxNy42MDQ5OCw1Ljg2Mzg4IDE4Ljg1ODk4LDE0Ljc4NDM4aC04LjkyODUxYy0xLjMzMzgsLTQuMzQzNCAtNC45MzcyNywtNi44Njg5NCAtOS45MzA0NywtNi44Njg5NGMtNi45MzEyLDAgLTExLjE4ODQ4LDUuNTA1NDkgLTExLjE4ODQ4LDE0LjUxNzE5YzAsOS4xOTQxIDQuNDY1MzMsMTQuNzg0MzcgMTEuNTQ0NzMsMTQuNzg0MzdjNS44ODgxLDAgOS45NjUyOSwtMy40ODU3MyAxMC4xNDE5OSwtOC42NjEzM2wwLjAyMjI2LC0wLjc2ODE3aC05LjMwNzAzdi02Ljc1NzYyaDE4LjAyNDAzdjUuNDc3MzVjMCwxMS40Nzk4IC03LjMxNzkxLDE4LjYyNTE5IC0xOS4wMzcxMSwxOC42MjUxOWMtMTIuNzU2NiwwIC0yMC41ODQ1NywtOC41NzE2NCAtMjAuNTg0NTcsLTIyLjYxMDc0YzAsLTEzLjgzMzkgNy44ODk3OCwtMjIuNTIxNjggMjAuMzg0MTgsLTIyLjUyMTY4ek04NC4yNDE5OSw2NC4wNjkzM2g4Ljk4NDE4djQyLjkyODEzaC04Ljk4NDE4ek0xMDMuNjU3NjIsNjQuMDY5MzNoMjcuNDQyMzh2Ny42ODE2NGgtMTguNDU4MnYxMS4xNzczNGgxNy40NTYyNXY3LjM0NzY2aC0xNy40NTYyNXYxNi43MjE0OGgtOC45ODQxOHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" alt="" width={16} height={16}></img>
                        <div style={{marginLeft:"3px"}}>GIF</div>
                    </div>
                    <div className='tag'>
                        <img src="https://www.iconpacks.net/icons/3/free-red-calendar-icon-11005.png" alt="" width={16} height={16}></img>
                        <div style={{marginLeft:"3px"}}>Tag Event</div>
                    </div>
                </div>
                {gifClicked && <Gifuploader />}
                
        </div>
    </div>
  )
}

export default Box