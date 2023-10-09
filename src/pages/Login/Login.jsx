import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const location= useLocation();
  const navigate = useNavigate()
  const {logIn,googleSignIn} = useContext(AuthContext)

  const handleLogin = e =>{
    e.preventDefault();

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    logIn(email,password)
    .then(user=>{
      console.log("from login",user)
      navigate(location?.state ? location.state: '/')
    })
  }

  const handleGoogleLogin=()=>{
    googleSignIn()
  }
    return (
        <div className="h-[80vh] bg-[#F3F3F3]">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col w-[40vw]">
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <h1 className="text-4xl font-bold text-center mt-6 mb-4">Login to Your Account</h1>
              <hr className="w-full border-2"/>
              <form onSubmit={handleLogin} className="card-body">
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                    
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              <p>Sign In With Google? <span onClick={handleGoogleLogin} className="text-blue-600 cursor-pointer">Click Here</span></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;