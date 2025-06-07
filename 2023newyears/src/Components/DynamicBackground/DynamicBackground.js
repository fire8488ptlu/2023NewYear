import React, { useEffect , useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import BackgroundJson from './newyearbackgroundv5.json'
import './style.css';
import CardTakeModel from '../CardTakeModel/CardTakeModel'
import Loader from '../Loading/Loading'
import CardData from '../CardData/CardData'
import CardVideo from '../CardVideo/CardVideo'
import CardLinkTree from '../CardLinkTree/CardLinkTree'
import {cardLoadingDone,cardTakeSuccess,cardOpenDone,cardModel1Success
    ,cardModel1Done,cardDataSuccess,cardDataDone,cardVideoSuccess,
    cardVideoDone,cardLinkTreeSuccess,cardLinkTreeDone,cardDataFinalSuccess,
    cardAgain} from '../../Reducers/cardsSlice'

const DynamicBackground = () => {

    const dispatch = useDispatch();
    const cards  = useSelector(state=>state.cards)
    const {cardLoading,cardOpen,cardModel1,cardData,
        cardVideo,cardLinktree,cardDataFinal,cardTake} = cards
    
    
    // 一發動dispatch 就會直接render    
    useEffect(()=>{

    },[dispatch])

    const handleDynamic = (event)=>{

        if(event=="load"){
            dispatch(cardLoadingDone())
            // setCardTakeLoad(true)
            //dispatch(cardTakeSuccess())
            
        }

        
    }
    return(
        <>
                <Player
                    onEvent= {handleDynamic}
                    className="BackgroundAnim"
                    speed ="1"  //1.1
                    autoplay
                    loop
                    src={BackgroundJson}
                >
                </Player>
                {cardLoading==true?<Loader/>:""}
                {(cardTake==true)?<CardTakeModel/>:""}
                {(cardData.Data!="")&&(cardData.Status==true)?<CardData/>:""}
                {(cardVideo.Data!="")&&(cardVideo.Status==true)?<CardVideo/>:""}
                {(cardLinktree)==true?<CardLinkTree/>:""}

      
        </>
    )
}


export default DynamicBackground