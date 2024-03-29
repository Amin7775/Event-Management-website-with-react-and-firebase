import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Login = () => {
  const location= useLocation();
  console.log("from Location login",location)
  const navigate = useNavigate()
  const {logIn,googleSignIn} = useContext(AuthContext)

  useEffect(()=>{
    Aos.init();
  },[])

  const handleLogin = e =>{
    e.preventDefault();
    
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    

    logIn(email,password)
    .then((user)=>{
      toast("You have logged in !")
      console.log(user)
      setTimeout(()=>{
        navigate(location?.state ? location.state : '/')
      },2000)
      
    })
    .catch(error=>{
      toast(error.message)
    })
  }

  const handleGoogleLogin=()=>{
    googleSignIn()
    .then(()=>{
      toast("You Have Successfully Logged in using Google");
      setTimeout(()=>{
        navigate('/')
      },2000)
    })
  }
    return (
        <div data-aos="fade-down" data-aos-duration="1000" className="h-[80vh] bg-[#F3F3F3]">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col w-full md:w-[80vw] lg:w-[40vw]">
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-6 mb-4 md:px-5 lg:px-0">Login to Your Account</h1>
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
              <p className="text-center mt-2">Sign In With Google? <span onClick={handleGoogleLogin} className="text-blue-600 cursor-pointer font-medium">Click Here</span></p>
              <p className="text-center">Don't have an account ? <span className="text-blue-600 font-medium"><Link to={"/register"}>Register</Link></span></p>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;