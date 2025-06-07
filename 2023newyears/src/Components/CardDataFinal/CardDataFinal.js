import React, { useEffect,useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import Card05 from './Card05.png'
import './style.css'
import LineShare from './Line_share.png'
import FBShare from './Fb_share.png'
import Download from './pic_download.png'
import {cardModel1Done,cardAgain,cardDataFinalSuccess,cardLoadingDone} from '../../Reducers/cardsSlice'

const CardDataFinal = () => {

    const dispatch = useDispatch();
    const [FinalBtn,setFinalBtn] = useState()

    const handleImageLoaded =(e)=>{
        dispatch( cardLoadingDone() )
        dispatch( cardModel1Done() )
        setFinalBtn(true)
    }

    const AgainClick =(e)=>{
        dispatch(cardAgain())
    }


    return(
        // need opacity css
        <div className="cardFinalButton-grid">

            <img src={Card05} className="CardFinalDataImg_1" onLoad={handleImageLoaded} ></img>
        
            {/* Button Panel */}
            {FinalBtn==true?(
                <>
                    <button className="again-button" onClick={AgainClick}>AGAIN</button>
                    <img className="cf-1" src={FBShare}></img>
                    <img className="cf-2" src={Download}></img>
                    <img className="cf-3" src={LineShare}></img>
                </>
            ):""}
      
           
        
        </div>
        
        
    )
}


export default CardDataFinal