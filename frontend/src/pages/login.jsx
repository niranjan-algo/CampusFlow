import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const registerdata = location.state;

    const [logindata, setLogindata] = useState({ email: "", password: "" });

    function handlechange(e) {
        setLogindata({ ...logindata,
        [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (
            registerdata &&
            logindata.email === registerdata.email &&
            logindata.password === registerdata.password
        ) {
            alert("Login successful");
            console.log(logindata);
            navigate("/dashboard",
                 { state: logindata });
        } else {
            alert("Invalid email or password");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-olive-100 p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 bg-olive-300 p-8 shadow-xl">
                <h1 className="text-center text-3xl font-bold text-slate-500">CampusFlow Login</h1>
                <label htmlFor="email" className="block">Email</label>
                <input type="email" name="email" id="email" required onChange={handlechange} placeholder="Enter your email" className="w-full rounded-xl border p-2" />
                <label htmlFor ="password" className="block">Password</label>
                <input type="password" name="password" id="password" required onChange={handlechange} placeholder="Enter your password" className="w-full rounded-xl border p-2" />
                <button className="w-full rounded-lg bg-slate-400 p-2 font-semibold text-black">Login</button>
                <p className="text-center text-sm">New user?
                   <Link to="/" className="text-blue-700 underline">Register</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
