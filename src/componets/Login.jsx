import Header from "./Header";
import { BG_URL } from "../utils/constain";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-24">
        <input type="text" placeholder="Email" className="p-2 m-2" />
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <button className="p-4 m-4">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
