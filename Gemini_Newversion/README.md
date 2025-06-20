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
        -- used unshit instead of push() which adds the prompt at the first index


### 6 fixing the prevPrompts[] array size , when it is full the oldest prompt will poppped which keepes the consistenty of sidebar layout
         
         -- implemented it .
         -- but later instead of doing that.. i made max-h-[300px] and overflow-y-auto , so that it get's  overflowed  and get's scroll bar also 
### 6 a : also styled the scroolbar of sidebar [prevprompts] to made it look similar to one in chatgpt  

        -- this styling is not available in tailwindcss
        -- used custom styling 

        ::-webkit-scrollbar {
          width: 6px;
         }

       ::-webkit-scrollbar-thumb {
          background-color: #c2c8d0; /* Soft gray thumb */
          border-radius: 10px;
         }


### 7 solved unwanted scroll bar on conatiner where results is displayed
     
     -- to solve this i made the whole page fit in screen size
     -- reduced some of margin along y-axis
     -- from min-h-screen  To   h-screen 
     Note : **I tried max-h-screen ,but note that it makes it shrink when content is minimim than screen size**


### 7 a. added styling to the prompt that is visible along with the results similar latest gemini 

			<p className='self-end max-w-[80%] bg-[#e8f0fe] px-4 py-2 rounded-tl-sm rounded-tr-full rounded-br-full rounded-bl-full text-[16px] '>{input}</p>
### 7 b. added white shadow effect to the top of div of input container that shadows the result text that over flow
   
      -- tailwindcss has no shadow-top , so used custom type of css

            shadow-[0_-50px_10px_-6px_rgba(255,255,255,0.6)]
            
     also made it only visible when results are displayed-- embedding logic in js expressions

     <div className={`absolute bottom-0 w-full  mx-auto max-w-[900px] 
     ${showResults? 'shadow-[0_-50px_10px_-6px_rgba(255,255,255,0.6)]'  :''} `}  >


### 7 c. fixing the resending unwanted api calls: when recentprompt on sidebar is clicked , it triggers another api call with the stored prompt in the prevPrompts


### 8 managing the scroll bar on main container

### 9 typing effect  && formatting the result data 

### 10 apply smooth transition on clicking menu to enlarge the sidebar


