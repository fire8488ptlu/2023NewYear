import React, { useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import './style.css';
import {cardLinkTreeDone,cardLinkTreeSuccess} from '../../Reducers/cardsSlice'
import {useNavigate} from 'react-router-dom';
import {PROXY_SERVER,PROXY_SERVER_DEV}  from '../../Constants/proxyConstants'

const CardLinkTree = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cards  = useSelector(state=>state.cards)
    const {cardLoading,cardOpen,cardModel1,cardData,
        cardVideo,cardLinktree,cardDataFinal,cardTake} = cards
    
    // console.log(cardDataFinal,cardData)
    

    const cardFinalData=(e)=>{
        dispatch(cardLinkTreeDone())    
        // 這裡要去撈redux 的資料然後再navigate
        navigate(`/content/${cardData.Data}`)
        // window.location.replace(`${PROXY_SERVER}/content/${cardData.Data}`);
        //window.open(`${PROXY_SERVER}/content/${cardData.Data}`)
    }

    const NewFriend=(e)=>{
        const url = 'https://www.bannerch.org/join/happy/sign-up.html'
        window.open(url, '_blank', 'noreferrer');
    }

    const Youtube=(e)=>{
        const url = 'https://www.youtube.com/@bannerch'
        window.open(url, '_blank', 'noreferrer');
    }

    const LinkTree=(e)=>{

        const url = 'https://linktr.ee/bannerchurch'
        window.open(url, '_blank', 'noreferrer');
    }



    return(
        //  這裡的flex 系統用兩格的就好 再分別去調gap 跟 width
        <div className="CardLinkTree">
            <button className="CardLinkTree-1" onClick={NewFriend}>新朋友？我們歡迎你</button>
            <button className="CardLinkTree-2" onClick={Youtube}>旌旗教會 YouTube 頻道</button>
            <button className="CardLinkTree-3" onClick={LinkTree}>旌旗教會 LinkTree</button>
            {/* <button className="CardLinkTree-4">LINK TREE</button>
            <button className="CardLinkTree-5">LINK TREE</button> */}
            <button className="CardLinkTree-6" onClick={cardFinalData}>NEXT</button>
        </div>

    )
}


export default CardLinkTree