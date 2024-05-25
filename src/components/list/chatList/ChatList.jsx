import { useState } from "react";
import "./chatList.css";

export default function ChatList() {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png"></img>
                    <input
                        type="text"
                        placeholder="Search or start new chat"
                    ></input>
                </div>
                <img
                    src={addMode ? "./minus.png" : "./plus.png"}
                    alt="search"
                    className="add"
                    onClick={() => setAddMode((prev) => !prev)}
                ></img>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="user" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hey this is John</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="user" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hey this is John</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="user" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hey this is John</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="user" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hey this is John</p>
                </div>
            </div>
        </div>
    );
}
