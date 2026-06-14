import { useSelector } from "react-redux";
import lang from "../utils/languageConstain";
const GPTSearchBar = () => {
  const getLang = useSelector((store) => store.user?.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[getLang].gptSearchPlaceholder}
          type="text"
        />
        <button className="m-4 col-span-3 py-2 px-4 bg-red-700 text-white">
          {lang[getLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
