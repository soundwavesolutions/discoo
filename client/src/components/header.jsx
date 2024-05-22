import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#f8f8f8] border border-[#dbdbdb]">
      <div className="w-full max-w-[960px] mx-auto p-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FaBars
            size={18}
            className="cursor-pointer md:hidden"
          />
          <Link
            to="/"
            className="max-md:hidden"
          >
            <img
              src="https://portal.discover.com/global/images/discover-logo.png"
              alt="discover.com | Credit Cards, Banking, Mortgage, Personal Loans"
              width={113}
              height={18}
            />
          </Link>
        </div>
        <Link
          to="/"
          className="md:hidden"
        >
          <img
            src="https://portal.discover.com/global/images/discover-logo.png"
            alt="discover.com | Credit Cards"
            width={113}
            height={18}
          />
        </Link>
        <button className="text-white px-3 py-1 rounded font-bold text-lg bg-[#ff6000]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
