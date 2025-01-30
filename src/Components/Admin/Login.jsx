import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form refresh
        const loginEmail = process.env.REACT_APP_LOGIN_EMAIL;
        const loginPassword = process.env.REACT_APP_LOGIN_PASSWORD;
    
        const handleSubmit = (e) => {
            e.preventDefault(); // Prevent page reload
    
            if (!email || !password) {
                setError("Email and Password are required!");
                return;
            }
    
            if (email !== loginEmail || password !== loginPassword) {
                setError("Invalid email or password!");
                return;
            }
    
            setError("");
            alert("Login Successful!");
        }
    };

    return (
        <div id="login" className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Login</h1>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="pwd"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
