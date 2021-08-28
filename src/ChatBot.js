import React from 'react';

function ChatBot({array}) {
    return (
        <div className="contentWrap">
            <div className="bodyChat">
            {array.map((message) =>
                <div className="chatMessage">
                    <img className="chatImage" src={message.image} />
                    <p>{message.text} </p>
                </div>
            )}
            </div>
        </div>)
}

export default ChatBot