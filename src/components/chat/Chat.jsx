import "./chat.css";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [message, setMessage] = useState("");

    function handleEmoji(e) {
        setMessage((prev) => prev + e.emoji);
        setEmojiOpen(false);
    }

    return (
        <div className="chat">
            <div className="chat-header">
                <div className="chat-info">
                    <img src="./avatar.png"></img>
                    <div className="chat-title">
                        <span className="chat-name">John Doe</span>
                        <div className="chat-description">
                            Last seen 1 min ago
                        </div>
                    </div>
                </div>
                <div className="chat-icons">
                    <img src="./phone.png"></img>
                    <img src="./video.png"></img>
                    <img src="./info.png"></img>
                </div>
            </div>
            <div className="chat-messages"></div>
            <div className="chat-new-message">
                <div className="new-message-icons">
                    <img src="./img.png"></img>
                    <img src="./camera.png"></img>
                    <img src="./mic.png"></img>
                </div>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></input>
                <div className="new-message-emoji">
                    <img
                        src="./emoji.png"
                        onClick={() => setEmojiOpen((prev) => !prev)}
                    ></img>
                    <div className="emoji-picker">
                        <EmojiPicker
                            open={emojiOpen}
                            onEmojiClick={handleEmoji}
                        />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
}
