import { LOGO_URL, USER_AVATAR } from "../utils/constain";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const navigate = useNavigate();
  const isUser = useSelector((store)=> store.user)
  const dispatch = useDispatch()

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe()
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
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
          <button onClick={handleSignOut} className="font-bold text-white mx-2 px-5 hover:bg-white/90 hover:text-black cursor-pointer">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
