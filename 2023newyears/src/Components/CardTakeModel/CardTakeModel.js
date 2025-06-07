import React, { useEffect, useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import './style.css';
import RedPng from './red.png'
import RedCardAnim from './RedCardOpen/RedCardOpen'
import LineShare from './Line_share.png'
import FBShare from './Fb_share.png'
import Copy from './copy.png'
import {PROXY_SERVER_DEV,PROXY_SERVER}  from '../../Constants/proxyConstants'
import {cardLoadingDone} from '../../Reducers/cardsSlice'
const CardTakeModel = () => {
    const dispatch = useDispatch();
    const [RedAnim,setRedAnim] = useState()
    const [CardTakeLoad,setCardTakeLoad] = useState()

    const ImageClick=(e)=>{
        // console.log(e.currentTarget.className)
        if(RedAnim==null){
            setRedAnim(e.currentTarget.className)
        }
        // setRedAnim(e.currentTarget.className)
        // after click replace the <RedCardAnim>
        // 要用useState 去設定variable
    }
    const CopyLink = async(e)=>{
            const range = document.createRange();
            // 將指定元素內容加到 Range 中
            const texts = document.getElementById('copyURL');
            range.selectNode(texts);
            // 取得 Selection 物件
            const selection = window.getSelection();
            // 先清空當前選取範圍
            selection.removeAllRanges();
            // 加入 Range 
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
            // http://2023newyearblessings.bannerch.org/
            // alert ("連結已複製!");
    }

    const FbShare = (e)=>{
        window.open(`http://www.facebook.com/sharer/sharer.php?u=${PROXY_SERVER}`, "_blank")
    }


    const LineShareClick = (e)=>{
        window.open(`http://line.me/R/msg/text/${PROXY_SERVER}`, "_blank")
    }


    const CardTakeOnLoad = (e)=>{
        //dispatch(cardLoadingDone())
        setCardTakeLoad(true)
    }
    return(
        
        <div className="grid-container" onLoad={CardTakeOnLoad} style={CardTakeLoad==true?{opacity:"1"}:{opacity:"0"}}> 
            <div className="gi-1" 
                disabled={RedAnim==null?false:true} 
                onClick={ImageClick}>

                {RedAnim=="gi-1"?<RedCardAnim/>:
                (<img className="item-image"  src={RedPng} ></img>)
                }
            </div>

            <div className="gi-2" 
                disabled={RedAnim==null?false:true}
                onClick={ImageClick}>

                {RedAnim=="gi-2"?<RedCardAnim/>:
                (<img className="item-image"  src={RedPng} ></img>)
                }
            </div>


            <div className="gi-3" 
                disabled={RedAnim==null?false:true}
                onClick={ImageClick}>
                {RedAnim=="gi-3"?<RedCardAnim/>:
                (<img className="item-image"  src={RedPng} ></img>)
                }
            </div>


            <div className="gi-4" 
                disabled={RedAnim==null?false:true}
                onClick={ImageClick}>
                {RedAnim=="gi-4"?<RedCardAnim/>:
                (<img className="item-image"  src={RedPng} ></img>)
                }
            </div>


            <div className="gi-5" 
                disabled={RedAnim==null?false:true}
                onClick={ImageClick}>
                {RedAnim=="gi-5"?<RedCardAnim/>:
                (<img className="item-image"  src={RedPng} ></img>)
                }
            </div>

            
            <img className="gi-6" src={FBShare} onClick={FbShare}></img>
            <img className="gi-7" src={Copy} onClick={CopyLink}></img>
            <img className="gi-8" src={LineShare} onClick={LineShareClick}></img>

            

            <p id="copyURL"style={{opacity:"0",width:"0px",height:"0px"}}>{`${PROXY_SERVER}`}</p>
        </div> 
      

    )
}


export default CardTakeModel