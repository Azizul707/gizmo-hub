import { Link } from "react-router-dom";

const Register = () => {

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( name,email,password );
    };

    return (
        <div className="mt-10">
            <h1 className="text-2xl mb-4 text-center font-semibold">Register</h1>
            <div className="max-w-screen-xl mx-auto mt-10 h-screen ">
                <form onSubmit={handleSubmit} className="border px-4 py-14 rounded-lg max-w-2xl mx-auto bg-[#f1f1f1]">
                    <div className="mb-4">
                        <label htmlFor="name" className="block">Name:</label>
                        <input type="text" id="name" name="name" className="border rounded px-3 py-2 w-full" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block">Email:</label>
                        <input type="email" id="email" name="email" className="border rounded px-3 py-2 w-full" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block">Password:</label>
                        <input type="password" id="password" name="password" className="border rounded px-3 py-2 w-full" required />
                    </div>

                    <div className="mb-4">
                        <input type="submit" value="Register" className="bg-blue-500 text-white rounded px-4 py-2" />
                    </div>
                    <div className="mb-4">
                        <button className="bg-red-500 text-white rounded px-4 py-2">Login with Google</button>
                    </div>

                    <div className="text-center">
                        <p>Already have an account? <span><Link to='/login'><button className="text-blue-500 font-semibold">Login</button></Link></span></p>
                    </div>
                </form>
            </div>
        </div>

    );
}




export default Register;