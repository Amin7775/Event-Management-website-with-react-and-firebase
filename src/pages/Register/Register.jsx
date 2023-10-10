import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const {createUser,updateUserInfo} = useContext(AuthContext)
    const navigate=useNavigate();

    const handleRegister = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const photoUrl = form.get('photoUrl')
        const email = form.get('email')
        const password = form.get('password')

        // validation
        if(password.length<6){
          toast("Password Must Have At least 6 Characters")
          return
        }

        if(!/[A-Z]/.test(password)){
          toast("Password Must Have At least 1 Capital Letter")
          return
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
          toast("Password Must Have At least 1 Special Characters")
          return 
        }

        console.log(name,photoUrl,email,password)

        createUser(email,password)
        .then(()=>{
            updateUserInfo(name,photoUrl)
            .then(()=>{
              toast("Registration Success")
              setTimeout(()=>{
                navigate('/')
              },2000)
            })
        })
        .catch((error)=>{
          toast(error.message)
        })
    }
  return (
    <div className="  bg-[#F3F3F3]">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col w-full md:w-[80vw] lg:w-[40vw]">
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-6 mb-4">Register Your Account</h1>
              <hr className="w-full border-2"/>
              <form onSubmit={handleRegister} className="card-body">
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    name="name"
                    
                  />
                </div>
                {/* photoUrl */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    name="photoUrl"
                    
                  />
                </div>
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
                  <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-center mt-4">Already have an account ? <span className="text-blue-600 font-medium"><Link to={"/login"}>Login</Link></span></p>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;