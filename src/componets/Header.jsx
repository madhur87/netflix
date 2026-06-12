import { LOGO_URL, USER_AVATAR } from "../utils/constain";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const isUser = useSelector((store)=> store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO_URL} alt="logo" />
      {isUser && (
        <div className="flex p-2">
          <img className="w-10 h-10" src={USER_AVATAR} alt="user-icon" />
          <p>{isUser?.displayName}</p>
          <button onClick={handleSignOut} className="font-bold text-white px-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
