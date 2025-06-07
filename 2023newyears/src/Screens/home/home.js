import React, { useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import './style.css';
import DynamicBackground  from '../../Components/DynamicBackground/DynamicBackground' 
import Loader  from '../../Components/Loading/Loading.js' 
import OpenAnim  from '../../Components/OpenAnim/OpenAnim' 
import CardVideo from '../../Components/CardVideo/CardVideo'
import CardDataFinal from '../../Components/CardDataFinal/CardDataFinal'
import {cardLoadingDone,cardOpenSuccess,cardOpenDone,cardModel1Success
    ,cardModel1Done,cardDataSuccess,cardDataDone,cardVideoSuccess,
    cardVideoDone,cardLinkTreeSuccess,cardLinkTreeDone,cardDataFinalSuccess,
    cardAgain} from '../../Reducers/cardsSlice'


const Home = () => {
    const dispatch = useDispatch();
    const cards  = useSelector(state=>state.cards)
    const {cardLoading,cardOpen,cardModel1,cardData,
        cardVideo,cardLinktree,cardDataFinal} = cards

    useEffect(()=>{
    
    },[dispatch])


    return(
        <>  
            {/* {cardLoading==true?<Loader/>:""} */}

            {cardOpen==true?<OpenAnim/>:""}
            {cardModel1==true?<DynamicBackground/>:""}   
            {/* {(cardDataFinal.Data!="")&&(cardDataFinal.Status==true)?<CardDataFinal/>:""} */}
         
            


        </>
    )

}


export default Home