import { useState } from 'react'

function Exercise1() 
{
  
    const [data, setData] = useState({
    images:
    [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0
  })
    function shiftImageBack(){
        if(data.currentImg === 0)
            return;
        let index = data.currentImg - 1;
        setData({...data, currentImg: index})
    }
    function shiftImageForward(){
        if(data.currentImg === (data.images.length - 1))
            return;
        let index = data.currentImg + 1;
        setData({...data, currentImg: index})
    }
    return(
        <div>
            <img src={data.images[data.currentImg]}/>
            <div className='button-section'>
                <button className="backBtn" onClick={shiftImageBack}>Back</button>
                <button className="NextBtn" onClick={shiftImageForward}>Next</button>
            </div>
        </div>
    )

  
}

export default Exercise1
