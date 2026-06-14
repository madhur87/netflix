import { LOGO_URL, USER_AVATAR } from "../utils/constain";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser, selectLang } from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/gptSearchSlice";
import { SUPPORT_LANG } from "../utils/constain";

const Header = () => {
  const navigate = useNavigate();
  const isUser = useSelector((store) => store.user?.userInfo);
  const lang = useSelector((store) => store.user?.lang);
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.GPT?.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browser", { replace: true });
      } else {
        dispatch(removeUser());
        navigate("/", { replace: true });
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const userSelectLang = (e) => {
    dispatch(selectLang(e.target.value));
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <Link to="/">
        <img className="w-40" src={LOGO_URL} alt="logo" />
      </Link>
      {isUser && (
        <div className="flex p-2">
          <button
            onClick={handleGPTSearch}
            className="font-bold mx-2 px-5 mr-4 text-white hover:bg-white/90 hover:text-black cursor-pointer"
          >
            {!toggle ? "GPT Search" : "Browser"}
          </button>
          <img className="w-10 h-10" src={USER_AVATAR} alt="user-icon" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white mx-2 px-5 hover:bg-white/90 hover:text-black cursor-pointer"
          >
            Sign Out
          </button>
          {toggle && (
            <select
              defaultValue={
                SUPPORT_LANG.find((res) => res.identifier === lang).identifier
              }
              onChange={userSelectLang}
              className=" text-white mx-2 px-5 hover:bg-white/90 hover:text-black cursor-pointer"
            >
              {SUPPORT_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
