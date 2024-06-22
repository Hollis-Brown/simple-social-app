import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../ApiServices/AuthService";
import { setUser } from "../ApiServices/UserService";
import { setJwt } from "../ApiServices/JwtService";

const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisterClick = async (event) => {
    event.preventDefault(); 
    const { jwt, success } = await register({
      username,
      password,
    });

    if (success) {
      setJwt(jwt);
      setUser(jwt);
      navigate("/home");
    } else {
      alert("Error registering");
    }
  };



  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center ">
      <div className="w-1/2 bg-white rounded-lg min-h-[600px] overflow-hidden flex flex-row-reverse space-y-8 ">
        <div
          className="flex-1 bg-cover bg-center p-12 flex flex-col space-y-10 text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 79, 248, 0.5), rgba(7, 85, 131, 0.5)), url('https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <h1 className="text-8xl">Join the site!</h1>
          <p>
            Connect, share, and grow with friends and colleagues. Create an
            account today and be part of a vibrant community!
          </p>
          <div>
            <span className="text-base">
              Already part of our community? Log in!
            </span>
            <Link to="/log-in">
              <button className="w-1/2 p-2 border-none bg-white text-blue-500 font-bold cursor-pointer rounded-md">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 p-12 flex flex-col space-y-24 items-center">
          <h1 className="text-gray-700 text-4xl">Register</h1>
          <form onSubmit={handleRegisterClick} className="flex flex-col space-y-10">
            <input
              onChange={(event) => handleUsernameChange(event)}
              className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded"
              placeholder="Username"
              autoComplete="On"
            />

            <input
              onChange={(event) => handlePasswordChange(event)}
              className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              placeholder="Password"
              type="password"
              autoComplete="On"
            />
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded tracking-wider">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
