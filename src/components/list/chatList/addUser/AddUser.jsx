import "./addUser.css";

export default function AddUser() {
    return (
        <div className="addUser">
            <form>
                <input type="text" placeholder="Username" name="username" />
                <button className="search">Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png"></img>
                    <span>John Doe</span>
                </div>
                <button className="add">Add User</button>
            </div>
        </div>
    );
}
