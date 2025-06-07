import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";




const initialState = {
    cardLoading: false, 
    cardOpen: true,
    cardModel1: false,
    cardTake: false,
    cardData: {"Data":'',"Status":false},
    cardVideo: {"Data":'',"Status":false},
    cardLinktree: false,
    cardDataFinal: {"Data":'',"Status":false}

}


//如果沒有要load很久的 不用一直都要loading
//打的文字要繼續留著 不要把他洗掉
const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers:{
        cardLoadingDone(state,action){
            state.cardLoading = false
        },
        cardOpenSuccess(state,action){
            state.cardLoading = false
            state.cardOpen = true
        },
        cardOpenDone(state,action){
            //state.cardLoading = true
            state.cardOpen =false
        },
        cardModel1Success(state,action){
            //state.cardLoading = false
            state.cardLoading = true
            state.cardModel1 = true
        },
        // cardModel1Done 這個功能不要用
        cardModel1Done(state,action){
            //state.cardLoading = true
            state.cardModel1 = false
        },
        cardTakeSuccess(state,action){
            state.cardLoading = true
            state.cardTake = true
        },
        cardTakeDone(state,action){
            state.cardTake = false
        },

        cardDataSuccess(state,action){
            state.cardLoading = true
            // 這裡可以用一個亂數產生器然後套到這裡
            //state.cardDataFinal = {'Data':state.cardData}
            const a = Math.floor(Math.random() * (15)) + 1;
 
            if(state.cardData.Data==""){
                state.cardData = {'Data':a,"Status":true}
            }else{
                state.cardData.Status = true
            }
            
        },
        cardDataDone(state,action){
            //state.cardLoading = true
            // 這裡把cardData裡面的Open關掉不要洗掉裡面的資料
            state.cardData.Status =false
        },
        cardVideoSuccess(state,action){
            state.cardLoading = true
            // 這裡做一個random然後套入
            if(state.cardVideo.Data==""){
                const DataNum = parseInt(state.cardData.Data)
                if(DataNum>=1 && DataNum<=3){
                    // 超哥
                    const VideoUrl = 'https://www.youtube.com/embed/O0qX_JpSqmM'
                    state.cardVideo = {"Data":VideoUrl,"Status":true}
            
                }else if(DataNum>=4 && DataNum<=6){
                    // 以文哥
                    const VideoUrl = 'https://www.youtube.com/embed/FC2c8L3q1sY'
                    state.cardVideo = {"Data":VideoUrl,"Status":true}
              
                }else if(DataNum>=7 && DataNum<=9){
                    // 晶玫
                    const VideoUrl = 'https://www.youtube.com/embed/RKozD_HhGgE'
                    state.cardVideo = {"Data":VideoUrl,"Status":true}
                  
                }else if(DataNum>=10 && DataNum<=12){
                    //榮和
                    const VideoUrl = 'https://www.youtube.com/embed/jXE8Sj72I8Q'
                    state.cardVideo = {"Data":VideoUrl,"Status":true}
              
                }else if(DataNum>=13 && DataNum<=15){
                    //眾牧者
                    const VideoUrl = 'https://www.youtube.com/embed/PcMNjTaC8s0'
                    state.cardVideo = {"Data":VideoUrl,"Status":true}
                }
    
            }else{
                state.cardVideo.Status = true
            }

        },
        cardVideoDone(state,action){
            //state.cardLoading = true
            // 洗掉video的資料
            state.cardVideo.Status = false
        },
        cardLinkTreeSuccess(state,action){
            //state.cardLoading = false
            state.cardLinktree = true
        },
        cardLinkTreeDone(state,action){
            state.cardLoading = true
            state.cardLinktree = false
            state.cardDataFinal.Data = state.cardData.Data
            state.cardDataFinal.Status = true
        },
        cardDataFinalSuccess(state,action){
            state.cardLoading = false
            state.cardDataFinal.Data = state.cardData.Data
            state.cardDataFinal.Status = true
        },
        cardAgain(state,action){
            // 不要進入動畫了，有點脫節奏
            // 直接進入Model1
            state.cardLoading = true
            state.cardModel1 = true
            state.cardOpen = false
            state.cardTake = true
            state.cardData = {"Data":'',"Status":false}
            state.cardVideo = {"Data":'',"Status":false}
            state.cardLinktree = false
            state.cardDataFinal = {"Data":'',"Status":false}
        }
    }


})

export const {cardLoadingDone,cardOpenSuccess,cardOpenDone,cardModel1Success,
    cardModel1Done,cardTakeSuccess,cardTakeDone,cardDataSuccess,cardDataDone,
    cardVideoSuccess,cardVideoDone,cardLinkTreeSuccess,
    cardLinkTreeDone,cardDataFinalSuccess,cardAgain} = cardsSlice.actions
export default cardsSlice.reducer