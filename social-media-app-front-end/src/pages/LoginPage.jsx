import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogIn } from "../ApiServices/AuthService";
import { setUser } from "../ApiServices/UserService";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async (event) => {
    event.preventDefault();
    console.log('Logging in with:', { username, password });

    const { jwt, success } = await LogIn({ 
      username, 
      password 
    });
    console.log('Login response:', { jwt, success });

    if (success) {
      setUser(jwt);
      localStorage.setItem("social-media-app-jwt", jwt);
      navigate("/home");
    } else {
      alert("Error logging in");
    }
  };

  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-1/2 bg-white rounded-lg min-h-[600px] overflow-hidden flex flex-row space-y-8">
        <div
          className="flex-1 bg-cover bg-center p-12 flex flex-col space-y-14 text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 79, 248, 0.5), rgba(7, 85, 131, 0.5)), url('https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <h1 className="text-8xl">Welcome back!</h1>
          <p>
            Sign in to connect with friends and colleagues. Join us today to be
            part of a vibrant community!
          </p>
          <div>
            <span className="text-base">New here? Join us and connect!</span>
            <Link to="/">
              <button className="w-1/2 p-2 border-none bg-white text-blue-500 font-bold cursor-pointer rounded">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 p-12 flex flex-col space-y-24 items-center">
          <h1 className="text-gray-700 text-4xl">Log In</h1>
          <form
            onSubmit={handleLoginClick}
            className="flex flex-col space-y-10"
          >
            <input
              onChange={handleUsernameChange}
              className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded"
              placeholder="Username"
              autoComplete="On"
            />
            <input
              onChange={handlePasswordChange}
              className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              placeholder="Password"
              type="password"
              autoComplete="On"
            />
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 font-bold px-4 py-2 text-white uppercase rounded tracking-wider">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
