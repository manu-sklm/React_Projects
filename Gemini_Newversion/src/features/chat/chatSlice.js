

import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import runChat from '../../utils/gemini';
import {MAX_PROMPTS} from "../../constants/chatConstants"

const sendPrompt=createAsyncThunk('chat/sendPrompt',async(promptText,{getState})=>{
       const {input} =getState().chat; 
       const prompt=promptText  ||input;

       const response =await runChat(prompt);

       let formatted = "";
    try {
      let responseArray = response.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join("<br/>");
      formatted = newResponse2;
    } catch (err) {
      console.error("Formatting Error", err);
    }

    return { prompt, formatted };


});


const chatSlice=createSlice({
    name:'chat',
    initialState:{
        input:'',
        recentPrompt:'',
        prevPrompts:[],
        showResults:false,
        loading:false,
        resultData:''
    },
    reducers:{
        setInput(state,action){ 
            state.input= action.payload
        },
        newChat:(state)=>{
            state.loading=false;
            state.showResults=false;
        },
    },


    extraReducers:(builder)=>{
        builder
            .addCase(sendPrompt.pending,(state)=>{
              console.log("pending called");
                state.loading=true;
                state.resultData='';
                state.showResults=true;

                console.log("recent input at pending state",state.input);
            })
            .addCase(sendPrompt.fulfilled,(state,action)=>{
               console.log("fulfilled called");
                const {prompt,formatted}=action.payload;

                state.prevPrompts.unshift(prompt);
                // if(state.prevPrompts.length>MAX_PROMPTS)
                // {

                //    state.prevPrompts.pop();
                // }
                state.recentPrompt=prompt;
                state.resultData=formatted;
                state.loading=false;
               
            })
            .addCase(sendPrompt.rejected,(state)=>{
               console.log("rejected called");
                
                state.loading=false;

            });
    }, 
})




export const {setInput,newChat}=chatSlice.actions;

export { sendPrompt };  
export default chatSlice.reducer;