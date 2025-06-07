import React, { useEffect,useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import './style.css';
import Card2 from './card2.png'
import {PROXY_SERVER,PROXY_SERVER_DEV}  from '../../Constants/proxyConstants'
import {cardLoadingDone,cardDataDone,cardVideoSuccess} from '../../Reducers/cardsSlice'
const CardData = () => {

    const dispatch = useDispatch();
    const [CardDataBtn,setCardDataBtn] = useState()
    const cards  = useSelector(state=>state.cards)
    const {cardLoading,cardOpen,cardModel1,cardData,
        cardVideo,cardLinktree,cardDataFinal,cardTake} = cards

    const cardId = cardData.Data
    const handleImageLoaded = (e)=>{
        //console.log("Img loaded")
        dispatch(cardLoadingDone())
        setCardDataBtn(true)

    }

    const OpenVideoClick = (e)=>{
        dispatch(cardDataDone())
        dispatch(cardVideoSuccess())
    }

    return(
        //  這裡的flex 系統用兩格的就好 再分別去調gap 跟 width
        <div className="CardDataContainer"  style={CardDataBtn==true?{opacity:"1"}:{opacity:"0"}}>

            <img className="CardDataImg" 
                src={`${PROXY_SERVER}/ContentData/${cardId}_data.png`}
                onLoad={handleImageLoaded}></img>

            <button className="CardDataButton" onClick={OpenVideoClick}>點我看牧者祝福</button>

        </div>

    )
}


export default CardData