import React, { useContext, useState } from 'react';
const Context = React.createContext();

export function useContextData(){
    return useContext(Context)
}


export function Provider({children}) {
    const [gifClicked,setGifClicked] = useState(false);
    const [selectedGif,setSelectedGif] = useState("");

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