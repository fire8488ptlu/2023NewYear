import React, { useEffect,useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import Loader from '../../Components/Loading/Loading'
import './style.css';
import LineShare from './NewLine_share.jpg'
import FBShare from './NewFB_share.jpg'
import Download from './New_download.jpg'
import {cardModel1Done,cardAgain,cardDataFinalSuccess,cardLoadingDone} from '../../Reducers/cardsSlice'
import {PROXY_SERVER_DEV,PROXY_SERVER}  from '../../Constants/proxyConstants'
import { saveAs } from 'file-saver'



const Content = () => {

    const cards  = useSelector(state=>state.cards)
    const {cardLoading} = cards
    const cardId = window.location.href.split(/[/,?]/)[4]
    // console.log(window.location.href.split(/[/,?]/),cardId)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [FinalBtn,setFinalBtn] = useState()


    // useEffect(()=>{
    //     if(cardId>=1 && cardId)
    // },[])

    const handleImageLoaded =(e)=>{
        dispatch( cardLoadingDone() )
        dispatch( cardModel1Done() )
        setFinalBtn(true)
    }

    const AgainClick =(e)=>{
        dispatch(cardAgain())
        navigate("/")
    }

    const FbShare = (e)=>{
        // console.log(cardId)
        window.open(`http://www.facebook.com/sharer/sharer.php?u=${PROXY_SERVER}/content/${cardId}`, "_blank")
    }


    const download= async (e)=>{

        saveAs(`${PROXY_SERVER}/ContentImg/${cardId}.jpg`, `2023newyearblessings${cardId}.jpg`)

    }

    const LineShareClick= (e)=>{
        // console.log(cardId)
        // window.open(`http://www.facebook.com/sharer/sharer.php?u=${PROXY_SERVER_DEV}`, "_blank")
        window.open(`http://line.me/R/msg/text/${PROXY_SERVER}/content/${cardId}`, "_blank")
    }


    return(
        <>
        {cardLoading==true?<Loader/>:""}
        <div className="cardFinalButton-grid" style={FinalBtn==true?{opacity:"1"}:{opacity:"0"}}>


            <img src={`${PROXY_SERVER}/ContentImg/${cardId}.jpg`} className="CardFinalDataImg_1" onLoad={handleImageLoaded} ></img>
        
            {/* Button Panel */}
            
            <button className="again-button" onClick={AgainClick}>再抽一次</button>
            <img className="cf-1" src={FBShare} onClick={FbShare}></img>
            <img className="cf-2" src={Download} onClick={download}></img>
            <img className="cf-3" src={LineShare} onClick={LineShareClick}></img>
                
      
        </div>
        </>
    )

}


export default Content