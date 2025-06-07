import React, { useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import './style.css';
import RedCardJson from './redv2.json'
import {cardModel1Success,cardModel1Done,cardDataSuccess,cardTakeDone,cardVideoSuccess,
    } from '../../../Reducers/cardsSlice'

const RedCardOpen = () => {

    const dispatch = useDispatch();
    const handleOpenAnim =(event)=>{
        if(event=="complete"){
            dispatch (cardTakeDone())
            dispatch( cardDataSuccess() )
        }

    }


    return(
        
        <Player
            onEvent = {handleOpenAnim}
            className="item-imageAnim"
            speed ="1.8"  
            autoplay
            loop="0"
            src={RedCardJson}
        ></Player>
        
    )
}


export default RedCardOpen