import logo from "@assets/images/logo.png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="border-b border-s-teal-400">
      <div className="flex p-4 mx-auto">
        <div>
          <img src={logo} alt="Logo medium" className="h-8" />
        </div>

        <div className="rounded-full bg-[#F9F9F9] flex items-center gap-2 p-2 ml-4">
          <CiSearch className="text-2xl text-slate-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
