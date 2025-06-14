# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration 

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.








### 1. added sending the api request on on clicking enter buttom
    
    const handleKeyDown=(e)=>{
    if(e.key=="Enter")
      handleSend();
   }

### 2.before: before used to stay in the input until we got the response (gettting res takes time) even after submittig the request  

### 2.after: used a localInput state that instead of "input" global state , made the input becomes empty as soon as user  submits
          and made required changes 


const handleSend=()=>{
      dispatch(setInput(inputLocal));
    
      if (inputLocal.trim()!== "") {
			dispatch(sendPrompt(inputLocal));          // passed "input' global state but understood setInput() takes time to set input ,so used inputLocal i.e local state

      setInputLocal("");
		}
      
   }


   
### 4. Before:
           on sending req , loading is shown but not the "prompt"  util the responce delivered cz of the way the states are handling in asyncThunk
            
             **recent prompt is used before --whose state is not set until getting res**

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

                state.prevPrompts.push(prompt);
                state.recentPrompt=prompt;                           //until fullfilled            
                state.resultData=formatted;
                state.loading=false;
                state.input='';
            })
            .addCase(sendPrompt.rejected,(state)=>{
               console.log("rejected called");
                
                state.loading=false;

            });



### After:  
        after knowing that input state will be available even after sending req, i changed recentPromt to input ,that made prompt visisble at results while loading going on   


### 5 showing prevPrompts[] from 0 index -- oldest prompt is showed at top of sidebar instead of the latest


### 6 fixing the prevPrompts[] array size , when it is full the oldest prompt will poppped which keepes the consistenty of sidebar layout


### 7 fixing the resending unwanted api calls: when recentprompt on sidebar is clicked , it triggers another api call with the stored prompt in the prevPrompts


### 8 managing the scroll bar on main container

