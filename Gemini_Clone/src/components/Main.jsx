import { assets } from '../assets/assets'
import { useState } from 'react';
import { setInput } from '../features/chat/chatSlice'
import {useSelector,useDispatch} from "react-redux"
import { sendPrompt } from "../features/chat/chatSlice";
const Main = () => {
  

 
    const {input,resultData,showResults,loading} =useSelector((state)=>state.chat);
    const dispatch=useDispatch();
    const [inputLocal,setInputLocal]= useState("");
     
    
   const handleCardClick=(promptText)=>{
    
      console.log("HandleCardClick send called.");
      dispatch(setInput(promptText));
      dispatch(sendPrompt(input));
     


   }
   const handleSend=()=>{

      dispatch(setInput(inputLocal));
    
      if (inputLocal.trim()!== "") {
			dispatch(sendPrompt(inputLocal));

      setInputLocal("");
		}
      console.log("Handle send called.");
   }


   const handleKeyDown=(e)=>{
    if(e.key=="Enter")
      handleSend();
   }

  return (
    <div className=' flex-1 min-h-screen  white  relative pb-[25vh]'>
        <div className='flex justify-between align-center mt-5 px-5'>
                <p className='text-xl text-gray-600'>Gemini</p>
                <img src={assets.user_icon} alt="user" className='size-[40px] rounded-full' />
        </div>
       
           
               
         <div className='mx-auto max-w-[900px]'>


           {!showResults ?

            (<>
            <div className='my-[50px] font-semibold text-[#c4c7c5] text-[56px]'>
               <p className=' '> 
                  <span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>
                    Hello, Dev
                  </span>
                </p>
               <p className=''>How can you help you today</p>

            </div>  

               <div className='flex flex-wrap gap-5 justify-center '>
                  <div className="p-5 h-[200px] max-w-[200px] bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea] "   onClick={()=>handleCardClick("Suggest Some Place To Visit In India.")}>
                    <p className='text-[#585858]'>Suggest Some Place To Visit In India.</p>
                    <img src={assets.compass_icon} alt="compass"  className='size-[35px] absolute bottom-5  right-5 rounded-full bg-white  p-[5px]  '/>
                  </div>
            
                   <div className="p-5 h-[200px] max-w-[200px] bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea] "  onClick={()=>handleCardClick("Explain the process of photosynthesis in simple terms")}>
                    <p className='text-[#585858]'>Explain the process of photosynthesis in simple terms.</p>
                    <img src={assets.bulb_icon} alt="buld"  className='size-[35px] absolute bottom-5  right-5 rounded-full bg-white  p-[5px]  '/>
                  </div>

                  <div className="p-5 h-[200px] max-w-[200px] bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea] "  onClick={()=>handleCardClick("How do you create a responsive navbar using CSS and JavaScript?")}>
                     <p className='text-[#585858]'>How do you create a responsive navbar using CSS and JavaScript?</p>
                      <img src={assets.message_icon} alt="message"  className='size-[35px] absolute bottom-5  right-5 rounded-full bg-white  p-[5px] '/>
                  </div>

                   <div className="p-5 h-[200px] max-w-[200px] bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea] "  onClick={()=>handleCardClick("What are some essential skills for becoming a front-end developer?")}>
                    <p className='text-[#585858]'>What are some essential skills for becoming a front-end developer?.</p>
                    <img src={assets.code_icon} alt="code"  className='size-[35px] absolute bottom-5  right-5 rounded-full bg-white  p-[5px] '/>
                   </div>
                 </div>


           </>):(
					<div className="px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hide">
						<div className="my-[40px] flex items-center gap-[20px]">
							<img src={assets.user} alt="" className="w-[40px] rounded-full" />
							<p>{input}</p>
						</div>

						<div className="flex items-start gap-[20px]">
							<img src={assets.gemini_icon} alt="" className="w-[40px] rounded-full" />
							{loading ? (
								<div className="flex flex-col gap-[10px] w-full">
									<hr className="rounded bg-gradient-to-r from-[#b1d5ee] via-[#c953e98a] to-[#9ed7ff] h-[20px] animate-pulse border-none" />
									<hr className="rounded bg-gradient-to-r from-[#b1d5ee] via-[#c953e98a] to-[#9ed7ff] h-[20px] animate-pulse border-none" />
									<hr className="rounded bg-gradient-to-r from-[#b1d5ee] via-[#c953e98a] to-[#9ed7ff] h-[20px] animate-pulse border-none" />
								</div>
							) : (
								<p className="text-[17px] font-light leading-[1.8]" dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>

					</div>
            )}
           
          
          

           <div className=' absolute bottom-0 w-full  mx-auto max-w-[900px]  ' >
             <div
                className='flex items-center justify-between bg-[#f0f4f9] px-5 py-2 rounded-full'
                >
                  <input type="text"
                    value={inputLocal}
                    onChange={(e)=>setInputLocal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder='Enter the promt here..'
                    className="flex-1 border-0 bg-transparent outline-0 p-2 text-[18px]"
                  />

                   <div className="flex gap-5 items-center">
                      <img src={assets.gallery_icon} alt="gallery" className="w-[24px] cursor-pointer" />
						        	<img src={assets.mic_icon} alt="mic" className="w-[24px] cursor-pointer" />
						          
                      {inputLocal&&<img
						          		src={assets.send_icon}
						            	alt="send"
                          onClick={handleSend}
								           className="w-[24px] cursor-pointer"
							         />
                      }
                  </div>
             </div>

            

              <div className="text-sm text-center font-light my-5">
				            <p>
				                   	Gemini may display inaccurate info, including about people, so
				                   	double-check its responses. Your privacy & Gemini Apps
				                </p>
              </div>
           </div>



           


       </div>
            
            
    
    </div>
  )
}

export default Main;