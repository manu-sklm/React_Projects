import React, {  useState} from 'react'
import {assets} from "../assets/assets"
import { newChat,sendPrompt,setInput } from '../features/chat/chatSlice';
import { useDispatch,useSelector } from 'react-redux';


const Sidebar = () => {

    const [extended,setExtended]=useState(true);
    const{prevPrompts} =useSelector((state)=>state.chat);
    const dispatch =useDispatch();

    const loadPreviousPrompt=(prompt)=>{
            dispatch(setInput(prompt));
            dispatch(sendPrompt(prompt));

    }

  return (

    <div className={`inline-flex flex-col justify-between h-screen bg-[#f0f4f9] px-4 py-2 transition-all duration-300 ease-in-out ${extended ? 'min-w-[250px] w-[250px]' : 'min-w-[80px] w-[80px]' }`}>


        <div className='mt-4'>


             <img src={assets.menu_icon} alt="menu" onClick={()=>{ setExtended(pre=>!pre)}} className='size-[20px] ml-2'/>

             <div className='inline-flex mt-12  items-center gap-2 py-2 px-3 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer '
                onClick={()=>dispatch(newChat())}
              >
                <img src={assets.plus_icon} alt="plus icon"  className='w-[20px] pl-1'/>
                 <p className={`transition-all duration-300 origin-left whitespace-nowrap overflow-hidden ${extended? 'opacity-100 scale-100 ml-1 max-w-[100px]':'opacity-0 scale-90 ml-0 max-w-0'}`}>
            
                      New chat
                  </p> 
              </div>
            



                {/* Recent */}
        <p className="ml-1 mt-4 text-gray-700 font-medium text-sm opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300">Recent</p>
        <div className="flex flex-col overflow-y-auto max-h-[300px]">
          {prevPrompts.map((item, index) => (
            <div
              key={index}
              onClick={() => loadPreviousPrompt(item)}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-[#282828] hover:bg-[#e2e6eb] cursor-pointer"
            >
              <img src={assets.message_icon} alt="message" className="w-[20px]" />
              <p className="opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300 whitespace-nowrap">{item.slice(0, 18)}...</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-3">
        {[
          { icon: assets.question_icon, label: 'Help' },
          { icon: assets.history_icon, label: 'Activity' },
          { icon: assets.setting_icon, label: 'Setting' },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-2 rounded-full text-[#282828] hover:bg-[#e2e6eb] cursor-pointer"
          >
            <img src={item.icon} alt={item.label} className="w-[20px]" />
            <span className="opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300 whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Sidebar;