import "./detail.css";

export default function Detail() {
    return (
        <div className="detail">
            <div className="detail-user">
                <img src="./avatar.png" alt="avatar" />
                <h2>John Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="detail-detail">
                <div className="detail-info">
                    <div className="option">
                        <div className="title">
                            <span>Chat Settings</span>
                            <img src="./arrowUp.png"></img>
                        </div>
                    </div>
                    <div className="option">
                        <div className="title">
                            <span>Privacy & Help</span>
                            <img src="./arrowUp.png"></img>
                        </div>
                    </div>
                    <div className="option">
                        <div className="title">
                            <span>Shared Photos</span>
                            <img src="./arrowDown.png"></img>
                        </div>
                        <div className="photos">
                            <div className="photo-item">
                                <div className="photo-detail">
                                    <img src="https://images.unsplash.com/photo-1716718406268-6ece312abee0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                    <span>photo_2024.png</span>
                                </div>
                                <img
                                    src="./download.png"
                                    className="icon"
                                ></img>
                            </div>
                            <div className="photo-item">
                                <div className="photo-detail">
                                    <img src="https://images.unsplash.com/photo-1716718406268-6ece312abee0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                    <span>photo_2024.png</span>
                                </div>
                                <img
                                    src="./download.png"
                                    className="icon"
                                ></img>
                            </div>
                            <div className="photo-item">
                                <div className="photo-detail">
                                    <img src="https://images.unsplash.com/photo-1716718406268-6ece312abee0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                    <span>photo_2024.png</span>
                                </div>
                                <img
                                    src="./download.png"
                                    className="icon"
                                ></img>
                            </div>
                            <div className="photo-item">
                                <div className="photo-detail">
                                    <img src="https://images.unsplash.com/photo-1716718406268-6ece312abee0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                    <span>photo_2024.png</span>
                                </div>
                                <img
                                    src="./download.png"
                                    className="icon"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="title">
                            <span>Shared Files</span>
                            <img src="./arrowUp.png"></img>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="block-user">Block User</button>
                    <button className="logout">Logout</button>
                </div>
            </div>
        </div>
    );
}
