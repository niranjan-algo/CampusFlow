import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { authschema } from "../components/validators/authschema";
function Register() {
    const navigate = useNavigate();
    const {register,handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(authschema)
    });
    function print(data) {
        console.log(data);
        alert("Registration successful");
        navigate("/login", { state: { registerdata: data } });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
            <form onSubmit={handleSubmit(print)} className="w-full max-w-md space-y-3 rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-center text-3xl font-bold text-slate-400">CampusFlow Register</h1>
                <label htmlFor="name" className="block">Name</label>
                <input {...register("name")} placeholder="Enter your name" id="name" className="w-full rounded-lg border p-2" />
                <p>{errors.name?.message}</p>
                <label htmlFor="email" className="block">Email</label>
                <input type="email" {...register("email")} placeholder="Enter your college email" id="email" className="w-full rounded-lg border p-2" />
                <p>{errors.email?.message}</p>
                <label htmlFor="password" className="block">Password</label>
                <input type="password" {...register("password")} placeholder="Enter your password" id="password" className="w-full rounded-lg border p-2" />
                <p>{errors.password?.message}</p>
                <label htmlFor="age" className="block">Age</label>
                <input type="number" {...register("age")} placeholder="Enter your age" id="age" className="w-full rounded-lg border p-2" />
                <p>{errors.age?.message}</p>
                <button className="w-full rounded-lg bg-slate-600 p-2 font-semibold text-black">Register</button>
                <p className="text-center text-sm">Already registered?
                    <Link to="/login" className="text-blue-700 underline">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
