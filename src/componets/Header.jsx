import { LOGO_URL } from "../utils/constain";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black z-10">
      <img className="w-40" src={LOGO_URL} alt="logo"/>
      <h1>Header Component</h1>
    </div>
  );
};

export default Header;
