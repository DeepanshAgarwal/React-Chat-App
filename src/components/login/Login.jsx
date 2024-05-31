import { toast } from "react-toastify";
import "./login.css";
import { useState } from "react";

export default function Login() {
    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
    });

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        toast.success("Logged in successfully!");
    };

    return (
        <div className="login">
            <div className="form welcome-back">
                <h1>Welcome Back!</h1>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" name="email" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button className="signin-button">Sign In</button>
                </form>
            </div>
            <div className="seperator"></div>
            <div className="form create-account">
                <h1>Create New Account</h1>
                <form>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an image
                    </label>
                    <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleAvatar}
                    />
                    <input type="text" placeholder="Username" name="username" />
                    <input type="email" placeholder="Email" name="email" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button className="signup-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
