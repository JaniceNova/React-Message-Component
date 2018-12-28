import React from 'react';


const MessageCard = (props) => {
    return (
        <div className="ui message">
        <div className="header">{props.header}</div>
        <p>{props.message}</p>
    </div>
        );
};

export default MessageCard;