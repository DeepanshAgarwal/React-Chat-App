import "./chat.css";

export default function Chat() {
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
            <div className="chat-new-message"></div>
        </div>
    );
}
