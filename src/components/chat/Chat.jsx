import "./chat.css";
import { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [message, setMessage] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

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
            <div className="chat-messages">
                <div className="chat-message">
                    <img src="./avatar.png"></img>
                    <div className="chat-message-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec nec eros eget sapien tempus aliquet.
                            Duis at finibus odio. Sed a quam maximus,
                            condimentum turpis ac, tempor magna.
                        </p>
                        <span className="chat-timestamp">1:30 PM</span>
                    </div>
                </div>
                <div className="chat-message own-message">
                    <div className="chat-message-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec nec eros eget sapien tempus aliquet.
                            Duis at finibus odio. Sed a quam maximus,
                            condimentum turpis ac, tempor magna.
                        </p>
                        <span className="chat-timestamp">1:30 PM</span>
                    </div>
                </div>
                <div className="chat-message">
                    <img src="./avatar.png"></img>
                    <div className="chat-message-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec nec eros eget sapien tempus aliquet.
                            Duis at finibus odio. Sed a quam maximus,
                            condimentum turpis ac, tempor magna.
                        </p>
                        <span className="chat-timestamp">1:30 PM</span>
                    </div>
                </div>
                <div className="chat-message own-message">
                    <div className="chat-message-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec nec eros eget sapien tempus aliquet.
                            Duis at finibus odio. Sed a quam maximus,
                            condimentum turpis ac, tempor magna.
                        </p>
                        <span className="chat-timestamp">1:30 PM</span>
                    </div>
                </div>
                <div className="chat-message">
                    <img src="./avatar.png"></img>
                    <div className="chat-message-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec nec eros eget sapien tempus aliquet.
                            Duis at finibus odio. Sed a quam maximus,
                            condimentum turpis ac, tempor magna.
                        </p>
                        <span className="chat-timestamp">1:30 PM</span>
                    </div>
                </div>
                <div className="chat-message own-message">
                    <div className="chat-message-text">
                        <img src="https://images.unsplash.com/photo-1716718406268-6ece312abee0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec nec eros eget sapien tempus aliquet.
                            Duis at finibus odio. Sed a quam maximus,
                            condimentum turpis ac, tempor magna.
                        </p>
                        <span className="chat-timestamp">1:30 PM</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
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
