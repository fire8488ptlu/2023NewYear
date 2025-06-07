import React, { useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import OpenAnimJson from './newyearopenv2.json'

import './style.css';
import {cardOpenDone,cardModel1Success,cardTakeSuccess} from '../../Reducers/cardsSlice'


const OpenAnim = () => {

    const dispatch = useDispatch();

    const handleOpenAnim =(event)=>{

        if(event=="complete"){

            dispatch( cardOpenDone() ) 
            dispatch( cardModel1Success() ) 
            dispatch( cardTakeSuccess() )


        }

    }


    return(
        <>
                <Player
                    onEvent = {handleOpenAnim}
                    className="OpenAnim"
                    speed ="1.5"  //1.1
                    autoplay
                    loop="0"
                    src={OpenAnimJson}
                >
                </Player>
      
        </>
    )
}


export default OpenAnim