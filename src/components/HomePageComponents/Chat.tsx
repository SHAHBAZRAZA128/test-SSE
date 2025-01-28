
import { useState } from "react";
import {  Closeicon , ConversationEmpty,Chaticon, SmallLogo } from "../../assets/index"
import {ButtonField} from "../index";



const Chat: React.FC = () => {

    const [isChatOpen, setisChatOpen] = useState(false)
    const toggleChat = () => {
        setisChatOpen(!isChatOpen);
    };
   
    return (
        <div className="relative ">
            {isChatOpen ? (
                <div className={`bg-gray-100 h-[550px] w-[380px] fixed z-[60] right-12 bottom-[70px] rounded-xl shadow-xl border-2  border-b-2  group-hover:translate-y-[-5px] transform transition-all duration-100`}>
                    <div className="h-40 flex flex-col justify-between items-center px-8">
                        <img className="w-4 h-4 mt-4 relative left-40 rounded-full cursor-pointer hover:bg-gray-300" 
                        src={Closeicon} 
                        alt="icon" 
                        onClick={toggleChat}/>
                        <img className="h-8 w-10 rounded-full" src={SmallLogo}></img>
                        <h1 className="text-gray-800 font-medium leading-none">SafetyCulture Support</h1>
                        <p className="mb-8 text-sm text-gray-800">By starting a chat, you consent to us recording <span className="block text-center leading-none">the chat as per our Privacy Policy.</span></p>
                    </div>
                    <hr></hr>
                    <div className="bg-white flex flex-col justify-between items-center rounded-xl shadow-xl" >
                        <img className=" mt-14" src={ConversationEmpty} alt="" />
                        <h1 className="text-gray-800 font-medium leading-none mt-4">No Conversation yet</h1>
                        <p className="mb-20 text-sm mt-2 text-gray-800">Your exisiting conversation will be here.</p>
                        <ButtonField
                        path="/new-conversation"

                            text="New Conversation"
                            className="px-16 mb-4" />
                            <div className="text-gray-500">kostomer</div>
                    </div>
                
                </div>
            ) : (
                <div
                    className="bg-blue-500 translate-y-2 hover:translate-y-0 transition-transform duration-300 w-[60px] h-[60px]  z-40 rounded-full fixed bottom-8 right-8 flex justify-center items-center cursor-pointer "
                    onClick={toggleChat}
                >
                    <img
                        src={Chaticon} 
                        alt="Chat Icon"
                        className=""
                    />
                </div>
            )}
        </div>
    )
}
    
    

export default Chat;