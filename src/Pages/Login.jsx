import { useContext } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

  const datas = useLoaderData();
  console.log(datas);

  
  const { loginUser, googleLogin } = useContext( AuthContext )
  
  const location = useLocation()
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then()
      .catch()
  }
  const handleLogin = ( e ) => {


    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser( email, password )
      
      .then( result => {
        if ( result.user ) {
          toast.success( 'Login Successfully' );
          form.reset();
          navigate(location?.state?location.state : '/' );

        
          
      }
      } )
      .catch( error => {
        console.log(error.message);
        toast.error( "Some Error Ocurred" );
    })

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
          <button onClick={handleGoogleLogin} className="bg-neutral text-white rounded px-4 py-2">Login with Google</button>
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