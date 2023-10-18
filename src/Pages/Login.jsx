import { Link } from "react-router-dom";

const Login = () => {


  const handleLogin = ( e ) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
  }


  return (
    <div className="max-w-screen-xl mx-auto mt-10 h-screen">
      <div className="">
      <div className=""><h1 className="text-2xl mb-4 text-center">Login</h1></div>
      <form onSubmit={handleLogin}  className="border px-4 py-14 rounded-lg max-w-2xl mx-auto bg-[#f1f1f1f1]">
        <div className="mb-4">
          <label htmlFor="email" className="block">Email:</label>
          <input type="email" id="email" name="email" className="border rounded px-3 py-2 w-full" required />
        </div>
          
        <div className="mb-4">
          <label htmlFor="password" className="block">Password:</label>
          <input type="password" id="password" name="password" className="border rounded px-3 py-2 w-full" required />
        </div>
          
        <div className="mb-4">
          <input type="submit" value="Login" className="bg-blue-500 text-white rounded px-4 py-2" />
        </div>
          
        <div className="mb-4">
          <button className="bg-red-500 text-white rounded px-4 py-2">Login with Google</button>
        </div>
          
        <div className="text-center">
          <p>Do not have an account? <span className="text-blue-500"><Link to='/register'><button>Register</button></Link></span></p>
        </div>
      </form>
      </div>
    </div>
  );
};


export default Login;