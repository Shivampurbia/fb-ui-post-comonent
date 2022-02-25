import React,{useEffect,useState} from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api';
import { useContextData } from '../../../contexts/Context';


function Gifuploader(){
  const {hideGifPopup,selectedGif,setSelectedGifHandler} = useContextData();
  const gf = new GiphyFetch('TUM7ETujEEqZLj9Zi8uZG9XLRYmx4pKD')
  const [input,setInput] = useState("")
  const [gifData,setGifData] = useState([]);
  const [gifSearchData,setGifSearchData] = useState([]);
  
    const debounce = (func, delay) => {
      let debounceTimer;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
      };
    };
  
    const inputHandler = debounce(async function(event) {
        const data = []
        const input = event.target.value;
        setInput(input)
        console.log("Fetching GIFs for :",input);
        const { data: gifs } = await gf.search(input, { sort: 'relevant', lang: 'es', limit: 10 })
        gifs.forEach(gif=>{
          data.push(gif.images.downsized.url)
      })
        setGifSearchData(data);

    }, 1000);
      
  
  useEffect(()=>{
      async function getdata(){
        const data = []  
        const { data: gifs } = await gf.trending({ limit: 10 })
        gifs.forEach(gif=>{
            data.push(gif.images.downsized.url)
        })
        setGifData(data);
              
      }
      getdata();
  },[])  

  console.log(selectedGif);

  return (
    <div className='gifUploader'>

        <div>
            <input onChange={(e)=>{ e.persist(); inputHandler(e); }} placeholder='Search' className='inputgif' type='text'></input>
        </div>
        <div className='gifs'>
              { input ==="" ?
              gifData!== undefined &&  gifData.map((gif,id)=>(
                <div>
                  <img onClick={()=>((setSelectedGifHandler(gif),hideGifPopup(false)))} className='gif' key={id} src={gif} alt="gif" width={200} height={120}></img>
                </div>
              ))
             :
             gifSearchData!== undefined &&  gifSearchData.map((gif,id)=>(
                <div>
                  <img  onClick={()=>((setSelectedGifHandler(gif),hideGifPopup(false)))} className="gif" key={id} src={gif} alt="gif" width={200} height={120}></img>
                </div>
              ))

              

            }
        </div>
    </div>
  )
}

export default Gifuploader
