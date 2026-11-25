import { useState } from 'react'
function Login() {
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const handleSubmit = (e)=>{
    e.preventDefault()
    }
    return (
    <div className="text-center">
        <p className="text-6xl font-bold text-blue-500">CampusFlow</p>
        <br/>
        <p className="text-4xl">Campus Resource and Equipment Management </p>
        <br/>
        <p className="text-3xl font-bold">Login Page</p>
        <br/>
    <form onSubmit={handleSubmit}>
    <label className="text-2xl"> Email Address : </label>
    <input type="email" required placeholder='Enter your College Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    <br/>
    <label className="text-2xl"> Password : </label>
    <input type="password" required placeholder='Enter your Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
    <br/>
    <br/>
    <button type="submit" className="text-2xl font bold">Login</button>
    </form>
    </div>
)
}
export default Login
