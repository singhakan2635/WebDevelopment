const Messages = ({ messages }) => 
{
    return(
        <div>
            
            <ul className="messages">
                <h2>Messages</h2>
                {messages.map((message,index) => (
                    <li key={index}>
                        <div className="display-chat">
                            <div className="sender"> 
                                <span className="message-name">{message.sender}</span>
                            </div>
                            <div className="text">
                                <span className="message-text">{message.text}</span>
                            </div>
                        </div>
                        
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;