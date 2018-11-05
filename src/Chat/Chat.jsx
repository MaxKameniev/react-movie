import React from 'react';
import './Chat.css';
import PropTypes  from 'prop-types';

const Chat = ({chats}) => {
    return (
        <div className="chat_blc">
            <div className="main_user"><img className="main_img" src="https://via.placeholder.com/40x40" alt="Main icon"/>Hello, Name</div>
            <div className="chat_list">
                <div className="chat_title">Waiting for backend</div>

                    {chats.map(el =>  <div key={el.id} className="user_wrapper"><div className="user_data"><img className="user_icon" src={el.icon} alt="User icon"/><div className="user_name"> {el.name}</div></div>
                    <div className="user_msg">{el.message}</div></div>)}

            </div>
        </div>
        
    )
} 

Chat.propTypes = {
    chats: PropTypes.array,
    id: PropTypes.number
}

export default Chat;