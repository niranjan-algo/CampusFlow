import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
const schema = z.object({
 email: z.string().email("Enter a valid email"),
 password: z.string().min(6, "Password must have at least 6 characters"),
});
function Register() {
 const navigate = useNavigate();
 const {register,handleSubmit,formState: { errors },} = useForm({
  resolver: zodResolver(schema),
 });
 function handleRegister(data) {
  console.log("CampusFlow Register", data);
  alert("Register Successful");
  navigate("/login", {
   state: { email: data.email },
  });
 }
 return (
  <div className="text-center">
   <p className="text-4xl font-bold">CampusFlow Register</p>
   <form onSubmit={handleSubmit(handleRegister)}>
    <label>Email</label>
    <input type="email" {...register("email")} />
    <p className="text-red-500">{errors.email?.message}</p>
    <label>Password</label>
    <input type="password" {...register("password")} />
    <p className="text-red-500">{errors.password?.message}</p>
    <button type="submit">Register</button>
   </form>
  </div>
 );
}
export default Register;