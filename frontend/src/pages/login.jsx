import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    pass: "",
  });
  const location = useLocation();
  const userdata = location.state;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CampusFlow Login", formdata);
    alert("Login Successful");
    navigate("/dashboard", { state: formdata });
  };
  function handlechange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="text-center">
      <p className="text-6xl font-bold text-blue-500">CampusFlow</p>
      <br />
      <p className="text-4xl">Campus Resource and Equipment Management</p>
      <br />
      <p className="text-3xl font-bold">Login Page</p>
      <br />
      <form onSubmit={handleSubmit}>
        <label className="text-2xl">Email Address :</label>
        <input type="email" name="email" required placeholder="Enter your College Email" onChange={handlechange} />
        <br />
        <br />
        <label className="text-2xl">Password :</label>
        <input type="password" name="pass" required placeholder="Enter your Password" onChange={handlechange} />
        <br />
        <br />
        <button type="submit" className="text-2xl font-bold text-blue-500">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
