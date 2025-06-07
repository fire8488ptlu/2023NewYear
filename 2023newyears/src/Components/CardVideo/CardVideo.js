import React, { useEffect,useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import './style.css';
import {cardLoadingDone,cardVideoDone,cardDataSuccess,cardLinkTreeSuccess} from '../../Reducers/cardsSlice'


const CardVideo = () => {

    const dispatch = useDispatch();
    const cards  = useSelector(state=>state.cards)
    const {cardVideo} = cards
    //console.log(cardVideo)
    const [VideoBtn,setVideoBtn] = useState()


    const VideoOnload = (e)=>{
        dispatch(cardLoadingDone())
        setVideoBtn(true)
    }
    
    const BackCardData=(e)=>{
        dispatch(cardVideoDone())
        dispatch(cardDataSuccess())
    }

    const CardLinkTree=(e)=>{
        dispatch(cardVideoDone())
        dispatch(cardLinkTreeSuccess())
    }

    return(
        //  這裡的flex 系統用兩格的就好 再分別去調gap 跟 width
        <div className="CardVideoContainer" style={VideoBtn==true?{opacity:"1"}:{opacity:"0"}}>

            <iframe 
            onLoad={VideoOnload}
            className="CardVideoIframe"
            width="560" 
            height="315" 
            src={cardVideo.Data}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>

            <button className="CardVideoBtn1" onClick={BackCardData} >回上頁</button>
            <button className="CardVideoBtn2" onClick={CardLinkTree} >NEXT</button>
        </div>

    )
}


export default CardVideo