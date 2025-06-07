import React, { useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import LoadingJson from './loading.json'
import './style.css';

const Loading = () => {

    return(
        <>
                <Player
                    className="LoaderCSS"
                    speed ="1"  //1.1
                    autoplay
                    loop
                    src={LoadingJson}
                >
                </Player>
        </>
    )
}


export default Loading