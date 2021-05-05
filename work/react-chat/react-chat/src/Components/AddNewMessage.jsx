import { useState } from "react"

const AddNewMessage = ({ abilityToSendMessage }) => {

    const [text, setText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const renderAddMessage = (e) =>
    {
        abilityToSendMessage(text);
        setText('');
        setIsDisabled(true);
    }

    const onChange = (e) => 
    {
        setText(e.target.value);
        setIsDisabled(!e.target.value);
    };

    return (
        <div className="send-message">
            <div className="message-bar">
                <div className="enter-message">
                    <input onChange={onChange} value={text} placeholder="Enter Your Message Here!" required/>
                </div>
            
                <button onClick={renderAddMessage} disabled={isDisabled}> Send</button>
            </div>
            
        </div>
    );
};

export default AddNewMessage;