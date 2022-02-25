import React, { useContext, useState } from 'react';
const Context = React.createContext();

export function useContextData(){
    return useContext(Context)
}


export function Provider({children}) {
    //if gifClicked is true, we will show the gifUploader component
    const [gifClicked,setGifClicked] = useState(false);
    
    //when we click on any gif, we will pass its url to selectedGif
    const [selectedGif,setSelectedGif] = useState("");

    //handler functions of when to show or not show gifPopup
    function hideGifPopup(value){
        setGifClicked(value)
    }
    function setSelectedGifHandler(value){
        setSelectedGif(value)
    }
    
    const value = {
        gifClicked,
        hideGifPopup,
        selectedGif,
        setSelectedGifHandler
    }
    return (
      <Context.Provider value={value}>
          {children}
      </Context.Provider>
  )
}
