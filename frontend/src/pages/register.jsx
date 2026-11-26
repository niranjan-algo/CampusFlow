import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  email: z.string().email("Enter a valid email"),

  password: z.string().min(6, "Password must have at least 6 characters"),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
    function handleRegister(data) {
    console.log(data);
  }
  return (
    <div>
      <h1>CampusFlow Register</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label>Email</label>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <label>Password</label>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
