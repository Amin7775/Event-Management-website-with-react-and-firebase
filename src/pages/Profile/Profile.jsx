import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext)

    const handleProfile=e=>{
      e.preventDefault()
     
    }

    return (
        <div className="max-w-[1440px] mx-auto ">
            <div className="flex flow-col lg:flex-row  justify-center items-center w-full h-full">

            
            {/* User Details */}
            <div className="md:flex-1 border-2 p-5 bg-[#1b293d] text-white h-[100vh] ">
                <h1 className="text-4xl text-center font-bold mt-5 mb-10">Profile Details</h1>
                <div className="flex flex-col gap-5">
                <img className="md:h-[350px] lg:h-[450px] w-[450px] rounded-full mx-auto" src={user.photoURL} alt="" />
                <p className="text-2xl font-medium"><span className="font-semibold">Name</span> : {user.displayName}</p>
                <p className="text-2xl font-medium"><span className="font-semibold">Email</span> : {user.email}</p>
                <p className="text-2xl font-medium"><span className="font-semibold">Verified</span> : {user.emailVerified ? user.emailVerified : "No"}</p>
                <p className="text-2xl font-medium"><span className="font-semibold">Phone Number</span> : {user.phoneNumber ? user.phoneNumber : "No"}</p>

                </div>
            </div>

            <div className="flex-1 border-2 bg-[#52238a] text-white h-[100vh] hidden md:block">
            <h1 className="text-4xl text-center font-bold mt-5 mb-10">Update Profile</h1>

            <form onSubmit={handleProfile} className="card-body">
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-white">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered text-black"
                    name="name"
                    
                  />
                </div>
                {/* photoUrl */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-white">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered text-black"
                    name="photoUrl"
                    
                  />
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered text-black"
                    name="email"
                 
                  />
                </div>
                
                {/* Phone  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-white">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Number"
                    className="input input-bordered text-black"
                    name="number"
                    
                  />
                    
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-orange-600 text-2xl hover:bg-orange-400 text-white">Update</button>
                </div>
              </form>
            </div>
            </div>
        </div>
    );
};

export default Profile;