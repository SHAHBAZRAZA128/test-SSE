
import { useState } from "react";
import { SafetyCulturelogo, Closeicon , ConversationEmpty,Chaticon } from "../assets/index"
import {  } from "../assets/index"
import Button from "./ButtonField";


const Chat: React.FC = () => {

    const [isChatOpen, setisChatOpen] = useState(false)
    const toggleChat = () => {
        setisChatOpen(!isChatOpen);
    };

    return (
        <div className="relative z-0 ">
            {isChatOpen ? (
                <div className={`bg-gray-100 h-[550px] w-[380px] sticky z-[40] right-12 bottom-[70px] rounded-xl shadow-xl border-2  border-b-2 `}>
                    <div className="h-40 flex flex-col justify-between items-center px-8">
                        <img className="w-4 h-4 mt-4 relative left-40 rounded-full" 
                        src={Closeicon} 
                        alt="icon" 
                        onClick={toggleChat}/>
                        <img className="h-8 w-10 rounded-full" src={SafetyCulturelogo}></img>
                        <h1 className="text-gray-800 font-medium leading-none">SafetyCulture Support</h1>
                        <p className="mb-8 text-sm text-gray-800">By starting a chat, you consent to us recording <span className="block text-center leading-none">the chat as per our Privacy Policy.</span></p>
                    </div>
                    <hr></hr>
                    <div className="bg-white flex flex-col justify-between items-center rounded-xl shadow-xl" >
                        <img className=" mt-14" src={ConversationEmpty} alt="" />
                        <h1 className="text-gray-800 font-medium leading-none mt-4">No Conversation yet</h1>
                        <p className="mb-20 text-sm mt-2 text-gray-800">Your exisiting conversation will be here.</p>
                        <Button
                            text="New Conversation"
                            className="px-16 mb-4" />
                            <div className="text-gray-500">kostomer</div>
                    </div>
                
                </div>
            ) : (
                <div
                    className="bg-blue-500 w-12 h-12 rounded-full fixed bottom-4 right-4 flex justify-center items-center cursor-pointer"
                    onClick={toggleChat}
                >
                    <img
                        src={Chaticon} // Use a chat icon here instead
                        alt="Chat Icon"
                        className="w-6 h-6"
                    />
                </div>
            )}
        </div>
    )
}
    
    

export default Chat;