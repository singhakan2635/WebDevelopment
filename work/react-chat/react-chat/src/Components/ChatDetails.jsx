import Messages from "./Messages";
import Users from './Users';
import AddNewMessage from './AddNewMessage';
import Logout from './Logout';

const ChatDetails = ({users, messages, logout, abilityToSendMessage}) => 
{
    return (
        <div className="app">
            <div className="header">
            <h1 className="chat-header">ChatRoom</h1>
            </div>
            
            <div className="display-panel">
                <Users users={users} />
                <Messages messages={messages}/>
                <Logout logout={logout}/>
            </div>
            <AddNewMessage abilityToSendMessage={abilityToSendMessage} />
            
        </div>
    )
};

export default ChatDetails;
