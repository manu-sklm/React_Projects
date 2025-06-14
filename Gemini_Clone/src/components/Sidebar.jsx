import React, {  useState} from 'react'
import {assets} from "../assets/assets"
import { newChat,sendPrompt,setInput } from '../features/chat/chatSlice';
import { useDispatch,useSelector } from 'react-redux';


const Sidebar = () => {

    const [extented,setExteded]=useState(true);
    const{prevPrompts} =useSelector((state)=>state.chat);
    const dispatch =useDispatch();

    const loadPreviousPrompt=(prompt)=>{
            dispatch(setInput(prompt));
            dispatch(sendPrompt(prompt));

    }

  return (

    <div className='inline-flex flex-col justify-between max-h-screen  bg-[#f0f4f9] px-4 py-2'>
        <div className='mt-4'>


             <img src={assets.menu_icon} alt="menu" onClick={()=>{ setExteded(pre=>!pre)}} className='size-[20px] ml-2'/>

             <div className='inline-flex mt-12  items-center gap-2 py-2 px-3 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer '
             onClick={()=>dispatch(newChat())}
             >
                <img src={assets.plus_icon} alt="plus icon"  className='w-[20px]'/>
                {extented&&<p>New chat</p>}
             </div>
            




            
                {  extented ?
                    ( <div className=' '>
                         <p className='my-5 ml-1 text-gray-700 font-medium '>Recent</p>
                             <div className="flex flex-col overflow-y-auto max-h-[300px] text-[16x]" >

                               {prevPrompts.map((item, index) => (
						                      <div
							                       key={index}
							                       onClick={() => loadPreviousPrompt(item)}
							                       className="flex items-start gap-2 px-4 py-2 pr-10 rounded-full text-[#282828] hover:bg-[#e2e6eb] cursor-pointer"
						                      >

								                      <img src={assets.message_icon} alt="message" className="w-[25px] align-middle" />
								                      <p>{item.slice(0, 18)}...</p>
							                   </div>
						                   ))}
                
                              </div>
                             </div>
                      ):null}

            
           </div>
            
            

      

       
       {/* botto */}
       <div className='flex flex-col mb-4 mt-2'>
           <div className='inline-flex items-center gap-3 px-2 py-2 rounded-full text-[#282828] hover:bg-[#e2e6eb] cursor-pointer'>
               <img src={assets.question_icon} alt="question" className='size-[20px]' />
               {extented&&<p>Help</p>}
           </div>

           <div className='inline-flex items-center gap-3 px-2 py-2 rounded-full text-[#282828] hover:bg-[#e2e6eb] cursor-pointer'>
               <img src={assets.history_icon} alt="question" className='size-[20px]' />
               {extented&&<p>Activity</p>}
           </div>

           <div className='inline-flex items-center gap-3 px-2 py-2 rounded-full text-[#282828] hover:bg-[#e2e6eb] cursor-pointer'>
              <img src={assets.setting_icon} alt="question" className='size-[20px]' />
                {extented&&<p>Setting</p>}
           </div>
       </div>
    </div>
    
  )
}

export default Sidebar;